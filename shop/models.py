import uuid
from django.db import models
from django.utils import timezone
from cloudinary.models import CloudinaryField
from django.contrib.auth import get_user_model


User = get_user_model()


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=50)
    photo = CloudinaryField()
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = ('name', )
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    vendor = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='vendor')
    name = models.CharField(max_length=200)
    photo = CloudinaryField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField(default=0)
    details = models.TextField()
    slug = models.SlugField(max_length=200, unique=True)
    mfg = models.DateTimeField('date manufactured', default=timezone.now)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products')

    class Meta:
        ordering = ('name',)
        verbose_name = 'product'
        verbose_name_plural = 'products'

    def __str__(self):
        return self.name


class Review(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    comment = models.TextField(max_length=255, blank=True, null=True)
    rating = models.IntegerField(default=0)
    created = models.DateTimeField('date created', default=timezone.now)

    def __str__(self):
        return str(self.customer.name)
