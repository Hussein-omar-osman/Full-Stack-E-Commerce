import random
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
from shop.models import *
from .serializers import *
from django.contrib.auth.mixins import LoginRequiredMixin


@api_view(['GET'])
def get_links(request):
    endpoints = {
        'all': '/shop/',
        'categories': '/api/shop/categories/',
        'category': '/api/shop/category/<pk>/',
        'products': '/api/shop/products/',
        'product': '/api/shop/product/<pk>/',
        'certain_category': '/api/shop/certain_category/',
        'similar_items': '/api/shop/similar_items/',
        'reviews': '/api/shop/products/<pk>/reviews/',
    }

    return Response(endpoints)


@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def single_product(request, pk):
    try:
        product = Product.objects.get(id=pk)
    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def single_category(request, pk):
    try:
        category = Category.objects.get(id=pk)

    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = CategorySerializer(category)
    return Response(serializer.data)


@api_view(['GET'])
def certain_category(request, name):
    try:
        category = Category.objects.get(name=name)
        products = Product.objects.filter(category=category)

    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = CertainCategory(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def similar_items(request, name):
    try:
        category = Category.objects.get(name=name)
        products = Product.objects.filter(category=category)

    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)
    print(type(products))
    prods = []
    ids = []
    start = True

    while start:
        choose_prod = random.choice(products)
        id = choose_prod.id
        if not id in ids:
            prods.append(choose_prod)
            ids.append(id)

        if len(prods) > 3:
            start = False

    serializer = SimilarItems(prods, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_reviews(request, pk):
    product = Product.objects.get(id=pk)
    reviews = Review.objects.filter(product=product.id)

    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


class ProductListView(generics.ListCreateAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'slug'


class ReviewListView(generics.ListCreateAPIView):
    model = Review
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
