from rest_framework.response import Response
from .models import Post
from .serializer import PostSerializer

def getPostsList(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

def getMyPostsList(request, pk):
    posts = Post.objects.filter(user=pk)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

def getPostDetail(request, pk):
    posts = Post.objects.get(id=pk)
    serializer = PostSerializer(posts, many=False)
    return Response(serializer.data)

def createPost(request):
    data = request.data
    posts_serializer = PostSerializer(data=data)
    if posts_serializer.is_valid():
        posts_serializer.save()
        return Response(posts_serializer.data)
    else:
        return Response(posts_serializer.errors)

def updatePost(request, pk):
    data = request.data
    post = Post.objects.get(id=pk)
    serializer = PostSerializer(instance=post, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        print('error', serializer.errors)
        return Response(serializer.errors)

def deletePost(request, pk):
    post = Post.objects.get(id=pk)
    post.delete()
    return Response('Post deletado!')
