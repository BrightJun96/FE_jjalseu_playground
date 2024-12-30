import HomeInnerContainer from "@/app/(page)/_ui/homeInnerContainer";
import HomeLink from "@/app/(page)/_ui/homeLink";
import HomeOuterContainer from "@/app/(page)/_ui/homeOuterContainer";
import HomeSubTitle from "@/app/(page)/_ui/homeSubTitle";
import HomeTitle from "@/app/(page)/_ui/homeTitle";

/**
 * 메인 페이지
 * SSG
 */
export const dynamic = "force-static";

export default function Home() {
    return (
        <HomeOuterContainer>
            {/* 내부 카피 컨텐츠  */}
            <HomeInnerContainer>
                {/* 메인 타이틀 */}
                <HomeTitle
                    title={"개발자들의 아지트, 코아"}
                />
                {/* 부제목 */}
                <HomeSubTitle
                    subTitle={
                        "퀴즈로 실력을 키우고, 함께 성장하세요."
                    }
                />
                {/* 메인 링크  */}
                <HomeLink />
            </HomeInnerContainer>
        </HomeOuterContainer>
    );
}
