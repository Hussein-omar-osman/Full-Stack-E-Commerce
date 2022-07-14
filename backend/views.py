from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import generics
from backend.serializers import *


User = get_user_model()


@api_view(['GET'])
def get_single_user(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


class ProfileView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'pk'
