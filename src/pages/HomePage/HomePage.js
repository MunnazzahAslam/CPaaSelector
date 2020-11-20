import React from 'react';
import { InfoSection, Pricing } from '../../components';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
const HomePage = () => {
    return (
        <>
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Pricing/>
          <InfoSection {...homeObjThree}/>  
          <InfoSection {...homeObjFour}/> 
        </>
    )
}

export default HomePage;
