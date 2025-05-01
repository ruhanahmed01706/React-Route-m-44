import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='lg:mr-7 hover:bg-amber-500'>
                <a href="{route.path}" className='mx-4 '>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;