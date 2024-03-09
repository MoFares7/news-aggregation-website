import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchBooksNewsSuccess, fetchBooksNewsFailure } from './book_news_slice';
import axios from 'axios';

export const getBooksNewsService = async () => {
        try {
                const response = await axios.get('https://content.guardianapis.com/search?page=2&q=debate&api-key=test');
                return { success: true, data: response };
        } catch (error) {
                return { success: false, error };
        }
};

function* getBooksNewsSaga() {
        try {
                const { success, data, error } = yield call(getBooksNewsService);

                if (success) {
                        console.log('API request successful:', data);
                        yield put(fetchBooksNewsSuccess(data.data.response.results)); 
                } else {
                        console.error('API request failed:', error);
                        yield put(fetchBooksNewsFailure(error));
                }
        } catch (error) {
                console.error('An unexpected error occurred:', error);
                yield put(fetchBooksNewsFailure(error));
        }
}

export default getBooksNewsSaga;
