import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { commentsApi } from "./../../pages/api";
import {
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_FAILURE,
  GET_ALL_COMMENTS,
} from "../../constants";

function* getAllComments() {
  try {
    const result = yield call(async () => {
      return await commentsApi();
    });
    if (result && result.length > 0) {
      yield put({ type: GET_ALL_COMMENTS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ALL_COMMENTS_FAILURE });
    }
  } catch (error) {
    yield put({ type: GET_ALL_COMMENTS_FAILURE, payload: error });
  }
}

function* SagaComments() {
  yield takeLatest(GET_ALL_COMMENTS, getAllComments);
}

export default SagaComments;
