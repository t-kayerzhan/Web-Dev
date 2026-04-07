from rest_framework import mixins
from rest_framework.generics import GenericAPIView

from api.models import Product
from api.serializers import ProductSerializer


class ProductListAPIView(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    GenericAPIView
):
    """
    GET  /api/v4/products/  — list all products   (ListModelMixin)
    POST /api/v4/products/  — create a new product (CreateModelMixin)
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetailAPIView(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    GenericAPIView
):
    """
    GET    /api/v4/products/<product_id>/  — retrieve  (RetrieveModelMixin)
    PUT    /api/v4/products/<product_id>/  — update    (UpdateModelMixin)
    DELETE /api/v4/products/<product_id>/  — destroy   (DestroyModelMixin)
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'  

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
