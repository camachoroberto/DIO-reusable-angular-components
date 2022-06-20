import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-work-team',
  templateUrl: './work-team.component.html',
  styleUrls: ['./work-team.component.scss'],
})
export class WorkTeamComponent implements OnInit {
  // employes;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.getEmployes();
  }

  // private getEmployes(): void {
  //   this.productsService.getEmployes().subscribe({
  //     next: (employes) => {
  //       this.employes = employes;
  //     },
  //     error: (err) => console.error(err),
  //     complete: () => console.info('complete:', this.employes),
  //   });
  // }
}
