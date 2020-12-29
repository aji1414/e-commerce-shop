import React from 'react';
// import './HomePage.styles.scss';
import {HomePageContainer} from "./HomePage.styles";

// Components needed
import Directory from "../../Components/Directory/Directory.component";

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;