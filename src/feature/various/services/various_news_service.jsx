import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchVariousNewsSuccess, fetchVariousNewsFailure } from './various_news_slice';
import axios from 'axios';

export const getVariousNews = async () => {
        try {
                const response = await axios.get('https://content.guardianapis.com/world/france?api-key=test');
                return { success: true, data: response };
        } catch (error) {
                return { success: false, error };
        }
};
function* getVariousNewsSaga() {
        try {
                const { success, data, error } = yield call(getVariousNews);

                if (success) {
                        console.log('API request successful:', data);
                        yield put(fetchVariousNewsSuccess(data.data.response.results));
                } else {
                        console.error('API request failed:', error);
                        yield put(fetchVariousNewsFailure(error));
                }
        } catch (error) {
                console.error('An unexpected error occurred:', error);
                yield put(fetchVariousNewsFailure(error));
        }
}

export default getVariousNewsSaga;
