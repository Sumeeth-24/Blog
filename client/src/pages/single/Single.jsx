import React from 'react'
import './single.css';
import SinglePost from '../../components/SinglePost/SinglePost';
import Sidebars from '../../components/sidebars/Sidebars';

const Single = ({setCurrentId}) => {
    return (
        <div className='single'>
           <SinglePost setCurrentId={setCurrentId}/>
           {/* <Sidebars /> */}
        </div>
    )
}

export default Single;
