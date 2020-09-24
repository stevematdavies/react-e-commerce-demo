import React from "react";

import './collection-preview.styles.scss'


const CollectionPreview = ({title, items}) => (
  <div className="collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items.map(({id, name}) => (
          <div key={id}>{name}</div>
        ))
      }
    </div>
  </div>
)

export default CollectionPreview


