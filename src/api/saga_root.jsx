import getBooksNewsSaga from "../feature/education/services/book_news_service";
import getVariousNewsSaga from "../feature/various/services/various_news_service";
import getTechCrunchSaga from "../feature/home/services/techCrunch_service/tech_crunch_service";
import getTeslaNewsSaga from "../feature/home/services/tesla_service/tesla_news_service";
import fetchDataSaga from "../feature/home/services/us_service/us_news_service";
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
        yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
        yield takeLatest('FETCH_GET_TECH_CRUNCH_REQUEST', getTechCrunchSaga);
        yield takeLatest('FETCH_GET_TESLA_REQUEST', getTeslaNewsSaga);
        yield takeLatest('FETCH_GET_BOOKS_REQUEST', getBooksNewsSaga);
        yield takeLatest('FETCH_GET_VARIOUS_REQUEST', getVariousNewsSaga);
}
