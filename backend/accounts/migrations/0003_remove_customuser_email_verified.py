# Generated by Django 4.0.4 on 2022-05-21 07:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_customuser_email_verified'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='email_verified',
        ),
    ]