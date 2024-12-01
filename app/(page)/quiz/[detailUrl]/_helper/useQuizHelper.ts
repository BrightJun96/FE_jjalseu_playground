import {QuizHelper} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizHelper";
import {QuizLogicHandler} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizLogicHandler";
import {QuizNavigator} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizNavigator";
import {QuizStorageManager} from "@/app/(page)/quiz/[detailUrl]/_helper/QuizStoreManager";
import {StorageAdapter} from "@/app/_utils/StorageService";
import {useRouter} from "next/navigation";

export function useQuizHelper() {
    const router = useRouter();

    const storageManager = new QuizStorageManager(new StorageAdapter(localStorage));
    const navigator = new QuizNavigator((path) => router.push(path));
    const logicHandler = new QuizLogicHandler(storageManager);

    return new QuizHelper(storageManager, navigator, logicHandler);
}
