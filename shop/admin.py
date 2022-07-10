from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ('name', )
    prepopulated_fields = {'slug': ('name',)}


class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('name', 'price', 'stock', 'vendor')
    prepopulated_fields = {'slug': ('name',)}


class ReviewAdmin(admin.ModelAdmin):
    model = Review
    list_display = ('comment', 'rating')


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Review, ReviewAdmin)
