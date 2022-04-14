from pydoc import describe
from django.db import models
from users.models import CustomUser
from django.contrib.auth import get_user_model

# class Ygt(models.Model):
#     title = models.CharField(max_length=200)

#     def __str__(self):
#         return self.title
        
class Exercise(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    added_by = models.ManyToManyField(get_user_model(), related_name="added", blank=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50)
    exercises = models.ManyToManyField(Exercise, related_name='categories', blank=True)

    def __str__(self):
        return self.name


class Day(models.Model):
    day = models.DateField()
    user = models.ManyToManyField(get_user_model(), related_name="days", blank=True)

    def __str__(self):
        return str(self.day)