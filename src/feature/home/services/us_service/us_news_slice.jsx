// actions.js
export const fetchData = () => ({ type: 'FETCH_DATA_REQUEST' });
export const fetchDataSuccess = (data) => ({ type: 'FETCH_DATA_SUCCESS', payload: data });
export const fetchDataFailure = (error) => ({ type: 'FETCH_DATA_FAILURE', payload: error });

// reducer.js
const initialState = {
        articles: null,
        loading: false,
        error: null,
};

const usNewsReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'FETCH_DATA_REQUEST':
                        return { ...state, loading: true, error: null, articles: null };
                case 'FETCH_DATA_SUCCESS':
                        return { ...state, loading: false, articles: action.payload, error: null };
                case 'FETCH_DATA_FAILURE':
                        return { ...state, loading: false, error: action.payload, articles: null };

                default:
                        return state;
        }
};

export default usNewsReducer;
