let flag = true;
const todo = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      flag = !flag;
      return Object.assign({}, state, {
        content: flag ? 'Mr True' : 'Miss false'
      });
    default:
      return state;
  }
};

export default todo;