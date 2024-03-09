export const fetchTeslaNews = () => ({ type: 'FETCH_GET_TESLA_REQUEST' });
export const fetchTeslaNewsSuccess = (data) => ({ type: 'FETCH_GET_TESLA_SUCCESS', payload: data });
export const fetchTeslaNewsFailure = (error) => ({ type: 'FETCH_GET_TESLA_FAILURE', payload: error });

const initialState = {
        articles: null,
        loading: false,
        error: null,
};

const teslaNewsReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'FETCH_GET_TESLA_REQUEST':
                        return { ...state, loading: true, error: null, articles: null };
                case 'FETCH_GET_TESLA_SUCCESS':
                        return { ...state, loading: false, articles: action.payload, error: null };
                case 'FETCH_GET_TESLA_FAILURE':
                        return { ...state, loading: false, error: action.payload, articles: null };

                default:
                        return state;
        }
};

export default teslaNewsReducer;
