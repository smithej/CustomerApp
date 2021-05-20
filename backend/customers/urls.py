from django.urls import path, include
from rest_framework import routers

from .views import CustomerViewSet, RandomCustomerAPIView

router = routers.DefaultRouter()
router.register(r'customers', CustomerViewSet)

urlpatterns = [
    path('customers/random/', RandomCustomerAPIView.as_view()),
    path('', include(router.urls))
]
