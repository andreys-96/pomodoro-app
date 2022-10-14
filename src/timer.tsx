import React, { useState } from "react"
import { useEffect } from "react";
interface Props {
    count: any
}

export const Timer = ({count}: Props) => {
    const [seconds, setCount] = useState<any>(0);
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`10/01/${year}`) - +new Date();
        let timeLeft:{
            [key: string]: number | string
        } = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });
    useEffect(() => setCount(count), [count])
    const countDown = () => {
        const timer = setInterval(() => {            
            if(seconds <= 0) {
                clearTimeout(timer)
                return
            }
            setCount( seconds - 1 )
        }, 1000);
    }

    if(count > 0) {
        countDown()
    }

    

    const getTimer = () => {
        if(!count) return
        let minutes = Math.floor(seconds / 60)
        let left = (seconds - (minutes * 60))
        return `${minutes}:${left}`
    }

    const timerComponents: any[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
        return;
    }

    timerComponents.push(
        <span>
        {timeLeft[interval]} {interval}{" "}
        </span>
    );
    });

    const secondsToTime = (secs = seconds) => {
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
      }

    return (
        <div>
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <div>
        <h1>Hello Timer</h1>
        <h3> Time left: {}</h3>
        </div>
    </div>
    )
}
