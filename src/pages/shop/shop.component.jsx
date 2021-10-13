import React, { useState } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import SHOP_DATA from "./shop.data";

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      <h1>Shop</h1>
      {collections
      .map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview {...otherCollectionProps} />
      ))}
    </div>
  ); 
};

export default Shop;
