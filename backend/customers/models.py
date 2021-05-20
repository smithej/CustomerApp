from django.db import models


class Customer(models.Model):
    """
    Customer model.

    Implementation Notes:
      Django's auto incrementing integer ID field is sufficient for the primary key.
      A UUID4 was another option however was deemed unecessary.

      Using an ordered model (https://pypi.org/project/django-ordered-model/)
      was considered for the priority however multiple customers need to be
      able to have the same priority and it was decided to keep things simple
      and not pull in another dependency.
    """

    LOW = 'L'
    MEDIUM = 'M'
    HIGH = 'H'
    CRITICAL = 'C'
    CUSTOMER_PRIORITIES = [
        (LOW, 'Low'),
        (MEDIUM, 'Medium'),
        (HIGH, 'High'),
        (CRITICAL, 'Critical'),
    ]

    name = models.CharField(null=False, max_length=100)
    company = models.CharField(null=False, max_length=100)
    priority = models.CharField(null=False,
                                max_length=1,
                                choices=CUSTOMER_PRIORITIES,
                                default=LOW)
