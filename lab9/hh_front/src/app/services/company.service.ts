// company.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://127.0.0.1:8000/api/companies';

  constructor(private http: HttpClient) {}

  // Получаем все компании
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  // Получаем вакансии по id компании
  getVacanciesByCompany(companyId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://127.0.0.1:8000/api/companies/${companyId}/vacancies`);
  }
}