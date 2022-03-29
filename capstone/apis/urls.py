from django.urls import path
from .views import YgtViewSet
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('', YgtViewSet, basename='ygts')

urlpatterns = router.urls


# urlpatterns = [
#     path('', ListYgt.as_view()),
#     path('<int:pk>/', DetailYgt.as_view()),
# ]
