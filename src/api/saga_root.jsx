// rootSaga.js

import fetchDataSaga from "../feature/home/services/us_service/us_news_service";
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
        yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
}
