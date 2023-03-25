from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save # Produce a signal if there is any database action.
from phone_field import PhoneField
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

# Create your models here.

class User(AbstractUser):
    # user = models.OneToOneField(User, on_delete= models.CASCADE)
    # first_name = models.CharField(max_length=50);
    # last_name = models.CharField(max_length=50)
    # email = models.CharField(max_length=200)
    age = models.CharField(max_length=10, null=False, blank=False)
    sex = models.CharField(max_length=10, null=False, blank=False)
    country = models.CharField(max_length=40, null=False, blank=False)
    phone = PhoneField(blank=True, help_text='Contact phone number', null=False)
    birth_date = models.CharField(max_length=40, null=False, blank=False)
    objects = UserManager()
    # password = models.CharField(max_length=50)




class Contact_db(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=200)
    phone = PhoneField(blank=True, help_text='Contact phone number')
    country = models.CharField(max_length=20)
    sex = models.CharField(max_length=10)
    desc = models.CharField(max_length=500)


# Contact_db(first_name="Vedant",last_name="Dhenge",email="test@gmail.com",phone="1234567891",country="India",sex="male",desc="aaaa")