import {
    MultipleChoiceContent,
    QuizType,
} from "@/app/_entities/quiz";

// 퀴즈 응답 타입
export interface QuizItem {
    quizId: number;
    title: string;
    content: string;
    multipleChoiceAnswer: number[];
    subjectiveAnswer: string;
    type: QuizType;
    hint: string;
    explanation: string;
    field: string;
    level: number;
    lang: string;
    time: number;
    multipleChoiceContents: MultipleChoiceContent[];
    metaTitle: string;
    metaDescription: string;
    metaImageUrl: string | null;
    createdAt: string;
    updatedAt: string;
    detailUrl: string; // 상세 URL
}
