# Generated by Django 4.0.3 on 2022-04-05 22:57

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ygt', '0004_exercise_added_by'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercise',
            name='added_by',
        ),
        migrations.AddField(
            model_name='exercise',
            name='exercise_list',
            field=models.ManyToManyField(related_name='exercise_list', to=settings.AUTH_USER_MODEL),
        ),
    ]
