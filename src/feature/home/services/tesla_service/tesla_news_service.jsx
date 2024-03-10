import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchTeslaNews, fetchTeslaNewsSuccess, fetchTeslaNewsFailure } from './tesla_news_slice';
import axios from 'axios';

export const getTeslaNewsService = async () => {
        try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-02-10&sortBy=publishedAt&apiKey=90fabd1dc97a4bf495863bc407b260e5');
                return { success: true, data: response };
        } catch (error) {
                return { success: false, error };
        }
};

function* getTeslaNewsSaga() {
        try {
                const { success, data, error } = yield call(getTeslaNewsService);

                if (success) {
                        console.log('API request successful:', data);
                        yield put(fetchTeslaNewsSuccess(data.data.articles));
                } else {
                        console.error('API request failed:', error);
                        yield put(fetchTeslaNewsFailure(error));
                }
        } catch (error) {
                console.error('An unexpected error occurred:', error);
                yield put(fetchTeslaNewsFailure(error));
        }
}

export default getTeslaNewsSaga;
