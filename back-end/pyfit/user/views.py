# views.py
from rest_framework import viewsets
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import User, Plan, Contract, Payment, Lecture, Teacher
from .serializers import UserSerializer, PlanSerializer, ContractSerializer, PaymentSerializer, LectureSerializer, TeacherSerializer
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = super().get_queryset()  # Obtém todos os usuários
        user_id = self.kwargs.get('id')  # Pega o id passado na URL

        if user_id:
            queryset = queryset.filter(id=user_id)  # Filtra para um único usuário
        
        return queryset

class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class LectureViewSet(viewsets.ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

@api_view(['POST'])
def login_view(request):
    cpf = request.data.get('cpf')
    password = request.data.get('password')

    try:
        user = User.objects.get(cpf = cpf)

        if(user.password == password):
            user_serializer = UserSerializer(user)
            
            return Response({
                "user":user_serializer.data
            },status=status.HTTP_200_OK)
        else:
            return Response({"error":"Credenciais inválidas"},status = status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({"error": "Credenciais inválidas"}, status=status.HTTP_401_UNAUTHORIZED)


