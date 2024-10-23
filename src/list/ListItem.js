import React, { useEffect } from 'react';
import Label from './Label';
import './ListItem.css'

function ListItem(props){
    const{
        title,
        descr,
        isActive,
        Delete,
        onLabel
    } = props;

    useEffect(()=>{
        console.log(title)
    })

    return (
        <div>
            <div>
                <h4>{title}</h4>
            </div>
            <div>
                {descr}
            </div>
            <div className="list-label">
                <Label  isActive={isActive} OnAction={onLabel} />
                <span className='delete' onClick={Delete}>Delete</span>
            </div>

        </div>
    );
}

export default ListItem;