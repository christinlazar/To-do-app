
import React from 'react';
import ListItem from './ListItem';
import Tool from '../Components/Tool';
import SimpleList from './SimpleList';
// const arr = [
//     {
//         id:1,
//         title:"APpointment for November",
//         descr:"The patient is rescheduled",
//         isActive:true
//     },
//     {
//         id:2,
//         title:"APpointment for dece,ne",
//         descr:"The patient is rescheduled",
//         isActive:false
//     }
//     , {
//         id:3,
//         title:"APpointment for december",
//         descr:"The patient is rescheduled",
//         isActive:true
//     }
// ];

const Context1 = React.createContext();

class List extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: [],
            ActiveState:'all',
            showLabel:true
        }
    }

    OnLIstChange =(evt) =>{
       const value = evt.target.value;



        this.setState({
            ActiveState:value
        })

    }

    HandleDelete = (itemToDelete) => {
        
        const newList = this.state.data.filter((item)=>item != itemToDelete)
        this.setState({
            data:newList
        })

    }
    
    clickLabel = (arg) => {
        this.setState({
            ActiveState:arg
        })
    }

    componentDidMount(){
        fetch('/data.json')
        .then((data)=>{
            return data.json()
        }).then((data)=>{
            this.setState({
                data:data
            })
        })
    }

    changeLabel=(evt)=>{
        this.setState({
            showLabel:evt.target.checked
        })
    }

    render(){
        const {
            data,
            ActiveState
        } = this.state

        const newList = data.filter((item)=>{
            if(ActiveState === 'all'){
                return true
            }
            if(ActiveState === 'active'){
                return item.isActive
            }
            if(ActiveState === 'non-active'){
                return item.isActive === false
            }
        })

        return (
        <div>
            <input checked={this.state.showLabel} onChange={this.changeLabel} type="checkbox"></input>
            <Context1.Provider value={this.state.showLabel}>
                    <Tool labelValue={ActiveState} OnAction={this.OnLIstChange} >
                    <SimpleList NewList={newList} OnAction={this.HandleDelete} onCLickLabel={this.clickLabel}/>
                    </Tool>
            </Context1.Provider>
        </div>
        )
    }
}

export default List;

export {
    Context1
}