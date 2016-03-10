# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-10 15:42
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('bots', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bot',
            old_name='user_id',
            new_name='user',
        ),
        migrations.AddField(
            model_name='bot',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 3, 10, 15, 42, 19, 683865, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bot',
            name='description',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
    ]