import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PrichingFeature = ({feature}) => {
    return (

        <p className='flex text-2xl mt-2'> {<CircleCheckBig className='mr-2'></CircleCheckBig>}{feature}</p>
    );
};

export default PrichingFeature;