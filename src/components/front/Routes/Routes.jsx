import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { Products } from '../Products/Products';
import { Signup } from '../Signup/Signup';

export const Routes = ({productItems,handlecartClearance,handleRemoveProduct, cartItems,handleAddProduct}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} 
                    handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route exact path="/cart">
                    <Cart cartItems={cartItems} 
                    handleAddProduct={handleAddProduct} 
                    handleRemoveProduct={handleRemoveProduct} 
                    handlecartClearance={handlecartClearance}/>
                </Route>
            </Switch>
        </div>
    )
}
