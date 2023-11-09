import { openDB } from 'idb';
import CONFIG from '../data/Config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_APP} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_APP, {keyPath: 'id'});
  },
});

const favoriteRestoDb = {
  async getResto(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_APP, id);
  },

  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_APP);
  },

  async putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_APP, resto);
  },

  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_APP, id);
  },

  async searchResto(query) {
    return (await this.getAllResto()).filter((resto) => {
      const loweredCaseRestoTitle = (resto.title || '-').toLowerCase();
      const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default favoriteRestoDb;
