from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.shortcuts import get_object_or_404
import json
from .models import Product, Category

# Все продукты
@require_http_methods(["GET"])
def product_list(request):
    products = Product.objects.filter(is_active=True)
    data = []
    for product in products:
        data.append({
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
    return JsonResponse(data, safe=False)

# Один продукт по ID
@require_http_methods(["GET"])
def product_detail(request, id):
    product = get_object_or_404(Product, id=id, is_active=True)
    data = {
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
    return JsonResponse(data)

# Все категории
@require_http_methods(["GET"])
def category_list(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name
        })
    return JsonResponse(data, safe=False)

# Одна категория по ID
@require_http_methods(["GET"])
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {
        'id': category.id,
        'name': category.name
    }
    return JsonResponse(data)

# Продукты по категории
@require_http_methods(["GET"])
def products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.filter(is_active=True)
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': {
                'id': category.id,
                'name': category.name
            }
        })
    return JsonResponse(data, safe=False)