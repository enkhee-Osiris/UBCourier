import Navigator from '../../navigation/Navigator';

// const initialState =
// Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Settings'));

const navigatorReducer = (state, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigatorReducer;
