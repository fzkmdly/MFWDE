import restaurantAPI from '../../global/restaurant-API';
import { restaurantItem } from '../template/template-creator';

const homePage = {
  async render() {
    return `
            <div class="hero">
                <h1>Welcome to <span>AkaRestaurant</span></h1>
            </div>
            <div class="restaurant-list">
                <div class="restaurant-list-item" id="restaurant-list-item">
                </div>
            </div>
        `;
  },

  async afterRender() {
    try {
      const restaurantData = await restaurantAPI.listRestaurant();
      const restaurantContainer = document.getElementById('restaurant-list-item');
      if (restaurantData.length === 0) {
        restaurantContainer.innerHTML = '<h3>No restaurants available.</h3>';
      };
      restaurantData.forEach((restaurants) => {
        restaurantContainer.innerHTML += restaurantItem(restaurants);
      });
    } catch (error) {
      console.error('error in', error);
    }
  },
};

export default homePage;
