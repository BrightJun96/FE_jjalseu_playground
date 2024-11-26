// 스토리지 서비스 인터페이스(localStorage, sessionStorage)
// @description 스토리지 관련 로직들을 관리
export interface StorageService {
    save(key: string, value: string): void; // 저장
    remove(key:string):void // 제거
}
// 스토리지 서비스 구현 클래스
 class StorageAdapter implements StorageService {
    private storage: Storage;
    constructor( storage: Storage) {
        this.storage = storage;
    }

    save(key: string, value: string) {
        this.storage.setItem(key, value);
    }

    remove(key: string) {
        this.storage.removeItem(key);
    }


}


// 로컬 스토리지 서비스
export const localStorageService = new StorageAdapter(localStorage);

// 세션 스토리지 서비스
export const sessionStorageService = new StorageAdapter(sessionStorage);
