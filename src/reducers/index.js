import { combineReducers } from 'redux';
import { dataCart } from './SuperMarket Reducers/dataCart';
import { SearchInput } from './SuperMarket Reducers/SearchInput';
import { about } from './Skills';
import { reducerRepositories } from './repositories';
import { projetos } from './Projects';

const rootReducer = combineReducers({
  SearchInput,
  dataCart,
  about,
  reducerRepositories,
  projetos,
});

export default rootReducer;
