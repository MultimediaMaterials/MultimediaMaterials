# backend/courses/views.py (修正後)

from rest_framework import viewsets

# 修正: 不再導入 Course，改為導入 Topic
from .models import Topic

# 修正: 不再導入 CourseSerializer，改為導入 TopicSerializer
from .serializers import TopicSerializer

# 建立一個只讀的 ViewSet，用來提供所有教學主題
class TopicViewSet(viewsets.ReadOnlyModelViewSet):
    """
    提供所有教學主題及其下的課程和步驟。
    API 端點: /api/tutorials/
    """
    # 使用 prefetch_related 優化查詢，一次性獲取所有關聯的課程和步驟
    queryset = Topic.objects.prefetch_related('lessons__steps').all()
    serializer_class = TopicSerializer