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

        'carts': '/api/cart/all/',
        'cartitems': '/api/cart/cartitems/',
        'cart': '/api/cart/cart/<pk>',
        'cartitem': '/api/cart/cartitem/<pk>',

        'categories': 'api/shop/categories/',
        'category': '/api/shop/category/<pk>',
        'products': '/api/shop/products/',
        'product': '/api/shop/product/<pk>',
        'certain_category': '/api/shop/certain_category/',
        'similar_items': '/api/shop/similar_items/',
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
