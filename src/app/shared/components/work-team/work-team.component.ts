import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-work-team',
  templateUrl: './work-team.component.html',
  styleUrls: ['./work-team.component.scss'],
})
export class WorkTeamComponent implements OnInit {
  public employes: Employee[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getEmployes();
  }

  private getEmployes(): void {
    this.productsService.getEmployes().subscribe({
      next: (employes) => {
        this.employes = employes;
      },
      error: (err) => console.error(err),
      complete: () => console.info('complete:', this.employes),
    });
  }
}
