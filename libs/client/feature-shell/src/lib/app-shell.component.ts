import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from './components';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'ssrmart-app-shell',
  template: `
    @defer (hydrate on interaction) {
    <ssrmart-header />
    }

    <main class="flex-1">
      <router-outlet />
    </main>

    @defer (hydrate on interaction) {
    <ssrmart-footer />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  host: {
    class: 'flex flex-col min-h-screen',
  },
})
export default class AppShellComponent {}
