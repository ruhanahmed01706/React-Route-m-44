import React, { use } from 'react';
import PrichingCard from './PrichingCard';

const PrichingOption = ({priceingPromise}) => {

    const prichingData = use(priceingPromise);

    
    

    return (
        <div className='p-4'>
            <h2 className='text-4xl text-center my-10'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    prichingData.map(priching => <PrichingCard key={priching.id}
                    priching={priching}></PrichingCard>)
                }
            </div>
            
        </div>
    );
};

export default PrichingOption;