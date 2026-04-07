from django.urls import path
from .views.fbv import (
    category_list_create,
    category_detail,
    product_list_create,
    product_detail,
    category_products
)

urlpatterns = [
    path('categories/', category_list_create, name='category-list-create'),
    path('categories/<int:pk>/', category_detail, name='category-detail'),
    path('categories/<int:pk>/products/', category_products, name='category-products'),
    path('products/', product_list_create, name='product-list-create'),
    path('products/<int:pk>/', product_detail, name='product-detail'),
]