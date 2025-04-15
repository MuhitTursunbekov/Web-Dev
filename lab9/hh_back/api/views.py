from django.shortcuts import render
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
# Create your views here.

@api_view(['GET'])
def companies_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, pk):
    company = get_object_or_404(Company, pk=pk)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET'])
def vacancies_by_company(request, pk):
    vacancies = Vacancy.objects.filter(Company_id=pk)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

class VacanciesList(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyDetailView(APIView):
    def get(self, request, pk):
        vacancy = get_object_or_404(Vacancy, pk=pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

class VacancyTopTenView(APIView):
    def get(self, request):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_vacancies, many=True)
        return Response(serializer.data)