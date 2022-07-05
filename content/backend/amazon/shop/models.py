from django.db import models
# from ckeditor.fields import RichTextField
from cloudinary.models import CloudinaryField
from django.contrib.auth import get_user_model


User = get_user_model()
class Category(models.Model):
  name = models.CharField(max_length=50)
#   slug = models.SlugField(max_length=200, unique=True)
  category_image = CloudinaryField('category_image')

  class Meta:
    ordering = ('name', )
    verbose_name = 'category'
    verbose_name_plural = 'catergories'

  def __str__(self):
    return self.name



class Product(models.Model):
#   user_vendor = models.ForeignKey(Vendor)
  name = models.CharField(max_length=200)
  img = CloudinaryField()
  price = models.DecimalField(max_digits=6, decimal_places=2)
  stock = models.IntegerField(default=0)
  description = models.TextField()
  
  manufactured_on = models.DateTimeField(auto_now_add=True)
  category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')
  features = models.TextField(blank=True)
  

  class Meta:
    ordering = ('manufactured_on' ,)
    verbose_name = 'product'
    verbose_name_plural = 'products'

  def __str__(self):
    return self.name

# class Review(models.Model):
#     count = models.IntegerField(default=0)
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)





