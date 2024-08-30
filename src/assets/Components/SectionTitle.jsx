import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='text-center mx-auto w-3/12 my-6 '> 

            <p className='text-yellow-600 uppercase'>{subheading}</p>
            <h3 className='text-4xl upcarase  border-y-4 py-4'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;