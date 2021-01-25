export const productData = {
    productList: [],
    displayList: [],
    error: '',
    categoryList: [],
    filterList: [],
}

export const productReducers = (state={}, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTLIST': {
            const { productList, categoryList } = action.payload;
            return {
                ...state,
                error: '',
                productList,
                categoryList, 
            }
        }

        case 'FETCH_ERROR': {
            return {
                ...state,
                error: action.payload
            }
        }

        case 'FILTERLIST': {
            return {
                ...state,
                filterList: action.payload,
            }
        }

        case 'DISPLAYLIST': {
            return {
                ...state,
                displayList: action.payload,
            }
        }

        default:
            return state;
    }
}