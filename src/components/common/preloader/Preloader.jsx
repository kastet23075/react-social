import React from 'react';
import preloader from '../../../asserts/images/loading.svg';

const Preloader = (props) => {

    return(
        <div style={ {backgroundColor: 'white'} }>
            <img src={preloader} />
        </div>
    );
}

export default Preloader;