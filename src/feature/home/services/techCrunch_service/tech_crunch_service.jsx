import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchGetTechCrunchSuccess, fetchGetTechCrunchFailure } from './tech_crunch_slice';
import axios from 'axios';

export const getTechCrunchService = async () => {
        try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=90fabd1dc97a4bf495863bc407b260e5');
                return { success: true, data: response };
        } catch (error) {
                return { success: false, error };
        }
};
function* getTechCrunchSaga() {
        try {
                const { success, data, error } = yield call(getTechCrunchService);

                if (success) {
                        console.log('API request successful:', data);
                        yield put(fetchGetTechCrunchSuccess(data.data.articles));
                } else {
                        console.error('API request failed:', error);
                        yield put(fetchGetTechCrunchFailure(error));
                }
        } catch (error) {
                console.error('An unexpected error occurred:', error);
                yield put(fetchGetTechCrunchFailure(error));
        }
}

export default getTechCrunchSaga;
