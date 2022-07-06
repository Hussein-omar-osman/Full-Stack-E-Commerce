from rest_framework.serializers import ModelSerializer
from shop.models import *


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class CertainCategory(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class SimilarItems(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
