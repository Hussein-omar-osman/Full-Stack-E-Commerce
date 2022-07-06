from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ('name', )
    prepopulated_fields = {'slug': ('name',)}


class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('name', 'price', 'stock', 'vendor')
    prepopulated_fields = {'slug': ('id',)}


admin.site.register(Category),
admin.site.register(Product),
