import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import './collection-item.styles.scss';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/cart/cart-action-creator';

const CollectionItem = (item) => {

    const dispatch = useDispatch()
    const {name, price, imageUrl} = item;
    return(
        <div className='collection-item'>
            <div
                className='image'
                style={{
                backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={()=> dispatch(addItem(item))} > Add to Cart </CustomButton>
        </div>
    );
}

export default CollectionItem