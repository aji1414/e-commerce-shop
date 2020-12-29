// external libraries and stylesheet
import React from "react";
import './CollectionsOverview.styles.scss';

// components
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

// redux actions
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../Redux/Shop/Shop.selectors"


const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={collections.id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);