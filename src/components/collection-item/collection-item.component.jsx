import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemComponent,
  CollectionItemImage,
  CollectionFooterComponent,
  CollectionItemCustomButton,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemComponent>
      <CollectionItemImage
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooterComponent>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterComponent>
      <CollectionItemCustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CollectionItemCustomButton>
    </CollectionItemComponent>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
