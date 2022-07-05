from django.contrib import admin
from .models import *
# Register your models here.


class UserAccountAdmin(admin.ModelAdmin):
    model = UserAccount
    list_display = ('name', 'email', 'contact')


admin.site.register(UserAccount, UserAccountAdmin)
