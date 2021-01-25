import React, { Fragment, useContext } from 'react';
import { StoreContext } from '../App';

function ProductList() {
    const { store, dispatch } = useContext(StoreContext);
    const { productReducers } = store;
    const { displayList, productList } = productReducers;
    debugger;
    return(
        <Fragment>
            <h1>ProductList</h1>
            <div>
                {displayList.length === 0 && productList.length > 0 ?
                    productList.map(item => (
                        <div key={item.category}>
                            {item.productName}
                        </div>
                    ))
                : displayList.length > 0 && productList.length > 0 ? 
                    displayList.map(item => (
                        <div key={item.category}>
                            {item.productName}
                        </div>
                    ))
                : ''}
            </div>
        </Fragment>
    )
}

export default ProductList;