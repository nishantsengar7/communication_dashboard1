from rest_framework import generics
from .models import Email, SMS, WhatsApp
from .serializers import EmailSerializer, SMSSerializer, WhatsAppSerializer

class EmailListCreateView(generics.ListCreateAPIView):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer

class SMSListCreateView(generics.ListCreateAPIView):
    queryset = SMS.objects.all()
    serializer_class = SMSSerializer

class WhatsAppListCreateView(generics.ListCreateAPIView):
    queryset = WhatsApp.objects.all()
    serializer_class = WhatsAppSerializer
