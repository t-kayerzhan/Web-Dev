from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


class ProductListAPIView(generics.ListCreateAPIView):
    """
    GET  /api/v5/products/  — list all products
    POST /api/v5/products/  — create a new product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/v5/products/<product_id>/  — retrieve a product
    PUT    /api/v5/products/<product_id>/  — full update
    PATCH  /api/v5/products/<product_id>/  — partial update
    DELETE /api/v5/products/<product_id>/  — delete a product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'



class CategoryListAPIView(generics.ListCreateAPIView):
    """
    GET  /api/v5/categories/  — list all categories
    POST /api/v5/categories/  — create a new category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/v5/categories/<category_id>/  — retrieve a category
    PUT    /api/v5/categories/<category_id>/  — full update
    PATCH  /api/v5/categories/<category_id>/  — partial update
    DELETE /api/v5/categories/<category_id>/  — delete a category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    """
    GET /api/v5/categories/<category_id>/products/
        — list all products belonging to the given category
    POST /api/v5/categories/<category_id>/products/
        — create a product pre-assigned to this category
    """

    def _get_category(self, category_id):
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return None

    def get(self, request, category_id):
        category = self._get_category(category_id)
        if category is None:
            return Response(
                {'error': 'Category not found'},
                status=status.HTTP_404_NOT_FOUND
            )
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, category_id):
        category = self._get_category(category_id)
        if category is None:
            return Response(
                {'error': 'Category not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        data = request.data.copy()
        data['category'] = category_id
        serializer = ProductSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
