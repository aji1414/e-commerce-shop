// external libraries and stylesheet
import React from "react";
import './Collection.styles.scss';

// components
import CollectionItem from "../../Components/CollectionItem/CollectionItem.component";

// redux actions
import {connect} from "react-redux";
import {selectCollection} from "../../Redux/Shop/Shop.selectors";

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)};


const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

