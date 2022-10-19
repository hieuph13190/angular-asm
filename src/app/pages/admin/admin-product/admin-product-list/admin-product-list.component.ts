import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {

    this.onGetList();
  }

  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onDelete(id: number) {

    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');

    if (confirmDelete && id) {

      this.productService.deleteProduct(id).subscribe((data) => {
        console.log(data); // {}

        this.onGetList();
      })
    }
  }

}
