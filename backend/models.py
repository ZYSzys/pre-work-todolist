from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    user = models.ForeignKey(User)
    todo = models.CharField(max_length=50)
    completed = models.CharField(max_length=2)
    date = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return u'%d %s %s' % (self.id, self.todo, self.completed)

    class Meta:
        ordering = ['date']
