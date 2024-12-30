import PATHS from "@/app/_shared/constants/paths";
import PrimaryLink from "@/app/_shared/ui/used/link/primaryLink";
import Image from "next/image";
import notFoundImage from "../../public/not_found.svg";

export default function NotFound() {
    return (
        <div className="flex w-full h-full flex-col gap-6 items-center justify-center bg-gray-100 text-gray-800">
            {/* 이미지 영역 */}
            <Image
                width={300}
                height={300}
                src={notFoundImage} // 사용할 이미지 경로
                alt="404 Illustration"
                className="w-64 h-auto mb-6"
            />

            {/* 404 텍스트 */}
            <h2 className="mt-4 text-2xl font-semibold">
                페이지를 찾을 수 없습니다
            </h2>
            <p className="mt-2 text-gray-600 text-center">
                요청하신 페이지가 존재하지 않거나 이동되었을
                수 있습니다.
            </p>

            {/* 메인 페이지로 이동 버튼 */}
            <PrimaryLink
                className={"!h-[48px] "}
                href={PATHS.HOME}
            >
                메인 페이지로 이동하기
            </PrimaryLink>
        </div>
    );
}
