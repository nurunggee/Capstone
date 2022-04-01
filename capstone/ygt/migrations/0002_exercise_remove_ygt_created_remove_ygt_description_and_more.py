# Generated by Django 4.0.3 on 2022-03-29 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ygt', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name='ygt',
            name='created',
        ),
        migrations.RemoveField(
            model_name='ygt',
            name='description',
        ),
        migrations.RemoveField(
            model_name='ygt',
            name='updated',
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('exercises', models.ManyToManyField(related_name='categories', to='ygt.exercise')),
            ],
        ),
    ]