from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import *


class UserAccountAdmin(UserAdmin):
    model = UserAccount
    list_display = ('name', 'email', 'contact')


admin.site.register(UserAccount, UserAccountAdmin)
