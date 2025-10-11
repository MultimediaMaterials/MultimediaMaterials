# backend/courses/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
# 刪掉舊的 CourseViewSet，引入新的 TopicViewSet
from .views import TopicViewSet 

router = DefaultRouter()
# 註冊新的 API 端點，例如叫 tutorials
router.register(r'tutorials', TopicViewSet, basename='tutorial')

urlpatterns = [
    path('', include(router.urls)),
]