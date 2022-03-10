from rest_framework.decorators import api_view
from .services import updatePost, getPostDetail, deletePost, getPostsList, createPost, getMyPostsList
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

authentication_classes = (TokenAuthentication,)
permission_classes = (IsAuthenticated,)

@api_view(['GET', 'POST'])
def getPosts(request):

    if request.method == 'GET':
        return getPostsList(request)
    
    if request.method == 'POST':
        return createPost(request)

@api_view(['GET'])
def getMyPosts(request, pk):

    return getMyPostsList(request, pk)

@api_view(['GET', 'DELETE', 'PUT'])
def getPost(request, pk):

    if request.method == 'PUT':
        return updatePost(request, pk)

    if request.method == 'GET':
        return getPostDetail(request, pk)

    if request.method == 'DELETE':
        return deletePost(request, pk)