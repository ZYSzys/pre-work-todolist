from django.conf.urls import url
from . import api

urlpatterns = [
    url(r'^$', api.index, name='todo'),
    url(r'^add$', api.add, name='add'),
    url(r'^delete$', api.delete, name='delete'),
    url(r'^toggle$', api.toggle, name='toggle'),
    url(r'^change$', api.change, name='change')
]
