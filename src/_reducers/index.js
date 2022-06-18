import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { assets } from './assets.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  assets,
  alert
});

export default rootReducer;