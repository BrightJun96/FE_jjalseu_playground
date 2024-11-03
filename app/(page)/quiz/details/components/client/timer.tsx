import React, { useEffect, useRef, useState } from 'react';

/**
 * 제한시간
 */
function Timer({ time }: { time: number }) {
    // 서버에서 렌더링할 때는 기본값으로 time을 사용
    const [limitTime, setLimitTime] = useState<number>(time);
    // 클라이언트 렌더링 여부 확인
    const [isMounted, setIsMounted] = useState(false);

    // 타이머 ID 저장하기 위한 값
    const timeOverRef = useRef<number | null>(null);

    // 클라이언트 측에서만 실행: LocalStorage에서 제한시간 가져오기
    useEffect(() => {
        setIsMounted(true); // 컴포넌트가 마운트된 후 클라이언트 렌더링임을 표시

        const storedTime = localStorage.getItem('limitTime');
        if (storedTime) {
            setLimitTime(parseInt(storedTime, 10));
        }
    }, []);

    // 제한시간 Interval 설정 및 타이머 ID 저장
    useEffect(() => {
        if (!isMounted) return; // 클라이언트에서만 타이머 설정

        const intervalId = window.setInterval(() => {
            setLimitTime((prev) => prev - 1);
        }, 1000);
        // 타이머 ID 저장
        timeOverRef.current = intervalId;

        // 컴포넌트가 언마운트될 때 타이머 종료
        return () => {
            clearInterval(intervalId);
        };
    }, [isMounted]);

    // 제한시간이 0이 되면 타이머 종료
    useEffect(() => {
        if (timeOverRef.current && limitTime === 0) {
            clearInterval(timeOverRef.current);
            localStorage.removeItem('limitTime'); // 제한시간이 끝나면 LocalStorage에서 제거
        }
    }, [limitTime]);

    // 로컬스토리지에 제한시간 저장(새로고침 시 제한시간 초기화 방지)
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('limitTime', limitTime.toString());
        }
        return () => {
            localStorage.removeItem('limitTime');
        }
    }, [limitTime, isMounted]);

    return (
        <div className={"flex justify-end"}>
            <span className={"text-title2Normal"}>제한시간 : {limitTime}초</span>
        </div>
    );
}

export default Timer;
