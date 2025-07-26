import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '@ssrmart/shared/types';
import { ProductCardComponent } from '@ssrmart/client/ui-product-card';

@Component({
  selector: 'ssrmart-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
      .hero-section {
        background: linear-gradient(
          45deg,
          var(--mat-sys-primary),
          var(--mat-sys-tertiary)
        );
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, RouterLink, NgOptimizedImage, ProductCardComponent],
})
export class HomePageComponent {
  productMock: Product = {
    id: '550e8400-e29b-41d4-a716-446655440031',
    name: 'Wireless Charging Pad',
    shortDescription:
      'Fast wireless charging pad with LED indicator and non-slip surface',
    description:
      'Keep your devices powered up effortlessly with this fast wireless charging pad that delivers up to 15W of power to compatible smartphones and accessories. The non-slip surface ensures your device stays securely in place while charging, and the LED indicator shows charging status at a glance. The slim profile takes up minimal desk space while the premium materials complement any office decor. Built-in safety features protect against overheating and overcharging for worry-free overnight charging. Compatible with all Qi-enabled devices including the latest smartphones and earbuds.',
    imageUrl:
      'https://images.unsplash.com/photo-1633381638729-27f730955c23?w=400&h=400&fm=webp',
    rating: 4.5,
    category: 'office',
    price: 39.99,
    isBestSeller: true,
  };
}
