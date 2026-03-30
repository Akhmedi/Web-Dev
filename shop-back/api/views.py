from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Category
import json


@require_http_methods(["GET"])
def products_list(request):
    try:
        products = Product.objects.filter(is_active=True).select_related('category')
        products_data = []

        for product in products:
            products_data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category': {
                    'id': product.category.id,
                    'name': product.category.name
                }
            })

        return JsonResponse({
            'status': 'success',
            'data': products_data
        })

    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': str(e)
        }, status=500)


@require_http_methods(["GET"])
def product_detail(request, product_id):
    try:
        product = get_object_or_404(Product, id=product_id, is_active=True)

        product_data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': {
                'id': product.category.id,
                'name': product.category.name
            }
        }

        return JsonResponse({
            'status': 'success',
            'data': product_data
        })

    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': 'Товар не найден'
        }, status=404)


@require_http_methods(["GET"])
def categories_list(request):
    try:
        categories = Category.objects.all()
        categories_data = []

        for category in categories:
            categories_data.append({
                'id': category.id,
                'name': category.name
            })

        return JsonResponse({
            'status': 'success',
            'data': categories_data
        })

    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': str(e)
        }, status=500)


@require_http_methods(["GET"])
def category_detail(request, category_id):
    try:
        category = get_object_or_404(Category, id=category_id)

        category_data = {
            'id': category.id,
            'name': category.name
        }

        return JsonResponse({
            'status': 'success',
            'data': category_data
        })

    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': 'Категория не найдена'
        }, status=404)


@require_http_methods(["GET"])
def category_products(request, category_id):
    try:
        category = get_object_or_404(Category, id=category_id)
        products = Product.objects.filter(category=category, is_active=True)
        products_data = []

        for product in products:
            products_data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category': {
                    'id': product.category.id,
                    'name': product.category.name
                }
            })

        return JsonResponse({
            'status': 'success',
            'data': products_data,
            'category': {
                'id': category.id,
                'name': category.name
            }
        })

    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': 'Категория не найдена'
        }, status=404)


