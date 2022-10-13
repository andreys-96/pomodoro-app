import React from "react"
export class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.count
        }
    }
    countDown() {
        const timer = setInterval(() => {
            if(this.state.count <= 0 ) {
                clearInterval(timer)
                alert('Time is out')
            }
            this.setState({...this.state, count: --this.state.count})
        }, 1000);
    }
    render() {
        return (
            <div>
            <h1>Hello Timer</h1>
            <h3> {this.state.count} left</h3>
            </div>
        )
    }
}