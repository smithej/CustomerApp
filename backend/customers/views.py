from rest_framework import viewsets, generics, exceptions

from .models import Customer
from .serializers import CustomerSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    """
    ViewSet to provide basic CRUD functionality for the `Customer` model.
    """

    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class RandomCustomerAPIView(generics.RetrieveAPIView):
    """
    API View to return a randomly chosen `Customer` model.
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def get_object(self):
        """
        TODO: The random order by will potentially be very slow for large datasets.
        """
        customer = Customer.objects.order_by("?").first()

        if not customer:
            raise exceptions.NotFound(detail="No customers currently exist.")

        return customer
