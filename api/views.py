import os
from django.http import HttpResponse, HttpResponseNotFound
from django.views import View
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def getRoutes(request):
    routes = {
        'all': '/api/',

        'jwt create': '/api/auth/jwt/create/',
        'jwt refresh': '/api/auth/jwt/refresh/',
        'user activation': '/api/auth/users/activation/',
        'reset password': '/api/auth/users/reset_password/',
        'confirm reset password': '/api/auth/users/reset_password_confirm/',

        'carts': '/api/carts/',
        'cartitems': '/api/cartitems/',
        'cart': '/api/cart/<pk>',
        'cartitem': '/api/cartitem/<pk>',

        'categories': '/api/categories/',
        'category': '/api/category/<pk>',
        'products': '/api/products/',
        'product': '/api/product/<pk>',
        'certain_category': '/api/certain_category/',
        'similar_items': '/api/similar_items/',
    }

    return Response(routes)


class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
