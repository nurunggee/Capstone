from django.shortcuts import render
from .forms import registrationForm

def home(request):
    return render(request, "home.html")

def register(request):
    form = registrationForm(request.POST)
    if form.is_valid:
        pass
    else:
        form = registrationForm()

    context = {
        "form":form
    }
    return render(request, "register.html", context)