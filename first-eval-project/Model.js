import { Api } from './Api.js';
import { View } from './View.js';

export const Model = ((api, view) => {
  const { getRawUser } = api;

  class State {
    #userList = [];

    get userList() {
      return this.userList;
    }

    set userList(newUserList) {
      this.#userList = newUserList;

      const userListContainer = document.querySelector(
        view.domstr.userListContainer
      );

      const template = view.createTemplate(this.#userList);
      view.render(userListContainer, template);
    }
  }

  return { getRawUser, State };
})(Api, View);
