import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import {shoppingListReducer, watchShoppingList} from './shoppingList';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});
export type RootReducer = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([watchShoppingList()]);
}

// TODO: Replace it with Redux ToolKit or MobX later
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
