import React, { Component } from "react";
import SHOP_DATA from "./shops-data/shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollections }) => (
          <CollectionPreview key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
