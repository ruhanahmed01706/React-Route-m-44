import React from 'react';
import PrichingFeature from './PrichingFeature';

const PrichingCard = ({priching}) => {
    const {name,price,description,features} = priching;
    return (
        <div className='bg-amber-800 border p-4 rounded-2xl'>
            {/* Card Header */}
            <div>
                <h1 className='text-5xl'>{name}</h1>
                <h3 className='text-3xl'>{price}</h3>
            </div>

            {/* Card Body */}
            <div className='bg-amber-300 p-4 rounded-2xl text-gray-600 mt-3'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PrichingFeature key={index} feature={feature}></PrichingFeature>)
                }

            </div>
        </div>
    );
};

export default PrichingCard;