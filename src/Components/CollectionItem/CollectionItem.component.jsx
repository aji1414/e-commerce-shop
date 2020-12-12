// external libraries and stylesheet
import React from "react";
import "./CollectionItem.styles.scss";


// redux
import {connect} from "react-redux";
import {addItem} from "../../Redux/Cart/Cart.actions";

// components
import CustomButton from "../CustomButton/CustomButton.component";

const CollectionItem = ({ item, addItem }) => {
    const {imageUrl, name, price} = item;
    
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`

                }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} className="custom-button" inverted>Add to cart</CustomButton>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(dispatch(addItem(item)))
})

export default connect(null,mapDispatchToProps)(CollectionItem);