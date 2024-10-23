import React from 'react'

class Tool extends React.Component{
    render(){
      const {children,OnAction,labelValue} = this.props;
      
      return (
        <div>
            <div className="list-header">
            <select value={labelValue} onChange={OnAction} name="status">
                <option value="all">all</option>
                <option value ="active">active</option>
                <option value ="non-active" >non-active</option>
                </select>
            </div>
        {children}
        <div className = "list-footer">
        <p>Here are some infos.</p>
        </div>
        </div>
      )
    }
}

export default Tool;