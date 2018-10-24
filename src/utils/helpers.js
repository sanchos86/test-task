import transit from 'transit-immutable-js';
import { Map, List } from 'immutable';

export const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Actions to deal with localStorage
 */
export const storageActions = {
  /**
   * Try to get users from localStorage
   * @return {List<Map>}
   */
  parseStorage() {
    let users = localStorage.getItem('users');

    if (users) {
      try {
        users = transit.fromJSON(users);
      } catch (e) {
        users = List();
        console.error('Users from local storage can`t be parsed');
      }
    } else {
      users = List();
    }

    return users;
  },
  /**
   * Add user to local storage
   * @param {Map} user
   */
  addToStorage(user) {
    let users = this.parseStorage();
    users = users.push(user);
    localStorage.setItem('users', transit.toJSON(users));
  },
  /**
   * Delete user from local storage
   * @param {string} id - id of user to be deleted
   */
  deleteFromStorage(id) {
    let users = this.parseStorage();
    users = users.filter(user => user.get('id') !== id);
    // If any users is presented then save them to ls, otherwise clear ls
    if (users.size) {
      localStorage.setItem('users', transit.toJSON(users));
    } else {
      localStorage.removeItem('users');
    }
  },
};
