import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {useDispatch,useSelector} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart-action-creator';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors';

const CartIcon = () => {
	const dispatch = useDispatch()
	const itemCount = useSelector(state => selectCartItemsCount(state))
 	return (
		<div className="cart-icon" onClick={()=> dispatch(toggleCartHidden())} >
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count"> 
				{itemCount}
			</span>
		</div>
	);
}

export default CartIcon;