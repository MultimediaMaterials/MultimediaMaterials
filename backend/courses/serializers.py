# backend/courses/serializers.py (修正後)

from rest_framework import serializers
# 修正: 確保只導入 Topic, Lesson, Step
from .models import Topic, Lesson, Step

class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = ['step_number', 'description', 'image']

class LessonSerializer(serializers.ModelSerializer):
    # 嵌套序列化，一個課程底下會包含它所有的步驟
    steps = StepSerializer(many=True, read_only=True)

    class Meta:
        model = Lesson
        fields = ['id', 'title', 'scenario', 'introduction', 'order', 'steps']

class TopicSerializer(serializers.ModelSerializer):
    # 嵌套序列化，一個主題底下會包含它所有的課程
    lessons = LessonSerializer(many=True, read_only=True)

    class Meta:
        model = Topic
        fields = ['id', 'title', 'icon', 'description', 'order', 'lessons']