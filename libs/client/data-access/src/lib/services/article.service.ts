import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from '@ssrmart/shared/config';
import { Article } from '@ssrmart/shared/types';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = inject(ConfigService).get('apiUrl');

  getArticles() {
    return this._http.get<Article[]>(`${this._apiUrl}/articles`);
  }

  getArticle(id: string) {
    return this._http.get<Article>(`${this._apiUrl}/articles/${id}`);
  }
}
