from django.db import models

class Email(models.Model):
    email_to = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Email to {self.email_to}: {self.subject}"

    class Meta:
        ordering = ['-created_at']

class SMS(models.Model):
    mobile_number = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"SMS to {self.mobile_number}"

    class Meta:
        ordering = ['-created_at']

class WhatsApp(models.Model):
    mobile_number = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"WhatsApp to {self.mobile_number}"

    class Meta:
        ordering = ['-created_at']
