import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChild,
} from '@angular/core';
import {
  FooterComponent,
  HeaderComponent,
  NavigationComponent,
} from './components';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'ssrmart-app-shell',
  template: `
    <mat-drawer-container>
      @defer (hydrate on interaction) {
      <ssrmart-header (openSidenavMenu)="drawer.open()" />
      }

      <mat-drawer #drawer mode="side" position="end" mode="over">
        @defer (hydrate on interaction) {
        <button
          mat-icon-button
          aria-label="Close sidenav menu"
          (click)="drawer.close()"
          class="!block ml-auto"
        >
          <mat-icon>close</mat-icon>
        </button>

        <ssrmart-navigation orientation="vertical" />
        }
      </mat-drawer>

      <main class="flex-1">
        <router-outlet />
      </main>

      @defer (hydrate on interaction) {
      <ssrmart-footer />
      }
    </mat-drawer-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    NavigationComponent,
  ],
  host: {
    class: 'flex flex-col min-h-screen',
  },
})
export default class AppShellComponent {
  private readonly _router = inject(Router);

  private readonly _drawer = viewChild<MatDrawer>('drawer');

  constructor() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        this._drawer()?.close();
      });
  }
}
