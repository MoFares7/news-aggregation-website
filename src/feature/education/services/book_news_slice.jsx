export const fetchBooksNews = () => ({ type: 'FETCH_GET_BOOKS_REQUEST' });
export const fetchBooksNewsSuccess = (data) => ({ type: 'FETCH_GET_BOOKS_SUCCESS', payload: data });
export const fetchBooksNewsFailure = (error) => ({ type: 'FETCH_GET_BOOKS_FAILURE', payload: error });

const initialState = {
        results: null,
        loading: false,
        error: null,
};

const booksNewsReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'FETCH_GET_BOOKS_REQUEST':
                        return { ...state, loading: true, error: null, results: null };
                case 'FETCH_GET_BOOKS_SUCCESS':
                        return { ...state, loading: false, results: action.payload, error: null };
                case 'FETCH_GET_BOOKS_FAILURE':
                        return { ...state, loading: false, error: action.payload, results: null };
                default:
                        return state;
        }
};

export default booksNewsReducer;
