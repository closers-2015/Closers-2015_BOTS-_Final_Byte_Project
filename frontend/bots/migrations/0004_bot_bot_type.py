# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-10 16:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bots', '0003_auto_20160310_1622'),
    ]

    operations = [
        migrations.AddField(
            model_name='bot',
            name='bot_type',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
    ]