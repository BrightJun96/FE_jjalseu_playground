
// 배열 관련 유틸리티 함수
export class ArrayUtils{
    // 배열에서 랜덤하게 하나를 뽑아 반환
    static pickRandomOne<T>(arr: T[]): T {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
}
