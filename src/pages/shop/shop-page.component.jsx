import React from "react";
import CollectionPreview from "../../components/collection-preview/collection.peview.component";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectCollections} from '../../redux/shop/shop.selectors'

import './shop-page.styles.css'


const ShopPage = ({collections}) => (
  <div className="shop-page">
    {
      collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
