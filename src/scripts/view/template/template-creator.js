import CONFIG from '../../data/Config';

const restaurantItem = (restaurant) => {
  return `
      <div class="restaurant-item" id="restaurant-item">
        <div class="topCard">
          <h2><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
          <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Gambar ${restaurant.name}" crossorigin="anonymous">
        </div>
        <section class="cardDesc">
          <p>${restaurant.description}</p>
          <table>
            <tr>
              <th>Alamat</th>
              <td>: ${restaurant.city}</td>
            </tr>
            <tr>
              <th>Rating</th>
              <td>: ${restaurant.rating}</td>
            </tr>
          </table>
        </section>
        <section id="like-button-container"></section>
      </div>
    `;
};

const restaurantItemDetail = (restaurant) => {
  return `
    <article class="restaurant-detail">
      <div class="restaurant-header">
        <h1>${restaurant.name}</h1>
        <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
        <div class="resto-desc">
          <p>${restaurant.description}</p>
          <p><b>Location</b> : ${restaurant.city}, ${restaurant.address}</p>
          <h3>Rating : ${restaurant.rating}</h3>
        </div>
      </div>
      <div class="restaurant-desc">
        <section class="resto-categ">
          <h2>Categories</h2>
          <div class="categ-name">
          ${restaurant.categories.map((category) => `<p>${category.name}</p>`).join('')}
          </div>
        </section>
        <h2>Menu</h2>
        <div class="resto-menu">
          <h3>Foods</h3>
          <section class="food-menu">
            ${restaurant.menus.foods.map((food) => `
              <div class="menu-card">
                <p>${food.name}</p>
              </div>
            `).join('')}
          </section>
          <h3>Drinks</h3>
          <section class="drink-menu">
            ${restaurant.menus.drinks.map((drink) => `
              <div class="menu-card">
                <p>${drink.name}</p>
              </div>
            `).join('')}
          </section>
        </div>
      </div>
      <div class="restaurant-info">
        <h2>Customer Reviews</h2>
        <div class="resto-review">
          ${restaurant.customerReviews.map((review) => `
            <div class="review-card">
              <p><b>${review.name}</b> - ${review.date}</p>
              <p>${review.review}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantItem,
  restaurantItemDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
