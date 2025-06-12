import { Component } from '@angular/core';
import { Product } from '../home/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class ProductDetails {
  product?: Product;

  constructor(private route: ActivatedRoute) {
    const nav = window.history.state;
    if (nav && nav.product) {
      this.product = nav.product;
    }
  }

  buy() {
    alert('Compra realizada com sucesso!');
  }
}
