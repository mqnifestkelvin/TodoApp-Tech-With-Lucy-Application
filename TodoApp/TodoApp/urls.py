from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Todo API",
        default_version="v1",
        description="API documentation for the Todo application",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="support@todoapp.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("Todo_Manager.urls")), 
    path("swagger/", schema_view.with_ui("swagger", cache_timeout=0), name="swagger-docs"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="redoc-docs"),
]
