from rest_framework import generics, viewsets, permissions, filters
from ygt.models import Exercise, Category, Ygt, CustomUser, Day
from .serializers import YgtSerializer, ExerciseSerializer, CategorySerializer, UserSerializer, DaySerializer
from users.models import CustomUser

# class ListYgt(generics.ListCreateAPIView):
#     queryset = models.Ygt.objects.all()
#     serializer_class = YgtSerializer


# class DetailYgt(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Ygt.objects.all()
#     serializer_class = YgtSerializer


class YgtViewSet(viewsets.ModelViewSet):
    queryset = Ygt.objects.all()
    serializer_class = YgtSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['category']

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username']

class CurrentUserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    
    def get_object(self):
        return self.request.user

class DayViewSet(viewsets.ModelViewSet):
    queryset = Day.objects.all()
    serializer_class = DaySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['day']