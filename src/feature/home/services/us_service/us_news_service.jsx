// sagas.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from './us_news_slice';
import axios from 'axios';

export const fetchDataFromApi = async () => {
        try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=90fabd1dc97a4bf495863bc407b260e5');
                return { success: true, data: response };
        } catch (error) {
                return { success: false, error };
        }
};

// sagas.js
function* fetchDataSaga() {
        try {
                const { success, data, error } = yield call(fetchDataFromApi);

                if (success) {
                        console.log('API request successful:', data);
                        yield put(fetchDataSuccess(data.data.articles)); 
                } else {
                        console.error('API request failed:', error);
                        yield put(fetchDataFailure(error));
                }
        } catch (error) {
                console.error('An unexpected error occurred:', error);
                yield put(fetchDataFailure(error));
        }
}

export default fetchDataSaga;
