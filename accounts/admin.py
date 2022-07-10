from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import *


class UserAccountAdmin(UserAdmin):
    ordering = ['email', ]

    readonly_fields = ('last_login', 'joined')

    list_display = ('name', 'email', 'contact', 'is_vendor',
                    'is_customer', 'is_staff', 'is_superuser',)
    search_fields = ('name', 'contact', 'email')

    list_filter = [
        'is_staff', 'is_superuser', 'is_vendor', 'is_customer',
    ]

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (
            'Personal info',
            {
                'fields': (
                    'name',
                    'contact',
                )
            },
        ),
        (
            'Timeline',
            {
                'fields': (
                    'joined',
                    'last_login',
                )
            },
        ),
        (
            'Permissions',
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_vendor',
                    'is_customer',
                    'is_superuser',
                )
            },
        ),
        (
            'Advanced options',
            {
                'classes': ('collapse',),
                'fields': (
                    'groups',
                    'user_permissions',
                )
            },
        ),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide', 'extrapretty'),
            'fields': ('name', 'email', 'contact', 'is_vendor',
                       'is_customer', 'password1', 'password2'),
        }),
    )


admin.site.register(UserAccount, UserAccountAdmin)
