import React from "react";
import {Route} from "react-router";
import {connect} from 'react-redux'
import withSpinner from "../../components/withSpinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection-page.component";

import './shop-page.styles.css'
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {

  state = {isLoading: true}

  unsubScribeFromSnapShot = null

  componentDidMount() {
    this.unsubScribeFromSnapShot = firestore.collection('collections')
      .onSnapshot(async snapshot => {
        this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot))
        this.setState({isLoading: false})
      })
  }

  componentWillUnmount() {
    this.unsubScribeFromSnapShot = null
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props =>
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}/>
        <Route path={`${match.path}/:collectionId`} render={props =>
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
})


export default connect(null, mapDispatchToProps)(ShopPage)
