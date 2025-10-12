import { Router } from 'express';
import { articleSearchRoute } from './lib/article-search';
import { getArticleByIdRoute } from './lib/get-article-by-id';

const registerArticlesRoutes = (router: Router): void => {
  articleSearchRoute(router);
  getArticleByIdRoute(router);
};

export default registerArticlesRoutes;