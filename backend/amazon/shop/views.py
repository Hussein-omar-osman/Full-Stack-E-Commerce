# from django.shortcuts import render, get_object_or_404, redirect
# from django.http import HttpResponse
# from .models import Product, Category
# from django.views.generic import ListView
# from django.urls import reverse
# from django.contrib import messages
# from django.contrib.auth.models import User
# from django.conf import settings
# from cart.models import Cart, CartItem

# def home(request):
#   products = Product.objects.all()
#   categories = Category.objects.all()
  

# def product_detail(request, slug):
#   product = get_object_or_404(Product, slug=slug)
#   categories = Category.objects.all()
#   similar_items = Product.objects.filter(category=product.category).exclude(slug=slug)
 

# def category(request, slug):
#   products = Product.objects.filter(category__slug=slug)
#   categories = Category.objects.all()
  




# def shopping_cart(request):
#   cart = Cart.objects.get(user=request.user)
#   categories = Category.objects.all()
#   products = CartItem.objects.filter(cart=cart)
 

# def checkout_page(request):
#   cart = Cart.objects.get(user=request.user)
#   CartItem.objects.filter(cart=cart).delete()
  

