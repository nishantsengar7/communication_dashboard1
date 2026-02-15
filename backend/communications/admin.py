from django.contrib import admin
from .models import Email, SMS, WhatsApp

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ('email_to', 'subject', 'created_at')
    search_fields = ('email_to', 'subject')

@admin.register(SMS)
class SMSAdmin(admin.ModelAdmin):
    list_display = ('mobile_number', 'created_at')
    search_fields = ('mobile_number',)

@admin.register(WhatsApp)
class WhatsAppAdmin(admin.ModelAdmin):
    list_display = ('mobile_number', 'created_at')
    search_fields = ('mobile_number',)
