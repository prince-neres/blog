from django.urls import path
from . import views

urlpatterns = [
    path('', views.getPosts, name= 'posts'),
    path('my-posts/<str:pk>/', views.getMyPosts, name= 'my-posts'),
    path('<str:pk>/', views.getPost, name="post"),
]
