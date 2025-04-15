// company-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;
  vacancies: any[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    // Получаем список всех компаний
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  selectCompany(id: number) {
    this.selectedCompanyId = id;
    // Получаем вакансии выбранной компании
    this.companyService.getVacanciesByCompany(id).subscribe(data => {
      this.vacancies = data;
    });
  }
}