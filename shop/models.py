import uuid
from django.db import models
from django.urls import reverse
from ckeditor.fields import RichTextField
from cloudinary.models import CloudinaryField
# from django.contrib.auth import get_user_model
from accounts.models import UserAccount


# User = get_user_model()


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = CloudinaryField()

    class Meta:
        ordering = ('name', )
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    vendor = models.ForeignKey(
        UserAccount, on_delete=models.CASCADE, related_name='vendor')
    name = models.CharField(max_length=200)
    img = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField(default=0)
    description = models.TextField()
    mfg = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, related_name='products')
    features = RichTextField(blank=True)

    class Meta:
        ordering = ('mfg',)
        verbose_name = 'product'
        verbose_name_plural = 'products'

    def __str__(self):
        return self.name
