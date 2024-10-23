import React  from "react"

import ListItem from "./ListItem"
function SimpleList(props){
    const {
        NewList,
        OnAction,
        onCLickLabel
    } = props
    return(
        <div>
            {
                NewList.map((obj)=>{
                    return <ListItem key={obj.title} title={obj.title} descr={obj.descr} isActive={obj.isActive} Delete={()=>{
                        OnAction(obj)
                    }} onLabel={onCLickLabel}/>
                })
            }
</div>
    )
}

export default SimpleList;