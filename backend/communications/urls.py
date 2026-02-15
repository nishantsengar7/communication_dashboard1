from django.urls import path
from .views import EmailListCreateView, SMSListCreateView, WhatsAppListCreateView

urlpatterns = [
    path('emails/', EmailListCreateView.as_view(), name='email-list-create'),
    path('sms/', SMSListCreateView.as_view(), name='sms-list-create'),
    path('whatsapp/', WhatsAppListCreateView.as_view(), name='whatsapp-list-create'),
]
