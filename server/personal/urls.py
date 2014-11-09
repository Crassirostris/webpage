from django.conf.urls import url

from personal import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]