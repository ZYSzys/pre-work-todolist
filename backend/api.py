from django.shortcuts import render
from django.template import RequestContext
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
        user = User.objects.get(id='1')
        newTodo = Todo(user=user, todo=todo, completed=completed)
        newTodo.save()

        return jsonResponse('OK')
    else:
        raise Http404 #jsonResponse('NO', 404)


def delete(request):
    id = request.POST['id']
    todos = Todo.objects.all()
    print(todos)
    try:
        todo = Todo.objects.get(id=id)
        todo.delete()
        print(todo)
    except Exception:
        raise Http404
        return HttpResponseRedirect('/todo/')
    return jsonResponse('OK')


def toggle(request):
    id = request.POST['id']
    todo = Todo.objects.get(id=id)
    todo.completed ^= 1
    todo.save()
    return jsonResponse('OK')


def change(request):
    id = request.POST['id']
    if request.method == 'POST':
        try:
            todo = Todo.objects.get(id=id)
        except Exception:
            raise Http404

        todo.todo = request.POST['todo']
        todo.completed = request.POST['completed']
        todo.save()
        return jsonResponse('OK')
    else:
        raise Http404

