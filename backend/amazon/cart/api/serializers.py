from rest_framework.serializers import ModelSerializer
from cart.models import Cart, CartItem

class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class CartItemSerializer(ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['product', 'price', 'quantity', 'cart']