import random
from time import ctime
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model
from backend.shop.models import *
from backend.shop.serializers import *


User = get_user_model()


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
def similar_items(request, pk):
    try:
        category = Category.objects.get(id=pk)
        products = Product.objects.filter(category=category)

    except:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)
    print(type(products))
    prods = []
    ids = []
    start = True
    if len(products) < 4:
        serializer = SimilarItems(products, many=True)
        return Response(serializer.data)
    try:
        while start:
            choose_prod = random.choice(products)
            id = choose_prod.id
            if not id in ids:
                prods.append(choose_prod)
                ids.append(id)

            if len(prods) == 4:
                start = False
    except:
        return Response({'error': f'{category.name} has 0 products'}, status=status.HTTP_404_NOT_FOUND)

    serializer = SimilarItems(prods, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_user_products(request, pk):
    user = User.objects.get(id=pk)
    products = Product.objects.filter(vendor=user)
    serializer = UserProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def post_product(request):
    try:
        data = request.data
        vendor = data['vendor']
        name = data['name']
        photo = data['photo']
        price = data['price']
        stock = data['stock']
        slug = data['slug']
        details = data['details']
        category = data['category']

        vd = User.objects.get(id=vendor)
        ct = Category.objects.get(id=category)

    except:
        return Response({'error': 'Something went wrong when posting a product. Try again'}, status=status.HTTP_404_NOT_FOUND)

    product = Product.objects.create(vendor=vd, name=name, slug=slug, photo=photo,
                                     price=price, stock=stock, details=details, category=ct)
    product.save()
    return Response({'success': f'{name} has been successfully posted'})


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
