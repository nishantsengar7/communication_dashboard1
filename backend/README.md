# Communication Dashboard - Backend

A robust RESTful API built with Django and Django REST Framework (DRF) to power the Communication Dashboard. It handles data persistence and retrieval for multiple communication channels.

## 🚀 Features

- **Standardized API**: Consistent endpoints for Emails, SMS, and WhatsApp messages.
- **Data Persistence**: Reliable storage using SQLite (default) with structured models.
- **CORS Enabled**: Configured to interact seamlessly with the Next.js frontend.
- **Admin Interface**: Built-in Django admin for easy record management.

## 🛠️ Tech Stack

- **Framework**: [Django 6.0](https://www.djangoproject.com/)
- **API Toolkit**: [Django REST Framework](https://www.django-rest-framework.org/)
- **Database**: SQLite3 (Local development)
- **Middleware**: `django-cors-headers` for cross-origin requests.

## 📋 Prerequisites

- **Python**: 3.10 or higher
- **pip**: Python package installer

## ⚙️ Getting Started

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```
2. **Create a virtual environment** (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install dependencies**:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```
4. **Run migrations**:
   ```bash
   python manage.py migrate
   ```
5. **Start the development server**:
   ```bash
   python manage.py runserver
   ```
   The API will be available at `http://localhost:8000/api/`.

## 🏗️ Project Structure

- `backend/`: Project settings and core configuration.
- `communications/`: Main application containing:
  - `models.py`: Database schemas for Email, SMS, and WhatsApp.
  - `views.py`: API logic using DRF generics.
  - `serializers.py`: Data transformation logic.
  - `urls.py`: App-specific route definitions.

## 🔗 API Reference

All endpoints support `GET` (list) and `POST` (create) operations.

| Channel | Endpoint |
| :--- | :--- |
| **Emails** | `/api/emails/` |
| **SMS** | `/api/sms/` |
| **WhatsApp** | `/api/whatsapp/` |

### Sample Payload (Email)
```json
{
  "email_to": "user@example.com",
  "subject": "Hello",
  "message": "This is a test message."
}
```
