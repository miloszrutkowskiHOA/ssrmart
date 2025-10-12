import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Article } from '@ssrmart/shared/types';

@Component({
  selector: 'ssrmart-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
  imports: [MatCardModule, MatButtonModule, RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCardComponent {
  readonly article = input.required<Article>();
}
