from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

# ─── FBV helpers are exported separately so urls.py can always reference them ─
from api.views.fbv import products_list, product_detail
