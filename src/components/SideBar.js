import React from 'react'
import Bardata from './Bardata';
import Comp from './Comp';

const SideBar = (props) => {

    const Data = Bardata.map(datum => <Comp  key={datum.id} datum={datum}/>)
    let bar = []
    bar.push(props.leagueName);
    let filtered = bar.filter( item => {
        
    })


    return(
        <div className='jude'>
            {props.leagueName}
        </div>
    )
};
export default SideBar;