import {all, call} from "redux-saga/effects";

import {shopSagas} from "./Shop/Shop.saga";
import {userSagas} from "./User/User.sagas"

export default function* rootSaga(){
    yield all([
        call(shopSagas),
        call(userSagas)
    ]);
};