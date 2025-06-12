import { Component } from '@angular/core';
import { Product } from './product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  products: Product[] = Array.from(
    { length: Math.floor(Math.random() * 30) + 1 },
    (_, i) => ({
      id: i + 1,
      name: `Produto ${String.fromCharCode(65 + (i % 26))}`,
      price: (i + 1) * 50,
      imageUrl: `https://picsum.photos/seed/${Math.random()}/600/600`
    })
  );

  constructor(private router: Router) {}

  showDetails(product: Product): void {
    this.router.navigate(['/details'], { state: { product } });
  }
}
