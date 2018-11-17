from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers


class Todo(models.Model):
    user = models.ForeignKey(User)
    todo = models.CharField(max_length=50)
    completed = models.CharField(max_length=2)
    date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return u'%d %s %s' % (self.id, self.todo, self.completed)

    class Meta:
        ordering = ['date']


class TodoSerializer(serializers.Serializer):
    # user = serializers.CharField(User)
    #todo = serializers.CharField(max_length=50)
    completed = serializers.CharField(max_length=2)
    date = serializers.DateTimeField()
