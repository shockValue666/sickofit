import React,{FC} from 'react';
import { Typography } from '@mui/material'
import BottomPic from '../comps/p1/BottomPic';
import Footer from '../comps/Footer';
import RoadMapExplained from '../comps/RoadMapExplained';

const RoadMap: FC = () => {
  return (
    <div>
        <Typography variant="h2" gutterBottom component="div" >
        roadmap
      </Typography>
      <Typography variant="h6" gutterBottom component="div" sx={{paddingBottom:"7%"}} >
        our roadmap explained (we need to find something more edgy for the description)
      </Typography>
      <RoadMapExplained/>
      <BottomPic/>
      <Footer/>
    </div>
  );
}

export default RoadMap;
