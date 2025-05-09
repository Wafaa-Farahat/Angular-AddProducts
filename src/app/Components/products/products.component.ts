import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  @Output() getProducts = new EventEmitter<any>();

  productForm: FormGroup;
  products = [
    {
      name: 'Laptop Screen Extender',
      description: '12" FHD 1080P IPS Triple Portable',
      imgUrl: 'https://m.media-amazon.com/images/I/61R5duZ2KhL.jpg',
      rate: 4.5
    },
    {
      name: 'The J-Tech Digital V628X',
      description: 'Vertical mouse. Allows you to change the angle.',
      imgUrl: 'https://i.rtings.com/assets/products/mrmhJ4qC/j-tech-digital-v628x/design-medium.jpg?format=auto',
      rate: 3.5
    },
  ];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(16)]],
      imgUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
      rate: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.products.push(newProduct); // Add the new product to the list
      this.productForm.reset();
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
