import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = 'http://localhost:3000/';

  /**
   * Método responsavel por chamar o serviço dos produtos
   * @returns Lista de Produtos
   */
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlServiceV1 + 'products');
  }

  /**
   * Método responsavel por chamar o serviço que lista a equipe de trabalho
   * @returns Lista de Trabalhadores
   */
  public getEmployes(): Observable<Product[]> {
    return this.http.get<Product[]>(this.UrlServiceV1 + 'employes');
  }
}
