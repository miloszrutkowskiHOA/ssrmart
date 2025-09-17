import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ssrmart-footer',
  template: `
    <footer class="bg-black text-white">
      <div
        class="max-w-[--section-max-w] mx-auto py-8 px-4 xl:px-0 flex flex-col md:flex-row items-center md:justify-between gap-4"
      >
        <div class="flex gap-4">
          <a [routerLink]="'/privacy-policy'">Privacy Policy</a>
          <a [routerLink]="'/terms-of-service'">Terms of Service</a>
        </div>

        <p class="!mb-0">&copy; {{ year }} SRRmart. All rights reserved.</p>
      </div>
    </footer>
  `,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}