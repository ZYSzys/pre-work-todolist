# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20181117_1136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date',
            field=models.CharField(max_length=10),
        ),
    ]
