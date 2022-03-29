from django.core.management.base import BaseCommand
from ygt.models import Exercise, Category
import requests

class Command(BaseCommand):

    def handle(self, *args, **options):
        categories = {
            10:"Abs",
            8:"Arms",
            12: "Back",
            14: "Calves",
            11: "Chest",
            9: "Legs",
            13: "Shoulders"
        }



        Exercise.objects.all().delete()
        Category.objects.all().delete()

        exercises = requests.get("https://wger.de/api/v2/exercise", params = {'limit':1000,'language':2, 'equipment':7}).json()
        print(len(exercises["results"]))
        for exercise in exercises['results']:
            exercise_obj = Exercise.objects.create(
                name=exercise['name'],
                description=exercise['description']
            )
                
            category_obj, created = Category.objects.get_or_create(name=categories[exercise['category']])
            category_obj.exercises.add(exercise_obj)