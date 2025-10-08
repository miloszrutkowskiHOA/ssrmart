import { Request, Response, Router } from 'express';
import { getArticles } from './get-articles';

export const articleSearchRoute = (router: Router): void => {
  router.get('/articles', async (req: Request, res: Response) => {
    try {
      const articles = await getArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  });
};
