from django.db import models

# Create your models here.
# audioprocessor/models.py

class Video(models.Model):
    file = models.FileField(upload_to='videos/')
    audio = models.FileField(upload_to='audios/',default=None, max_length=1000)
    extracted_video = models.FileField(upload_to='extracted_video/',default=None ,max_length=1000)

class BgMusic(models.Model):
    bgmusic = models.FileField(upload_to='bgMusic/')
    
class combinedMusic(models.Model):
    combinedMusic = models.FileField(upload_to='combinedMusic/')

class CombinedMedia(models.Model):
    combined_video = models.FileField(upload_to='combined_video/',default=None ,max_length=1000)

class ExampleTable(models.Model):
    file = models.FileField(upload_to='videos/')

    
