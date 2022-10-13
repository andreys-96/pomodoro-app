import React, { useState } from "react"

export const Timer = ( {count}: any) => {
    const [num, setCount] = useState(count);
    const countDown = () => {
        const timer = setInterval(() => {
            if(num <= 0) {
                clearTimeout(timer)
            }
            setCount( num-1 )
        }, 1000);
    }
    countDown()
    
    return (
        <div>
        <h1>Hello Timer</h1>
        <h3> {num} left</h3>
        </div>
    )
}
