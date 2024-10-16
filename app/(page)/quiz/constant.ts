// 분야 옵션
export const FIELD_OPTIONS = [
    {text: '프론트엔드', value: 'frontend'},
    // {text: '백엔드', value: 'backend'},
    // {text: '웹개발', value: 'web'},
];
// 언어 옵션
export const LANGUAGE_OPTIONS = [
    {text:"전체",value:"all"},
    {text:"HTML",value:"html"},
    {text:"CSS",value:"css"},
    {text: '자바스크립트', value: 'javascript'},
    {text:"타입스크립트",value:"typescript"},
    {text:"리액트",value:"react"},
    {text:"Next.js",value:"nextjs"},

    // {text: '자바', value: 'java'},
]

// 문제 난이도 옵션
export const LEVEL_OPTIONS = [
    {text: '쉬움', value: 1},
    {text: '보통', value: 2},
    {text: '어려움', value: 3},
];

// 문제 타입 옵션
export const TYPE_OPTIONS = [
    {text: '객관식', value: 'MULTIPLE_CHOICE'},
    {text: '주관식', value: 'SUBJECTIVE'},
];

// 중복 선택 여부 옵션
export const DUPLICATE_OPTIONS = [
    {text: '가능', value: true},
    {text: '불가능', value: false},
];
