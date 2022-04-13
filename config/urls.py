from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apis/v1/', include('apis.urls')),
    path('users/', include('django.contrib.auth.urls')),
    path('users/', include('users.urls')),
    path('', TemplateView.as_view(template_name='home.html'), name='home'), 
    path('calendar/', TemplateView.as_view(template_name='calendar.html'), name='calendar'),
    path('list/', TemplateView.as_view(template_name='list.html'), name='list'),
    path('account/', TemplateView.as_view(template_name='account.html'), name='account'), 
]
