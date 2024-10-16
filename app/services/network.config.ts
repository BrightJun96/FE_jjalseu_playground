import {CustomRequestInit, IResponse} from "@/app/services/network.types";



async function networkInstance(endpoint: string, options?: CustomRequestInit):Promise<IResponse<unknown>>{

    if(!process.env.NEXT_PUBLIC_API_ENDPOINT){
        throw new Error("ENV 파일을 찾을 수 없거나 관련 변수가 없습니다.")
    }


    // queryString이 있을 경우, queryString을 붙여준다.
    const processedEndpoint = options?.queryString && Object.keys(options.queryString).length > 0 ? `${endpoint}?${new URLSearchParams(options.queryString).toString()}` : endpoint;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${processedEndpoint}`, {
      headers:{
            'Content-Type': 'application/json',
          ...options?.headers
      }
      ,...options})
    if(!response.ok){
        throw new Error(`Network response was not ok. status: ${response.status}`);
    }

    return response.json();
}

export default networkInstance;
