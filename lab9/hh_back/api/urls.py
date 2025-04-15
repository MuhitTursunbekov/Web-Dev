from django.urls import path
from .views import companies_list, company_detail, vacancies_by_company, VacanciesList, VacancyDetailView, VacancyTopTenView

urlpatterns = [
    path('companies', companies_list),
    path('companies/<int:pk>/', company_detail),
    path('companies/<int:pk>/vacancies/', vacancies_by_company),
    path('vacancies/', VacanciesList.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten', VacancyTopTenView.as_view())
]

# http://127.0.0.1:8000/api/companies
# http://127.0.0.1:8000/api/companies/2
# http://127.0.0.1:8000/api/companies/2/vacancies
# http://127.0.0.1:8000/api/vacancies/
# http://127.0.0.1:8000/api/vacancies/1
# http://127.0.0.1:8000/api/vacancies/top_ten