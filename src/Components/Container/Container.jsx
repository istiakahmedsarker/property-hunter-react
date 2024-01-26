import React from 'react';

const Container = ({children}) => {

    return (
        <div className='w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;