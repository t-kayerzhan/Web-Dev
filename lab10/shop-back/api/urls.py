
from django.urls import path

# ── Level 2: FBV ──────────────────────────────────────────────────────────────
from api.views.fbv import products_list, product_detail as product_detail_fbv

# ── Level 3: CBV ──────────────────────────────────────────────────────────────
from api.views.cbv import (
    ProductListAPIView  as ProductListCBV,
    ProductDetailAPIView as ProductDetailCBV,
)

# ── Level 4: Mixins ───────────────────────────────────────────────────────────
from api.views.mixins import (
    ProductListAPIView   as ProductListMixin,
    ProductDetailAPIView as ProductDetailMixin,
)

# ── Level 5: Generics (active / default) ─────────────────────────────────────
from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [

    # ── Level 2 – FBV ────────────────────────────────────────────────────────
    path('v2/products/',               products_list,       name='v2-products-list'),
    path('v2/products/<int:product_id>/', product_detail_fbv, name='v2-product-detail'),

    # ── Level 3 – CBV ────────────────────────────────────────────────────────
    path('v3/products/',                  ProductListCBV.as_view(),   name='v3-products-list'),
    path('v3/products/<int:product_id>/', ProductDetailCBV.as_view(), name='v3-product-detail'),

    # ── Level 4 – Mixins ─────────────────────────────────────────────────────
    path('v4/products/',                  ProductListMixin.as_view(),   name='v4-products-list'),
    path('v4/products/<int:product_id>/', ProductDetailMixin.as_view(), name='v4-product-detail'),

    # ── Level 5 – Generics (default) ─────────────────────────────────────────
    path('v5/products/',                  ProductListAPIView.as_view(),   name='v5-products-list'),
    path('v5/products/<int:product_id>/', ProductDetailAPIView.as_view(), name='v5-product-detail'),

    # Category endpoints (Level 5 only)
    path('v5/categories/',                       CategoryListAPIView.as_view(),     name='v5-categories-list'),
    path('v5/categories/<int:category_id>/',      CategoryDetailAPIView.as_view(),   name='v5-category-detail'),
    path('v5/categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='v5-category-products'),
]
