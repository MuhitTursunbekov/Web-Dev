from django.urls import path
from .views import CompanyListView, CompanyDetailView, VacancyListByCompanyView, VacancyListView, VacancyDetailView, TopTenVacanciesView

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:id>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', VacancyListByCompanyView.as_view(), name='vacancy-list-by-company'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]
