from django import form
from django.forms import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class registrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]