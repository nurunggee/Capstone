from rest_framework import serializers
from users.models import CustomUser
from ygt.models import Exercise, Category, Day

################ Nested Serializers ################ 
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

class NestedDaySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'day',
        )
        model = Day



################ Serializers ################ 
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

class DaySerializer(serializers.ModelSerializer):
    class Meta :
        fields = (
            'id',
            'day',
            'user'
        )
        model = Day

class UserSerializer(serializers.ModelSerializer):
    added_info = NestedExerciseSerializer(source='added', many=True, read_only=True)
    day_detail = NestedDaySerializer(source="days", many=True, read_only=True)
    class Meta :
        fields = (
            'id',
            'username',
            'added',
            'added_info',
            'days',
            'day_detail'
        )
        model = CustomUser





