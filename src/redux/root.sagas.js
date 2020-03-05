import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { shopSgas } from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([call(shopSgas), call(userSagas), call(cartSagas)]);
}
