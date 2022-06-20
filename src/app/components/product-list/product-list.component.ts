import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { Announcement } from '../../interfaces/announcement.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public announcementInfos: Announcement;
  public products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.setAnnouncement();
    this.getProducts();
  }

  private setAnnouncement(): void {
    this.announcementInfos = {
      typeAlert: 'alert-secondary',
      titleText: 'Quer GANHAR 20% de desconto?',
      bodyText: 'Aproveite essa promoção super especial pro resto da semana',
      infoText: 'Oferta válida para compras acima de R$1.000',
    };
  }

  private getProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => console.error(err),
      complete: () => console.info('complete:', this.products),
    });
  }
}
