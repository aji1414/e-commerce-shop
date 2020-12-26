// external libraries and stylesheet
import React, {Component} from "react";
import "./Shop.styles.scss";
import {Route} from "react-router-dom";

// import components and data
import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview.component";
import CollectionPage from "../Collection/Collection.component";
import {firestore, convertCollectionsSnapshotToMap} from "../../Firebase/Firebase.utils";
import WithSpinner from "../../Components/WithSpinner/WithSpinner.component";

// redux
import {connect} from "react-redux";
import {updateCollections} from "../../Redux/Shop/Shop.actions"


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);




class ShopPage extends Component {

    state = {
        loading:true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection("collections");
        const {updateCollections} = this.props;

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading:false});
        })

    }


    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className="shop-page">
                <Route
                exact
                path={`${match.path}`}
                render={props => (
                <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                )}
                />
                <Route
                path={`${match.path}/:collectionId`}
                render={props => (
                <CollectionPageWithSpinner isLoading={loading} {...props} />
                )}
                />
            </div>
        )
    }   
};

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);