from asyncore import read
from rest_framework import serializers
from ygt import models
from users.models import CustomUser
from ygt.models import Exercise, Category

# class NestedUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = (
#             'username',
#             'id',
#         )
#         model = CustomUser

class NestedExerciseSerializer(serializers.ModelSerializer):
    class Meta: 
        fields = (
            'id',
            'name',
            'description',
        )
        model = Exercise

class NestedCategorySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
        )
        model = Category

class YgtSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
        )
        model = models.Ygt

class ExerciseSerializer(serializers.ModelSerializer):
    category_detail = NestedCategorySerializer(source='categories', many=True, read_only=True)
    class Meta: 
        fields = (
            'id',
            'name',
            'description',
            'category_detail',
            'added_by',
        )
        model = Exercise

class CategorySerializer(serializers.ModelSerializer):
    exercise_detail = NestedExerciseSerializer(source='exercises', many=True, read_only=True)
    class Meta: 
        fields = (
            'id',
            'name',
            'exercise_detail',
        )
        model = Category

class UserSerializer(serializers.ModelSerializer):
    added_info = NestedExerciseSerializer(source='added', many=True, read_only=True)
    class Meta :
        fields = (
            'id',
            'username',
            'added',
            'added_info'
        )
        model = CustomUser