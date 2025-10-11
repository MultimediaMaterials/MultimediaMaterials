# backend/courses/models.py

from django.db import models

# 主題模型 (例如：省錢與連線、介面與個人化)
class Topic(models.Model):
    title = models.CharField(max_length=100, verbose_name="主題標題")
    icon = models.CharField(max_length=10, blank=True, verbose_name="主題圖示 (Emoji)")
    description = models.TextField(verbose_name="主題引導語")
    order = models.PositiveIntegerField(default=0, verbose_name="排序")

    class Meta:
        verbose_name = "教學主題"
        verbose_name_plural = "教學主題"
        ordering = ['order']

    def __str__(self):
        return self.title

# 課程模型 (例如：連線 Wi-Fi、更換桌布)
class Lesson(models.Model):
    # 建立與 Topic 的關聯
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='lessons', verbose_name="所屬主題")
    
    title = models.CharField(max_length=100, verbose_name="課程標題")
    scenario = models.TextField(verbose_name="情境描述 (為什麼要學)")
    introduction = models.TextField(verbose_name="功能介紹", blank=True)
    order = models.PositiveIntegerField(default=0, verbose_name="排序")

    class Meta:
        verbose_name = "單元課程"
        verbose_name_plural = "單元課程"
        ordering = ['order']

    def __str__(self):
        return f"{self.topic.title} - {self.title}"

# 步驟模型 (每個課程的詳細操作步驟)
class Step(models.Model):
    # 建立與 Lesson 的關聯
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='steps', verbose_name="所屬課程")
    
    step_number = models.PositiveIntegerField(verbose_name="步驟序號")
    description = models.TextField(verbose_name="步驟說明")
    # 允許上傳圖片，圖片會存在 media/steps/ 資料夾下
    image = models.ImageField(upload_to='steps/', blank=True, null=True, verbose_name="步驟圖示")

    class Meta:
        verbose_name = "操作步驟"
        verbose_name_plural = "操作步驟"
        ordering = ['step_number']

    def __str__(self):
        return f"{self.lesson.title} - 步驟 {self.step_number}"

# 刪除舊的 Course 模型 (如果還有的話)
# class Course(models.Model):
#     ...