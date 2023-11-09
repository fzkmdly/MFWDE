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
    return (await dbPromise).get(OBJECT_STORE_APP, id);
  },

  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_APP);
  },

  async putResto(id) {
    return (await dbPromise).put(OBJECT_STORE_APP, id);
  },

  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_APP, id);
  },
};

export default favoriteRestoDb;
