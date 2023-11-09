import APIEndpoint from './API-endpoint';

class restaurantAPI {
  static async fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async listRestaurant() {
    const url = APIEndpoint.LIST;
    return this.fetchData(url)
        .then((responseJson) => responseJson.restaurants)
        .catch((error) => {
          throw new Error(error);
        });
  }

  static async detailRestaurant(id) {
    const url = APIEndpoint.DETAIL(id);
    return this.fetchData(url)
        .then((responseJson) => responseJson.restaurant)
        .catch((error) => {
          throw new Error(error);
        });
  }
}

export default restaurantAPI;
