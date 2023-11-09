import favoriteRestoDb from '../../global/favorite-resto';
import { restaurantItem } from '../template/template-creator';

const favoritePage = {
  async render() {
    return `
          <div class="fav-pages">
            <h2>Your Favorite Restaurant</h2>
            <div id="fav-resto" class="fav-resto"></div>
          </div>
        `;
  },

  async afterRender() {
    try {
      const favRestaurant = await favoriteRestoDb.getAllResto();
      const favContainer = document.getElementById('fav-resto');
      const favPages = document.querySelector('.fav-pages');
      if (favRestaurant.length === 0) {
        favPages.innerHTML += '<h4>No your favorite restaurant here....</h4>';
      }

      favRestaurant.forEach((resto) => {
        favContainer.innerHTML += restaurantItem(resto);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default favoritePage;
