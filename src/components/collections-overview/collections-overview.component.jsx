import React from 'react';

import './collections-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...other }) => {
        return <CollectionPreview key={id} {...other} />;
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
