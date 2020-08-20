import { combineReducers } from 'redux';
import { dataCart } from './dataCart';
import { SearchInput } from './SearchInput';
import { about } from './Skills';
import { reducerRepositories } from './repositories';

const rootReducer = combineReducers({
  SearchInput,
  dataCart,
  about,
  reducerRepositories,
});

export default rootReducer;
