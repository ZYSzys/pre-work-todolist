from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    user = models.ForeignKey(User)
    todo = models.CharField(max_length=50)
    completed = models.CharField(max_length=2)
    date = models.CharField(max_length=10)
    importance = models.CharField(max_length=10)
