import UlContainer from "@/app/(page)/portfolio/_ui/shared/UlContainer";

export interface IDESC {
    id: number;
    title: string;
    content: string;
    desc?: React.ReactNode;
}

export const Career_Desc: IDESC[] = [
    {
        id: 1,
        title: "다수 웹 프로젝트 개발",
        content:
            "React,Nextjs를 사용하여 십여개 이상의 프로젝트 개발",
        desc: (
            <>
                <UlContainer>
                    <li>
                        React,Nextjs를 사용하여 십여개
                        이상의 프로젝트 개발
                    </li>
                    <li>
                        E-commerce,커뮤니티,AI,HR,관리자 등
                        여러 도메인에 대한 프로젝트 경험
                    </li>
                </UlContainer>
            </>
        ),
    },
    {
        id: 2,
        title: "공통 컴포넌트 제작",
        content:
            "공통 컴포넌트 설계를 통해 프로젝트 진행 속도 향상",
        desc: (
            <>
                <UlContainer>
                    <li>
                        사내 여러 프로젝트에 활용할 수 있는
                        공통 컴포넌트를 구성하여 프로젝트
                        초기 설정 시 사용
                    </li>
                    <li>
                        미리 준비된 컴포넌트를 사용함으로써
                        다른 프로젝트의 개발 시간을 절약하고
                        전반적인 프로젝트 진행 속도를 향상
                    </li>
                    <li>
                        프로젝트에서 공통적인 UI 요소가
                        페이지마다 같은 코드가 반복되는
                        경우, 해당 부분을 공통 컴포넌트로
                        설계
                    </li>
                </UlContainer>
            </>
        ),
    },
    {
        id: 3,
        title: "프로젝트 템플릿 개발",
        content:
            "공통 템플릿 제작을 통한 프로젝트 진행 속도 향상",
        desc: (
            <>
                <UlContainer>
                    <li>
                        github에서 프로젝트 템플릿을 만들어
                        사내 프로젝트를 시작할 때, 해당
                        템플릿을 사용
                    </li>
                    <li>
                        디렉터리 구조, 공통 컴포넌트 셋팅,
                        API 통신 설정, 회사의 기술 스택에
                        필요한 라이브러리 설치 등
                        프로젝트에서 공통으로 필요한
                        요소들을 설정
                    </li>
                </UlContainer>
            </>
        ),
    },
    {
        id: 4,
        title: " 회원 인증 방식을 개선하여 프로젝트 보안 강화",
        content: "refresh 토큰과 쿠키를 활용",
        desc: (
            <>
                <UlContainer>
                    <li>access 토큰 만료시간 짧게 설정</li>
                    <li>
                        access 토큰 HttpOnly,
                        SameSite=Strict 쿠키에 보관
                    </li>
                    <li>
                        access 토큰이 만료되면 refresh
                        토큰을 통해 재발급
                    </li>
                    <li>XSS와 CSRF에 대한 보안 강화</li>
                </UlContainer>
            </>
        ),
    },
];
