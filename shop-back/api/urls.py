# Level 2: Function-Based Views
from .urls_fbv import urlpatterns

# Level 3: Class-Based Views
# from .urls_cbv import urlpatterns

# Level 4: Mixins
# from .urls_mixins import urlpatterns

# Level 5: Generics (по умолчанию)
# from .urls_generics import urlpatterns



#старый код на всякий:
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import CategoryViewSet, ProductViewSet

# router = DefaultRouter()
# router.register(r'categories', CategoryViewSet)
# router.register(r'products', ProductViewSet)

# urlpatterns += [
#     path('viewsets/', include(router.urls)),
# ]