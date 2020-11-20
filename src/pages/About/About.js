import React from 'react'
import { InfoSection } from '../../components'
import {homeObjFour} from './Data';
const HomePage = () => {
    return (
        <>  
          <InfoSection {...homeObjFour}/> 
        </>
    )
}

export default HomePage