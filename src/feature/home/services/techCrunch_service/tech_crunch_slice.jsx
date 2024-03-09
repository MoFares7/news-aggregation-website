export const fetchGetTechCrunch = () => ({ type: 'FETCH_GET_TECH_CRUNCH_REQUEST' });
export const fetchGetTechCrunchSuccess = (data) => ({ type: 'FETCH_GET_TECH_CRUNCH_SUCCESS', payload: data });
export const fetchGetTechCrunchFailure = (error) => ({ type: 'FETCH_GET_TECH_CRUNCH_FAILURE', payload: error });

const initialState = {
        articles: null,
        loading: false,
        error: null,
};

const getTechCrunchReducer = (state = initialState, action) => {
        switch (action.type) {
                case 'FETCH_GET_TECH_CRUNCH_REQUEST':
                        return { ...state, loading: true, error: null, articles: null };
                case 'FETCH_GET_TECH_CRUNCH_SUCCESS':
                        return { ...state, loading: false, articles: action.payload, error: null };
                case 'FETCH_GET_TECH_CRUNCH_FAILURE':
                        return { ...state, loading: false, error: action.payload, articles: null };
                default:
                        return state;
        }
};

export default getTechCrunchReducer;
