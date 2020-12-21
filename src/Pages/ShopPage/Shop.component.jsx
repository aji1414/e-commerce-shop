// external libraries and stylesheet
import React from "react";
import "./Shop.styles.scss";
import {Route} from "react-router-dom";

// import components and data
import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview.component";
import CollectionPage from "../Collection/Collection.component";

// redux


const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);



export default ShopPage;