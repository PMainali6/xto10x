import React, { useEffect, useContext, useCallback, useState } from 'react';
import { StoreContext } from '../App';
import { fetchProductList } from '../service/service';

function Header() {
    const [ filters, setFilters ] = useState([]);
    const { store, dispatch } = useContext(StoreContext);
    const { productReducers } = store;
    const { categoryList, productList } = productReducers;

    useEffect(() => {
        if(categoryList.length === 0) {
            fetchProductList(dispatch);
        }
    }, [categoryList, dispatch]);

    const filterClick = (e) => {
        const filter = e.target.innerText;
        setFilters(prevState => {
            return [...prevState, filter]
        });
        const localFilter = [...filters, filter];
        const filteredProd = productList.filter(item => {
            return localFilter.includes(item.category)
        })

        dispatch({
            type: 'DISPLAYLIST',
            payload: filteredProd,
        })
    }

    return (
        <header className="header">
            <div>Admin Panel</div>
            <h3>10x Connect</h3>
            <p>Welcome Kavya</p>
            <div 
                role="presentation"
                onClick={(e) => filterClick(e)}
            >
                {categoryList.length > 0 && categoryList.map(item => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        </header>
    )
}

export default Header;