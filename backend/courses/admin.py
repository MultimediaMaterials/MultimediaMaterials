# backend/courses/admin.py

from django.contrib import admin
from .models import Topic, Lesson, Step

# 讓「步驟」可以在「課程」頁面中直接編輯 (Inline)
class StepInline(admin.TabularInline):
    model = Step
    extra = 1  # 預設顯示1個空白的步驟欄位

# 讓「課程」可以在「主題」頁面中直接編輯 (Inline)
class LessonInline(admin.TabularInline):
    model = Lesson
    extra = 1
    show_change_link = True # 允許點擊進入詳細編輯

@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'icon')
    list_editable = ('order',)
    inlines = [LessonInline] # 在主題編輯頁嵌入課程編輯區

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'topic', 'order')
    list_filter = ('topic',)
    search_fields = ('title', 'scenario')
    list_editable = ('order',)
    inlines = [StepInline] # 在課程編輯頁嵌入步驟編輯區

# Step 模型因為已經被 inline，可以不用單獨註冊，但註冊了也方便單獨管理
@admin.register(Step)
class StepAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'lesson', 'step_number')
    list_filter = ('lesson__topic', 'lesson')