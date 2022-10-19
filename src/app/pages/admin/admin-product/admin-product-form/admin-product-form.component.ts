import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),

      ]),

      price: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),

      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      desc: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      categoryId: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(6),
      ]),
    });

    this.productId = '0';
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {

        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          image: data.image,
          desc: data.desc,
          categoryId: data.categoryId,


        });
      });
    }
  }




  onSubmit() {

    const submitData = this.productForm.value;
    console.log(this.productId)
    if (this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }


    return this.productService.createProduct(submitData).subscribe((data) => {
      this.router.navigateByUrl('/admin/products')
    })

  }

}
