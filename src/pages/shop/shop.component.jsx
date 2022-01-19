import React from 'react';
import SHOP_DATA from './shop.data.jsx';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collections: SHOP_DATA };
  }

  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map(({ id, ...other }) => {
          return <CollectionPreview key={id} {...other} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
