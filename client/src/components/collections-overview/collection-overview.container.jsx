import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with.spinner.component';
import CollectionOverview from './collections-overview.component';

const mapStateTpProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateTpProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
