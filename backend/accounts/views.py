from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/auth/users/',
        '/auth/jwt/create/',
        '/auth/jwt/refresh/',
        '/auth/users/activation/',
        '/auth/users/reset_password/',
        '/auth/users/reset_password_confirm/',
    ]

    return Response(routes)
