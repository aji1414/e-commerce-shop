// components
import WithSpinner from "../../Components/WithSpinner/WithSpinner.component";
import CollectionPage from "./Collection.component";

// redux actions
import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import { selectIsCollectionsLoaded} from "../../Redux/Shop/Shop.selectors"

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;