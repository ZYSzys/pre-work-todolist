# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todo',
            options={'ordering': ['date']},
        ),
        migrations.RenameField(
            model_name='todo',
            old_name='flag',
            new_name='completed',
        ),
        migrations.RenameField(
            model_name='todo',
            old_name='pubtime',
            new_name='date',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='priority',
        ),
    ]
