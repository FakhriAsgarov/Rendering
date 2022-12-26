import React, { Component } from 'react'
import './customButton.css'
export default class CustomButton extends Component {
    state={
        clicked:false,
        clickCount:0,
        hovered:false,
        font:'normal'
    }
     
    
    hoverOut=()=>{
        this.setState({font:'normal'}) 
        this.setState({hovered:false})
    }
    handleHover=()=>{
        this.setState({font:'italic'}) 
    this.setState({hovered:true})

    }
    handleClick=()=>{
      
        this.setState({clickCount:this.state.clickCount+1})
        if(this.state.clicked){
            this.setState({clicked:false})
        }
        else{
            this.setState({clicked:true})
        }
        
    }
  render() {
    const {clickCount,font}=this.state;
  
    return (
      <div className='mainDiv'>
        <button style={{fontStyle:font}} onClick={this.handleClick} onMouseEnter={this.handleHover}
         onMouseLeave={this.hoverOut} className={this.state.clicked?'btn red':'btn'}>
            {this.props.text}
        </button>
        <p className={this.state.hovered?"popUp active":'popUp'}>
            {this.props.hint}
        </p>
        <p className={this.state.clicked?'message active':"message"}>
        {this.props.warnMessage+': '+ clickCount}
        </p>
      </div>
    )
  }
}
