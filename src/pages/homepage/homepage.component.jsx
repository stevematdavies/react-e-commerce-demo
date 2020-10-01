import React from 'react';
import DirectoryComponent from "../../components/directory/directory.component";

import './homepage.styles.scss';
import {HomePageContainer} from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <DirectoryComponent/>
  </HomePageContainer>
);

export default HomePage;
