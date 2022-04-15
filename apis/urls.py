from django.urls import path
from .views import ExerciseViewSet, CategoryViewSet, UserViewSet, CurrentUserView, DayViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('exercises', ExerciseViewSet, basename='exercises')
router.register('categories', CategoryViewSet, basename='categories')
router.register('users', UserViewSet, basename='users')
router.register('days', DayViewSet, basename='days')

urlpatterns = router.urls + [
    path('currentuser/', CurrentUserView.as_view())
]
