from rest_framework.serializers import ModelSerializer
from shop.models import *
from accounts.models import UserAccount


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class UserSerializer(ModelSerializer):
    class Meta:
        model = UserAccount
        exclude = ['password']


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


class UserProductSerializer(ModelSerializer):
    class Meta:
        model = Product


class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
