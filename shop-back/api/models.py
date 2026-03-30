from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200, verbose_name='Название')

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name='Название')
    price = models.FloatField(verbose_name='Цена')
    description = models.TextField(verbose_name='Описание')
    count = models.IntegerField(default=0, verbose_name='Количество')
    is_active = models.BooleanField(default=True, verbose_name='Активный')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Категория')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return self.name
