from pydoc import describe
from django.db import models

class Ygt(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title
        
class Exercise(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    # categories
    

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50)
    exercises = models.ManyToManyField(Exercise, related_name='categories')

    def __str__(self):
        return self.name