from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list, name='products_list'),
    path('products/<int:product_id>/', views.product_detail, name='product_detail'),

    path('categories/', views.categories_list, name='categories_list'),
    path('categories/<int:category_id>/', views.category_detail, name='category_detail'),
    path('categories/<int:category_id>/products/', views.category_products, name='category_products'),

]