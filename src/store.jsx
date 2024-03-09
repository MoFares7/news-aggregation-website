// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux'; // Import combineReducers
import createSagaMiddleware from 'redux-saga';
import usNewsReducer from './feature/home/services/us_service/us_news_slice';
import getTechCrunchReducer from './feature/home/services/techCrunch_service/tech_crunch_slice';
import rootSaga from './api/saga_root';

const rootReducer = combineReducers({
        usNews: usNewsReducer,
        getTechCrunch: getTechCrunchReducer,
      
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
