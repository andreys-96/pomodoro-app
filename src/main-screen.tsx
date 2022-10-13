import React from "react";
import { Timer } from "./timer";
export class MainScreen extends React.Component {
    render() {
        return (
            <div className="widget-screen">
                <Timer count='100' />
            </div>
        )
    }
}