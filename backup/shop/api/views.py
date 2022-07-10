import random
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from shop.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer, CertainCategory, SimilarItems, UserProductSerializer, UserSerializer
from django.contrib.auth.mixins import LoginRequiredMixin
from accounts.models import UserAccount



@api_view(['GET'])
def get_links(request):
    endpoints = {
        'all': '/shop/',
        'categories': '/api/shop/categories/',
        'category': '/api/shop/category/<pk>',
        'products': '/api/shop/products/',
        'product': '/api/shop/product/<pk>',
        'certain_category': '/api/shop/certain_category/',
        'similar_items': '/api/shop/similar_items/',
    }

    return Response(endpoints)

@api_view(['GET'])
def get_single_user(request, pk):
    user = UserAccount.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
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
def certain_category(request, pk):
    try:
        category = Category.objects.get(id=pk)
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
    user = UserAccount.objects.get(id=pk)
    products = Product.objects.filter(vendor=user)
    serializer = UserProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def post_product(request):
    try:
        data = request.data
        vendor_id = data['vendor_id']
        name = data['name']
        img = data['img']
        price = data['price']
        stock = data['stock']
        description= data['description']
        category_id = data['category_id']
        features = data['features']
        
        vendor = UserAccount.objects.get(id=vendor_id)
        category = Category.objects.get(id=category_id)
    except:
        return Response({'error': 'Something went wrong when posting a product. Try again'}, status=status.HTTP_404_NOT_FOUND)
    
    product = Product.objects.create(vendor=vendor, name=name, img=img, price=price, stock=stock, description=description,
                                     category=category, features=features)
    product.save()   
    return Response({'success':f'{name} has been successfully posted'})
    
    
    

    

# {
# "vendor_id":"",
# "name":"",
# "img":"",
# "price":"",
# "stock":"",
# "description":"",
# "category_id":"",
# "features":""
# }

# {
# "vendor_id":"1",
# "name":"Testing Product",
# "img":"hhtnpklern",
# "price":"456",
# "stock":"45",
# "description":"njvnwklvw",
# "category_id":"1",
# "features":"<p>bvijwbnvijkew</p>"
# }