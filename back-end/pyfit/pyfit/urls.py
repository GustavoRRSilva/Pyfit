# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from user.views import UserViewSet, PlanViewSet, ContractViewSet, PaymentViewSet, LectureViewSet, TeacherViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'plans', PlanViewSet)
router.register(r'contracts', ContractViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'lectures', LectureViewSet)
router.register(r'teachers', TeacherViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
