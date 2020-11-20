import React from 'react'
import { InfoSection } from '../../components'
import {homeObjThree, homeObjFour} from './Data';
const HomePage = () => {
    return (
        <>
          <InfoSection {...homeObjThree}/>  
          <InfoSection {...homeObjFour}/> 
        </>
    )
}

export default HomePage