// 문자열 관련 유틸 메서드
export class StringUtils {
    public static removeFirstChar(str: string) {
        return str.substring(1);
    }

    // 앞글자만 대문자
    public static capitalizeFirstLetter(str: string) {
        return str
            .trim()
            .split(" ")
            .map(
                (s) =>
                    s.charAt(0).toUpperCase() +
                    s.slice(1).toLowerCase(),
            )
            .join(" ");
    }
}
