import {call, put, takeLatest} from 'redux-saga/effects';
import {ShoppingItem} from 'src/types/shoppingList';
import {getShoppingList} from 'src/services/api';

// Constants
export const SHOPPING_LIST_ADD = 'SHOPPING_LIST_ADD';
export const SHOPPING_LIST_CHANGE = 'SHOPPING_LIST_CHANGE';
export const SHOPPING_LIST_REMOVE = 'SHOPPING_LIST_REMOVE';

export const SHOPPING_LIST_LOAD_REQUEST = 'SHOPPING_LIST_LOAD_REQUEST';
export const SHOPPING_LIST_LOAD_SUCCESS = 'SHOPPING_LIST_LOAD_SUCCESS';
export const SHOPPING_LIST_LOAD_ERROR = 'SHOPPING_LIST_LOAD_ERROR';

// Actions
export const addShoppingItem = (payload: string) => {
  return {
    type: SHOPPING_LIST_ADD,
    payload,
  };
};

export const changeShoppingItem = (payload: string) => {
  return {
    type: SHOPPING_LIST_CHANGE,
    payload,
  };
};

export const removeShoppingItem = (payload: string) => {
  return {
    type: SHOPPING_LIST_REMOVE,
    payload,
  };
};

export const loadShoppingItem = (selectedDate: Date) => {
  return {
    type: SHOPPING_LIST_LOAD_REQUEST,
    payload: {
      selectedDate,
    },
  };
};

// Reducer

enum FetchStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

type DefaultAction = {
  type: string;
  payload?: any;
};

type ShoppingListState = {
  data: ShoppingItem[] | null;
  error: string | null;
  status: FetchStatus;
};

const initialState: ShoppingListState = {
  data: null,
  error: null,
  status: FetchStatus.Idle,
};

export const shoppingListReducer = (
  state = initialState,
  action: DefaultAction,
): ShoppingListState => {
  switch (action.type) {
    case SHOPPING_LIST_LOAD_REQUEST:
      return {
        ...state,
        error: null,
        status: FetchStatus.Loading,
      };
    case SHOPPING_LIST_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: FetchStatus.Succeeded,
      };
    case SHOPPING_LIST_LOAD_ERROR:
      return {
        ...state,
        error: action.payload,
        status: FetchStatus.Failed,
      };
    default:
      return state;
  }
};

// Sagas
function* handleLoadShoppingList({
  payload,
}: ReturnType<typeof loadShoppingItem>) {
  try {
    const shoppingList: ShoppingItem[] = yield call(
      getShoppingList,
      payload.selectedDate,
    );

    yield put({
      type: SHOPPING_LIST_LOAD_SUCCESS,
      payload: shoppingList,
    });
  } catch (error) {
    yield put({
      type: SHOPPING_LIST_LOAD_ERROR,
      payload: error,
    });
  }
}

export function* watchShoppingList() {
  yield takeLatest(SHOPPING_LIST_ADD, handleLoadShoppingList);
  yield takeLatest(SHOPPING_LIST_CHANGE, handleLoadShoppingList);
  yield takeLatest(SHOPPING_LIST_REMOVE, handleLoadShoppingList);
  yield takeLatest(SHOPPING_LIST_LOAD_REQUEST, handleLoadShoppingList);
}
