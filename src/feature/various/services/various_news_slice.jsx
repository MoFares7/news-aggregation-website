export const fetchVariousNews = () => ({ type: 'FETCH_GET_VARIOUS_REQUEST' });
export const fetchVariousNewsSuccess = (data) => ({ type: 'FETCH_GET_VARIOUS_SUCCESS', payload: data });
export const fetchVariousNewsFailure = (error) => ({ type: 'FETCH_GET_VARIOUS_FAILURE', payload: error });

const initialState = {
        results: null,
        loading: false,
        error: null,
};

const variousNewsReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'FETCH_GET_VARIOUS_REQUEST':
                        return { ...state, loading: true, error: null, results: null };
                case 'FETCH_GET_VARIOUS_SUCCESS':
                        return { ...state, loading: false, results: action.payload, error: null };
                case 'FETCH_GET_VARIOUS_FAILURE':
                        return { ...state, loading: false, error: action.payload, results: null };
                default:
                        return state;
        }
};

export default variousNewsReducer;
