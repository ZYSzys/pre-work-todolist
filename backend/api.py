from django.shortcuts import render
from django.template import RequestContext
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from django.http import Http404
from .models import Todo, TodoSerializer

# import json
from django.core import serializers
from rest_framework.renderers import JSONRenderer

def response_as_json(data, foreign_penetrate=False):
    jsonString = JSONRenderer().render(data)
    print(jsonString)
    jsonString = serializers.serialize('json',jsonString)
    print(jsonString)
    # jsonString = serializer(data=data, output_type="json", foreign=foreign_penetrate)
    #print(data)
    #print(jsonString)
    response = HttpResponse(
        #json.dumps(data),
        jsonString,
        content_type="application/json",
    )
    # Don't need this since we used corsheader
    # response["Access-Control-Allow-Origin"] = "*"
    return response

def json_response(data, code=200, foreign_penetrate=False, **kwargs):
    #print(data)
    '''data = {
        "code": code,
        "msg": "OK",
        "data": data
    }'''
    return HttpResponse(data, content_type="application/json") #response_as_json(data, foreign_penetrate=foreign_penetrate)


def index(request):
    todos = Todo.objects.all()
    data = serializers.serialize('json',todos)
    #serializers.serialize("json", data)
    #print(data)
    return json_response(data)

def add(request):
    if request.method == 'POST':
        todo = request.POST['todo']
        completed = request.POST['completed']
        user = User.objects.get(id='1')
        newTodo = Todo(user=user, todo=todo, completed=completed)
        newTodo.save()

        return json_response('OK')
    else:
        return json_response('NO...', 404)

def delete(request, id=''):
    return


def toggle(request):
    return


def change(request):
    return

