# Generated by Django 4.0.3 on 2022-04-11 17:51

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ygt', '0008_alter_category_exercises_alter_exercise_added_by'),
    ]

    operations = [
        migrations.CreateModel(
            name='Day',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.DateField()),
                ('user', models.ManyToManyField(blank=True, related_name='days', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
