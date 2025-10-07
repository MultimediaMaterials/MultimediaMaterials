# myapi/urls.py
from django.contrib import admin
from django.urls import path, include # 確保 include 已導入

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('courses.urls')), # <-- 加入這一行
]