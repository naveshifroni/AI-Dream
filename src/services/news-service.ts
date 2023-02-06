import { Article } from "../features/news/news";

import {v4} from 'uuid';
export const newsApiUrl =
  "https://newsapi.org/v2/everything?q=artificialintelligence&from=2023-01-06&sortBy=publishedAt&apiKey=aab2da8b265a491aa91301259c6b9050";

export const defaultImage =
  "https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder-news.jpg";

export const fetchArticles = () =>
  fetch(newsApiUrl)
    .then((res) => res.json())
    .then((json) => json.articles as Article[])
    .then((articles) => {
      articles.forEach((a) => {
        a.urlToImage = a.urlToImage ?? defaultImage;
        a.id = v4();
        a.isFavorite = false
      });
      return articles;
    });
