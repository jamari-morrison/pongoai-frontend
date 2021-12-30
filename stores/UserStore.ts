import { extendObservable } from 'mobx';
//test comment
class UserStore {
  [x: string]: any;
  constructor() {
    extendObservable(this, {
      loading: true,
      isLoggedIn: true,
      username: '',
    });
  }
}

export default new UserStore();
