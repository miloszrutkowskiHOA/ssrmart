import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StructuredData } from './structured-data.type';

export type StructuredDataId = 'product' | 'website';

@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private readonly _document = inject(DOCUMENT);

  addStructuredData(data: StructuredData, id: StructuredDataId): void {
    const script = this._document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = this._transformId(id);

    this.removeStructuredData(id);

    this._document.head.appendChild(script);
  }

  removeStructuredData(id: string): void {
    const script = this._document.getElementById(this._transformId(id));
    if (script) {
      script.remove();
    }
  }

  private _transformId(id: string): string {
    return `${id}-structured-data`;
  }
}
