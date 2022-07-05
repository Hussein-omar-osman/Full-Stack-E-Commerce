from rest_framework.serializers import ModelSerializer
from shop.models import Product, Category

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'img', 'price', 'stock', 'description',  'manufactured_on', 'category', 'features']


class CertainCategory(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class SimilarItems(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'