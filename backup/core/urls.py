from django.contrib import admin
from django.conf import settings
from django.views.generic import TemplateView
from django.urls import path, include, re_path
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/cart/', include('cart.api.urls')),
    path('api/shop/', include('shop.api.urls')),
    path('api/', include('api.urls')),
    path('', include('api.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
