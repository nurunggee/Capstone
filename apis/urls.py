from django.urls import path
from .views import YgtViewSet, ExerciseViewSet, CategoryViewSet, UserViewSet, CurrentUserView, DayViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('ygt', YgtViewSet, basename='ygts')
router.register('exercises', ExerciseViewSet, basename='exercises')
router.register('categories', CategoryViewSet, basename='categories')
router.register('users', UserViewSet, basename='users')
router.register('days', DayViewSet, basename='days')

urlpatterns = router.urls + [
    path('currentuser/', CurrentUserView.as_view())
]

# urlpatterns = 'exercise'

# urlpatterns = [
#     path('', ListYgt.as_view()),
#     path('<int:pk>/', DetailYgt.as_view()),
# ]