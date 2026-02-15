from rest_framework import serializers
from .models import Email, SMS, WhatsApp

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'

class SMSSerializer(serializers.ModelSerializer):
    class Meta:
        model = SMS
        fields = '__all__'

class WhatsAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatsApp
        fields = '__all__'
