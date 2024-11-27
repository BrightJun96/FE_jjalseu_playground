import {useEffect, useState} from 'react';


// 클라이언트 API(window,localStorage 등)를 사용할 때,사용하는 훅
function useIsClient() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return isClient
}

export default useIsClient;
