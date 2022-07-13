from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from backend.serializers import *


User = get_user_model()


@api_view(['GET'])
def get_single_user(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
