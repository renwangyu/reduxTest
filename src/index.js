import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todo from './reducer';
import HelloComp from './container/HelloComp';

let store = createStore(todo, {content: 'first'});

console.log(store, '<><><><>');
console.log('<><><>', store.getState());
const start = () => {
  render(
    <Provider store={store}>
      <HelloComp />
    </Provider>,
    document.getElementById('root')
  );
};

start();

// if (module.hot) {
//   require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
//     getRootInstances: function () {
//       // Help React Hot Loader figure out the root component instances on the page:
//       // 帮助 React Hot Loader 识别出页面中的根组件
//       return [rootInstance];
//     }
//   });
// }