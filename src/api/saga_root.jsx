// rootSaga.js

import getTechCrunchSaga from "../feature/home/services/techCrunch_service/tech_crunch_service";
import fetchDataSaga from "../feature/home/services/us_service/us_news_service";
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
        yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
        yield takeLatest('FETCH_GET_TECH_CRUNCH_REQUEST', getTechCrunchSaga);
}
