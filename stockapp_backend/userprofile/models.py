from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager
from django.dispatch import receiver
from django.db.models.signals import post_save # Produce a signal if there is any database action.
from phone_field import PhoneField

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

    objects = UserManager
    # password = models.CharField(max_length=50)

    def __str__(self):
        return "{0}".format(self.user.email)


# # When any User instance created, Profile object instance is created automatically linked by User 
# @receiver(post_save, sender = User)
# def user_is_created(sender, instance, created, **kwargs):
    
#     if created:
#         Profile.objects.create(user= instance)
#     # else:
#     #     print("Instance ",instance)

#     #     instance.profile.save()

# @receiver(post_save, sender = User)
# def save_profile(sender, instance, **kwargs):
#     instance.profile.save()

