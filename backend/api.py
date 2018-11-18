from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from django.http import Http404
from .models import Todo

from django.core import serializers
#import json
#from rest_framework.renderers import JSONRenderer

def jsonResponse(data, status_code=200):
    response = HttpResponse(data, content_type="application/json")
    response.status_code = status_code
    return response


def index(request):
    todos = Todo.objects.all()
    data = serializers.serialize('json',todos)

    print(data)
    response = jsonResponse(data)
    return response

def add(request):
    if request.method == 'POST':
        todo = request.POST['todo']
        completed = request.POST['completed']
        date = request.POST['expireDate']
        user = User.objects.get(id='1')
        newTodo = Todo(user=user, todo=todo, completed=completed, date=date)
        newTodo.save()

        return jsonResponse('OK')
    else:
        raise Http404 #jsonResponse('NO', 404)


def delete(request):
    delTodo = request.POST['todo']
    todo = Todo.objects.get(todo=delTodo)
    print('need:delete', todo)
    try:
        todo.delete()

    except Exception:
        raise Http404
        return HttpResponseRedirect('/todo/')
    return jsonResponse('OK')


def toggle(request):
    toggleTodo = request.POST['todo']
    todo = Todo.objects.get(todo=toggleTodo)
    todo.completed = str(int(todo.completed) ^ 1)
    todo.save()
    return jsonResponse('OK')


def change(request):
    changeTodo = request.POST['todo']
    newTodo = request.POST['newTodo']
    if request.method == 'POST':
        try:
            todo = Todo.objects.get(todo=changeTodo)
        except Exception:
            raise Http404

        todo.todo = newTodo
        # todo.completed = request.POST['completed']
        todo.save()
        return jsonResponse('OK')
    else:
        raise Http404

