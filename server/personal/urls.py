from django.conf.urls import url

from personal import views

urlpatterns = [
    url(r'^about$', views.about, name='about'),
    url(r'^contacts$', views.contacts, name='contacts'),
    url(r'^gallery$', views.gallery, name='gallery'),
    url(r'^$', views.index, name='index'),
]