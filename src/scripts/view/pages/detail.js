import restaurantAPI from '../../global/restaurant-API';
import urlParser from '../../routes/url-parser';
import likeButtonDeclaration from '../../utils/like-button-initiator';
import {restaurantItemDetail} from '../template/template-creator';

const DetailPages = {
  async render() {
    return `
        <div class="detail-page" id="detail-page"></div>
        <div id="like-Button-Container"></div>
      `;
  },

  async afterRender() {
    try {
      const url = urlParser.parseActiveUrlWithoutCombiner();
      const restaurantData = await restaurantAPI.detailRestaurant(url.id);

      const detailContainer = document.getElementById('detail-page');
      const likeButtonContainer = document.querySelector('#like-Button-Container');

      detailContainer.innerHTML = restaurantItemDetail(restaurantData);
      likeButtonDeclaration.init({
        likeButtonContainer: likeButtonContainer,
        resto: {
          id: restaurantData.id,
          name: restaurantData.name,
          pictureId: restaurantData.pictureId,
          city: restaurantData.city,
          rating: restaurantData.rating,
          description: restaurantData.description,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default DetailPages;
