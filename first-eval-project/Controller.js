import { Model } from './Model.js';
import { View } from './View.js';

export const Controller = ((model, view) => {
  const state = new model.State();

  const showDOB = () => {
    const userListContainer = document.querySelector(view.domstr.userListContainer)
    userListContainer.addEventListener('click', event => {
        if (event.target.className === 'btns') {
            const label = event.target.parentElement.querySelector('.dob-label')
            if (!label.classList.contains('dob-label-reveal')) {
                label.classList.add("dob-label-reveal")
            }
            else {
                label.classList.remove("dob-label-reveal")
            }
        }
    })
  };

  const reload = () => {
    const reloadBtn = document.querySelector(view.domstr.reloadButton)
    reloadBtn.addEventListener('click', event => {
        init()
    })
  }

  const init = () => {
    async function addPromises() {
        let allusers = []
        
        for (let i = 0; i < 5; i++) {
            let promises = []
            for (let i = 0; i < 4; i++) {
                promises.push(Model.getRawUser())
            }
            let newusers = await Promise.all(promises)
            allusers = [...allusers, ...newusers]

        }

        state.userList = allusers
    }

    addPromises()
  };

  const bootstrap = () => {
    init();
    showDOB();
    reload()
  };

  return { bootstrap };
})(Model, View);
