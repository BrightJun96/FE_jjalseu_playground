import React, {useEffect, useRef, useState} from 'react';

/**
 * 제한시간
 * @param props
 * @constructor
 */
function Timer({time}:{time:number}) {

    const [limitTime,setLimitTime] = useState<number>(time)
    const timeOverRef =useRef<number>(0)

    /**
     * typescript에서 ReturnType이란 뭐지?
     *
     */

    useEffect(() => {

        const intervalId = window.setInterval(() => {
        setLimitTime((prev) => prev - 1);
    }, 1000);
        timeOverRef.current = intervalId

        return () => {
            clearInterval(intervalId);
        };


    }, []);

    useEffect(() => {
        if (limitTime === 0) {
            clearInterval(timeOverRef.current);
        }
    }, [limitTime]);



    return (
        <div
            className={"flex justify-end"}
        >
                <span
                    className={"text-title2Normal"}
                >제한시간 : {limitTime}초</span>
        </div>
    );
}

export default Timer;
