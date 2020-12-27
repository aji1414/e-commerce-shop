// external libraries and stylesheet
import React, { Component } from "react";
import {compose} from "redux";
// import './App.styles.scss';

// components
import WithSpinner from "../WithSpinner/WithSpinner.component";
import CollectionsOverview from "./CollectionsOverview.component";

// redux actions
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../Redux/Shop/Shop.selectors";
import { createUserProfileDocument } from "../../Firebase/Firebase.utils";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;