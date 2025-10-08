import { Router } from 'express';
import { getArticles } from './get-articles';

export const getArticleByIdRoute = (router: Router): void => {
  router.get('/articles/:id', async (req, res) => {
    const articles = await getArticles();

    const articleId = req.params.id;
    const article = articles.find((a) => a.id === articleId);

    if (!article) {
      res.status(404).json({ error: `Article with id ${articleId} not found` });
      return;
    }

    res.json(article);
  });
};
