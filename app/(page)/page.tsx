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
                <HomeTitle>개발 핸드북</HomeTitle>
                {/* 부제목 */}
                <HomeSubTitle>
                    퀴즈, 코드 템플릿, 개념, 면접 등<br />
                    여러 개발 지식들을 구경하세요.
                </HomeSubTitle>
                {/* 메인 링크  */}
                <HomeLink />
            </HomeInnerContainer>
        </HomeOuterContainer>
    );
}
