// 유효성 검사 조건들입니다.
export const validationConditions = {
  onlyKorean: /^[가-힣]*$/, // 한글이어야하고 자음,모음만 있으면 안됩니다.
  letter: /[ㄱ-ㅎㅏ-ㅣ]/, // 자음,모음만 있는 경우 , 유효성 검사를 합니다.(숫자,영어,특수문자 허용)
  emailRegex: /^[^\s@]+@(?!.*\.\.)[^.@\s]+\.[^@\s]+$/,
  emailAvailableLetterType: /^[a-zA-Z0-9._@-]+$/,
  phone: /^\d{1,11}$/,
  // 숫자만
  onlyNumber: /[0-9]/,
  // 영어만
  onlyEnglish: /[a-zA_Z]/,
  // URL 형식 검사
  urlRegex: /^(ftp|http|https):\/\/[^ "]+$/,
};
