from django.conf.urls import patterns, url

from russ360 import views

urlpatterns = patterns('',

    url(r'^$', views.index, name='index'),
    url(r'^chapter1$', views.chapter1, name='chapter1'),
    url(r'^chapter2$', views.chapter2, name='chapter2'),
    url(r'^chapter3$', views.chapter3, name='chapter3'),
    url(r'^chapter4$', views.chapter4, name='chapter4'),
    url(r'^chapter5$', views.chapter5, name='chapter5'),
    url(r'^chapter6$', views.chapter6, name='chapter6'),
    url(r'^chapter7$', views.chapter7, name='chapter7'),
    url(r'^chapter8$', views.chapter8, name='chapter8'),
    url(r'^chapter9$', views.chapter9, name='chapter9'),
    url(r'^chapter10$', views.chapter10, name='chapter10'),
    url(r'^chapter12$', views.chapter12, name='chapter12'),
    url(r'^chapter13$', views.chapter13, name='chapter13'),
    #url(r'^.*', views.view404, name='404'),
)
