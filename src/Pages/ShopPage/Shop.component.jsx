// external libraries and stylesheet
import React, {Component} from "react";
import "./Shop.styles.scss";
import {Route} from "react-router-dom";

// import components and data
import CollectionPageContainer from "../Collection/Collection.container";
import CollectionsOverviewContainer from "../../Components/CollectionsOverview/CollectionsOverview.container";

// redux
import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../Redux/Shop/Shop.actions"



class ShopPage extends Component {
    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }

    render(){
        const {match} = this.props;

        return(
            <div className="shop-page">
                <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
                />
                <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
                />
            </div>
        )
    }   
};


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);