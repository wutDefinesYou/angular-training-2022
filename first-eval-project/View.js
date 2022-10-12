import { generateRandomId } from './randomId.js';

export const View = (() => {
  const domstr = {
    userListContainer: '.userList-container',
    reloadButton: '.reload-btn',
  };

  const render = (ele, template) => {
    ele.innerHTML = template;
  };

  const createTemplate = (userArr) => {
    let template = '';
    userArr.forEach((item) => {
      const user = item['results'][0];
      const id = generateRandomId();
      template += `
              <div class="user-box">
                <div class="user-thumbnail">
                  <img src="${user['picture']['thumbnail']}" alt="">
                </div>
                <div class="user-description">
                  <p>name: ${`${user['name']['title']} ${user['name']['last']}`}</p>
                  <p>email: ${user['email']}</p>
                  <p>phone: ${user['phone']}</p>
                  <button type="button" class="btns" id="${id}">Show Birthday</button>
                  <label for='btns' class="dob-label">${user['dob']['date']}</label>
                </div>
              </div>
          `;
    });
    return template;
  };

  return { render, createTemplate, domstr };
})();
