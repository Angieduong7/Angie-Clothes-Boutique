import React, { useEffect } from 'react';
import './collection.style.scss';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { changeShopParams } from '../../redux/shop/shop.actions';

const CollectionPage = ({ collection, changeParams }) => {
  let params = useParams();

  useEffect(() => {
    changeParams(params.collectionId);
  }, [changeParams, params.collectionId]);

  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collection: selectCollection(state.shop.params)(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeParams: (item) => dispatch(changeShopParams(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);
