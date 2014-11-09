from django.shortcuts import render

def index(request):
    print('index')
    return render(request, 'index.html')


def about(request):
    print('about')
    return render(request, 'about.html')


def contacts(request):
    return render(request, 'contacts.html')


def gallery(request):
    return render(request, 'gallery.html')