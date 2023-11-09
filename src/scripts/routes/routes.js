import DetailPages from '../view/pages/detail';
import favoritePage from '../view/pages/favorites';
import homePage from '../view/pages/home';

const routes = {
  '/': homePage,
  '/home': homePage,
  '/detail/:id': DetailPages,
  '/favorite': favoritePage,
};

export default routes;
