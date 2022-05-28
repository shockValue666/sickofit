import React,{FC} from 'react';
import CardDefinition from '../comps/CardDefinition';
import MainPage from '../comps/MainPage';

const Homes: FC = () => {
  return (
    <div>
        <MainPage/>
        <CardDefinition/>
        {/* <RoadMap/> */}
    </div>
  );
}

export default Homes;
