// external libraries and stylesheet
import React, { Component } from "react";
import "./Shop.styles.scss";

// import components and data
import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview.component";

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div >
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={collections.id} {...otherCollectionProps} />
                ))}
            </div>
        )

    }
}

export default ShopPage;