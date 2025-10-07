# courses/models.py
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200, blank=True, null=True)
    summary = models.TextField()
    imgUrl = models.URLField(default="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp")

    def __str__(self):
        return self.title