from rest_framework import generics
from rest_framework.response import Response
from ..models import Product, Category
from ..serializer import ProductSerializer, CategorySerializer


class CategoryListCreateView(generics.ListCreateAPIView):
    """cписок категорий или создание новой"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    """детали, обновление или удаление категории"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'pk'


class ProductListCreateView(generics.ListCreateAPIView):
    """список продуктов или создание нового продукта"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    """детали, обновление или удаление продукта"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'pk'


class CategoryProductsView(generics.ListAPIView):
    """получение продуктов конкретной категории"""
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'pk'

    def get_queryset(self):
        category_id = self.kwargs['pk']
        return Product.objects.filter(category_id=category_id, is_active=True)