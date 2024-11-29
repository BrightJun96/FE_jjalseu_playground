"use client"

// 스토리지 서비스 인터페이스(localStorage, sessionStorage)
// @description 스토리지 관련 로직들을 관리
export interface StorageService {
    save(key: string, value: string): void; // 저장
    remove(key:string):void // 제거
    get(key: string): string | null; // 가져오기
    getParsed<T>(key: string,valueInNullCase:unknown): T | unknown; // 파싱하여 가져오기
}
// 스토리지 서비스 구현 클래스
 export class StorageAdapter implements StorageService {
    private storage: Storage;

    constructor( storage: Storage) {
        this.storage = storage;
    }

    // 저장
    save(key: string, value: string) {
        this.storage.setItem(key, value);
    }

    // 제거
    remove(key: string) {
        this.storage.removeItem(key);
    }

    // 가져오기
    get(key: string): string | null {
        return this.storage.getItem(key);
    }

    // 파싱하여 가져오기
     getParsed<T>(key: string,valueInNullCase:unknown): T | unknown { {
        const value = this.get(key);
        if (value) {
            return JSON.parse(value);
        }
        return valueInNullCase;

     }

    }
}



