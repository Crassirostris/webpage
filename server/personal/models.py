from django.db import models

class Image(models.Model):
    href = models.CharField(max_length=1000)
    preview_href = models.CharField(max_length=1000)