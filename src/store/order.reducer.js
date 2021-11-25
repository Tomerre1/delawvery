const initialState = {
    orders: [],
}
export function orderReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ORDER':
            return { ...state, orders: [...state.orders, action.payload] }

        case 'REMOVE_ORDER':
            return { ...state, orders: state.orders.filter(order => order._id !== action.payload) }

        case 'UPDATE_ORDER':
            return { ...state, orders: state.orders.map(order => order._id === action.payload._id ? action.payload : order) }

        case 'SET_ORDERS':
            return { ...state, orders: action.payload }

        default:
            return state;
    }
}