import { all } from "redux-saga/effects";
import sagaComments from "./sagaComments";
function* rootSaga() {
  yield all([sagaComments()]);
}

export default rootSaga;
