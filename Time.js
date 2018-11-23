import React, {Component} from 'react'
import Timer from './Timer';

class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0,
            timer: 0,
            interval:0,
            nameB : 'start'
            
          
        }
        this.start = this.start.bind(this)
        this.Reset = this.Reset.bind(this)
    }
    start () {
        if(this.state.interval === 0) {
            
        
        const interval = setInterval(
            () => {
               this.setState({       
                   
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval,
            nameB : 'pause'
        })}
        else {
            clearInterval(this.state.interval)
            this.setState({
                interval: 0,
                nameB: 'start'
            })
        }
    }
  
    Reset () {
        this.setState({ 
            nameB:'start',
            interval:0,
            timeMs:0
        });
        clearInterval(this.state.interval)
        {
            return   
        }
    
    }
    render() {
        return <div>
            <Timer varms={this.state.timeMs} />
           <div className="button">
            <input
                type="button"
                value={this.state.nameB} 
                className="play"
                onClick={this.start} />
           
            <input
                type="button"
                value="Reset" 
                className="stop"
                onClick={this.Reset} />
        </div>
        </div>
    }
}

export default Time