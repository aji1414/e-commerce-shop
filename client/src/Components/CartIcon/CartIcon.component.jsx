// external libraries and stylesheet
import React, {Component} from "react";
import "./CartIcon.styles.scss";

// redux
import { createStructuredSelector } from "reselect";
import {connect} from "react-redux";
import {toggleCartHidden, hideCart} from "../../Redux/Cart/Cart.actions";
import {selectCartItemsCount, selectCartHidden} from "../../Redux/Cart/Cart.selectors";

// components used
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg"

class CartIcon extends Component {

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside, false);
    }

    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClickOutside, false);
    }

    handleClickOutside = (e) =>{
        const arrayExemptLocations = ["GO TO CHECKOUT", "EMPTY CART"];

        if(this.node.contains(e.target)){
            return;
        }
        else if(arrayExemptLocations.includes(e.path[0].innerHTML.toUpperCase()) === true){
            return;
        } 

        const {hideCart, cartHidden} = this.props;
        if(cartHidden === false){hideCart()};
    }

    render(){
        const {toggleCartHidden, itemCount} = this.props;
        return(
        <div ref={node => this.node = node} className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>)}
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden()),
    hideCart: () => dispatch(hideCart())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
    cartHidden: selectCartHidden
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);