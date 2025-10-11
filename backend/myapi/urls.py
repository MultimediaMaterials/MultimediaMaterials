# myapi/urls.py
from django.contrib import admin
from django.urls import path, include # 確保 include 已導入
# --- 新增這兩行 import ---
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('courses.urls')), # <-- 加入這一行
]
# --- 在檔案結尾新增這一行 ---
# 這只在 DEBUG 模式下生效，讓開發伺服器能處理媒體檔案
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)