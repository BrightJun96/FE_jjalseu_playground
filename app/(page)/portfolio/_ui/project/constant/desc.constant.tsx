export interface IDESC {
    id: number;
    title: string;
    content?: React.ReactNode;
}

const FRONT_DESC: IDESC[] = [
    {
        id: 1,
        title: "페이지별 최적화된 렌더링 전략 설계",
        content: (
            <>
                <ul className={"list-disc"}>
                    <li>
                        Dynamic Rendering 방식에서
                        ISR(Incremental Static Regeneration)
                        방식으로 전환하여 하루 단위로
                        갱신되는 퀴즈 데이터를 최신화
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 2,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 3,
        title: "효율적인 컴포넌트 설계로 성능 및 사용자 경험 극대화",
    },
    {
        id: 4,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 5,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 6,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 7,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 8,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 9,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 10,
        title: "컴포넌트 역할에 따른 분리",
    },
];

const BACK_DESC = [
    {
        id: 1,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 2,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 3,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 4,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 5,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 6,
        title: "컴포넌트 역할에 따른 분리",
    },
    {
        id: 7,
        title: "컴포넌트 역할에 따른 분리",
    },
];

export const Desc = {
    FRONT_DESC,
    BACK_DESC,
};
