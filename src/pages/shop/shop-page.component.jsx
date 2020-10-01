import React from "react";
import {Route} from "react-router";
import {connect} from 'react-redux'
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection-page.component";

import './shop-page.styles.css'
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {

  unsubScribeFromSnapShot = null

  componentDidMount() {
    this.unsubScribeFromSnapShot = firestore.collection('collections')
      .onSnapshot(async snapshot =>
        this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot)))
  }

  render() {
    const {match} = this.props
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
})


export default connect(null, mapDispatchToProps)(ShopPage)
