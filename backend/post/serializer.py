from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    title = serializers.CharField(required=True)
    content = serializers.CharField(required=False)
    image = serializers.ImageField(required=False)

    class Meta:
        model = Post
        fields = '__all__'