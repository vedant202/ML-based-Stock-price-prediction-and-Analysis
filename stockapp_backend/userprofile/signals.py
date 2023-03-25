# from django.db.models.signals import post_save # Produce a signal if there is any database action.
# from django.contrib.auth.models import User
# from django.dispatch import receiver
# from .models import Profile
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
