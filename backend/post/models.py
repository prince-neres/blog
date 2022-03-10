from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=2000)
    image = models.ImageField(upload_to='post_images')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title