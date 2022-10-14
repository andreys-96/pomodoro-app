import React from "react";
import { Select } from "./select";
import { Timer } from "./timer";

export class MainScreen extends React.Component {
    state = {
        value: 0
    }
    setTimer = (childData: any) => {
        this.setState({value: childData})
    }
    render() {
        return (
            <div className="widget-screen">
                <Select setTimer = {this.setTimer}/>
                <Timer count = {this.state.value} />
            </div>
        )
    }
}