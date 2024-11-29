
// 배열 관련 유틸리티 함수
export class ArrayUtils{
    // 배열에서 랜덤하게 하나를 뽑아 반환
    static pickRandomOne<T>(arr: T[]): T {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    // 두 배열을 비교하여,A배열 기준으로 B배열 요소를 제외한 배열을 반환
    static getDifference<T>(arrA: T[], arrB: T[]): T[] {
        return arrA.filter((a) => !arrB.includes(a));
    }

    // 배열 길이가 0일 때, 특정 함수를 실행
    static isEmpty<T>(arr: T[]): boolean {
      return arr.length === 0;
    }

    // 두 배열을 비교하여, 두 배열의 length가 같은지 비교
    static isEqualLength<T>(arrA: T[], arrB: T[]): boolean {
      return arrA.length === arrB.length;
    }

}
