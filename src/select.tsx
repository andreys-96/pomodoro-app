import React from "react"
type Props  = {
    setTimer(value: any): void
}
type State = {
    hours: string,
    minutes: string
}



export class Select extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            hours: '',
            minutes: '',
        }
    }    
    triggerCount = () => {
        let val = 0
        val = this.state.hours.length ? (parseInt(this.state.hours) * 60) : 0 + this.state.minutes.length ? parseInt(this.state.minutes) : 30
        this.props.setTimer(val * 60)
    }
    render(): React.ReactNode {
        return (
            <div>
                <input 
                    type="number" 
                    id="hours" 
                    value={this.state.hours}
                    onChange={(e) => {this.setState({ hours: e.target.value })}}
                    />
                <input 
                    type="number" 
                    id="minutes" 
                    defaultValue={30} 
                    onChange={(e) => this.setState({minutes: e.target.value})}
                    />
                <button
                onClick={this.triggerCount}
                >Confirm</button>
            </div>
        )   
    }
}