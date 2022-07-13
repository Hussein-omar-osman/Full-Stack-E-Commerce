# Generated by Django 4.0.6 on 2022-07-13 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='is_fullfilled',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='order_updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]