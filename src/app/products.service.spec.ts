import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { products } from "../../tests/mocked-api";

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive all products', () => {
    service.getProducts().subscribe( products => {
      expect(products.length).toBe(3);
    })

    const req = httpTestingController.expectOne('/products');
    expect(req.request.method).toEqual('GET');
    req.flush(products);
  });
});
