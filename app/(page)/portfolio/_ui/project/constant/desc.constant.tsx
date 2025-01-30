import { javascript } from "@codemirror/lang-javascript";
import ReactCodeMirror from "@uiw/react-codemirror";
import Link from "next/link";
import LiContainer from "../../shared/LiContainer";
import UlContainer from "../../shared/UlContainer";

export interface IDESC {
    id: number;
    title: string;
    content?: React.ReactNode;
}

const codeAboutTransaction =
    "import {\n" +
    "  CallHandler,\n" +
    "  ExecutionContext,\n" +
    "  Injectable,\n" +
    "  NestInterceptor,\n" +
    '} from "@nestjs/common";\n' +
    'import { catchError, Observable, tap } from "rxjs";\n' +
    'import { DataSource } from "typeorm"\n' +
    "@Injectable()\n" +
    "export class TransactionInterceptor\n" +
    "  implements NestInterceptor\n" +
    "{\n" +
    "  constructor(private readonly dataSource: DataSource) {}\n" +
    "  async intercept(\n" +
    "    context: ExecutionContext,\n" +
    "    next: CallHandler<any>,\n" +
    "  ): Promise<Observable<any>> {\n" +
    "    const req = context.switchToHttp().getRequest();\n" +
    "\n" +
    "    const qr = this.dataSource.createQueryRunner();\n" +
    "    await qr.connect();\n" +
    "    await qr.startTransaction();\n" +
    "\n" +
    "    req.queryRunner = qr;\n" +
    "\n" +
    "    return next.handle().pipe(\n" +
    "      catchError(async (e) => {\n" +
    "        await qr.rollbackTransaction();\n" +
    "        await qr.release();\n" +
    "        throw e;\n" +
    "      }),\n" +
    "      tap(async () => {\n" +
    "        await qr.commitTransaction();\n" +
    "        await qr.release();\n" +
    "      }),\n" +
    "    );\n" +
    "  }\n" +
    "}";

const FRONT_DESC: IDESC[] = [
    {
        id: 1,
        title: "페이지 특성별 최적화된 렌더링 전략 설계",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>
                            실시간성과 성능을 균형 있게
                            고려한 렌더링 전환
                        </b>
                        <li>
                            <Link
                                className={
                                    "underline text-gray-600 px-1"
                                }
                                href={
                                    "https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering"
                                }
                            >
                                Dynamic Rendering
                            </Link>
                            방식에서
                            <Link
                                className={
                                    "underline text-gray-600 px-1"
                                }
                                href={
                                    "https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration"
                                }
                            >
                                ISR(Incremental Static
                                Regeneration)
                            </Link>
                            방식으로 전환하여 하루 단위로
                            갱신되는 퀴즈 데이터를 최신화
                        </li>
                        <li>
                            초기 페이지 로딩 속도 개선 및
                            정기 데이터 업데이트 반영을
                            자동화
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>
                            페이지 특성별 맞춤형 렌더링 전략
                            도입
                        </b>
                        <li>
                            사이트 전반의 페이지들을
                            분석하여 SSG(정적 생성),
                            SSR(서버 렌더링), ISR,
                            CSR(클라이언트 렌더링) 등 다양한
                            전략을 상황에 따라 적용
                        </li>

                        <li>
                            고정된 콘텐츠는 SSG, 실시간
                            데이터가 중요한 페이지는 SSR 및
                            ISR을 선택, 클라이언트 중심의
                            상호작용 페이지는 CSR로 설계
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 2,
        title: "검색 엔진 친화적인 웹사이트 설계",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>기본 SEO 요소 강화</b>

                        <li>
                            페이지마다 적절한
                            메타데이터(meta tags),
                            타이틀(title), 설명(description)
                            설정을 통해 검색 결과 가시성
                            극대화
                        </li>
                        <li>
                            robots.txt 파일과 sitemap.xml
                            파일을 생성하여 검색 엔진
                            크롤러의 효율적인 웹사이트 탐색
                            지원
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>URL 구조 최적화</b>

                        <li>
                            URL에 키워드 포함 및 계층적 구조
                            반영으로 가독성과 검색 우선
                            순위를 최적화
                        </li>
                        <li>
                            짧고 의미 있는 URL을 설계하여
                            검색엔진 가독성을 향상시키고
                            사용자 신뢰도를 높임
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>성과 측정 및 검증</b>

                        <li>
                            Google Lighthouse SEO 항목에서
                            100점을 달성하며 최적화 결과를
                            객관적으로 검증
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 3,
        title: "웹 접근성 최적화",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>
                            시맨틱 태그 활용으로 구조적
                            이해도 향상
                        </b>
                        <li>
                            HTML5 시맨틱 태그를 적극
                            활용하여 사용자와 스크린 리더가
                            콘텐츠 구조를 명확히 이해할 수
                            있도록 설계
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>
                            ARIA 속성 설정으로 접근성 강화
                        </b>
                        <li>
                            동적인 인터페이스 요소에 적절한
                            ARIA 속성(role, aria-label,
                            aria-live 등)을 적용하여 시각
                            장애 사용자가 스크린 리더를 통해
                            UI를 효과적으로 탐색할 수 있도록
                            지원
                        </li>
                        <li>
                            중요 알림과 상태 변화를
                            실시간으로 전달하기 위해
                            aria-live 속성을 적용
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>키보드 접근성 최적화</b>
                        <li>
                            키보드 전용 사용자도 모든
                            인터랙티브 UI 요소(button, link,
                            modal 등)에 쉽게 접근 가능하도록
                            TabIndex 및 포커스 관리(focus
                            trap) 적용
                        </li>
                        <li>
                            키보드 탐색 순서를 논리적으로
                            배치하여 사용 편의성 개선
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>성과 검증 및 100점 달성</b>
                        <li>
                            Google Lighthouse의 웹 접근성
                            평가에서 100점을 달성하며, 모든
                            사용자층이 편리하게 이용할 수
                            있는 웹사이트를 구축
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 4,
        title: "클라이언트/서버 컴포넌트 설계",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>컴포넌트 역할에 따른 분리</b>
                        <li>
                            각 UI의 데이터 처리 특성과
                            상호작용 요구사항을 분석하여
                            서버 컴포넌트(Server
                            Component)와 클라이언트
                            컴포넌트(Client Component)를
                            최적화
                        </li>
                        <li>
                            서버 컴포넌트에서 렌더링 가능한
                            정적 데이터는 서버에서 처리하고,
                            상호작용이 필요한 동적 요소는
                            클라이언트 컴포넌트로 구현하여
                            자바스크립트 번들 사이즈를
                            효율적으로 관리
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>
                            네트워크 통신 빈도에 따른 통신
                            위치 결정
                        </b>
                        <li>
                            네트워크 통신이 자주 발생하지
                            않는 경우 서버 컴포넌트를 통해
                            데이터를 처리하여 초기 로딩
                            속도와 성능을 최적화
                        </li>
                        <li>
                            반면, 통신이 자주 발생하거나
                            실시간 데이터가 필요한 경우
                            클라이언트 컴포넌트로 설계하여
                            사용자 경험(UX)을 유연하고
                            빠르게 제공
                        </li>
                    </LiContainer>

                    <LiContainer>
                        <b>성과 및 개선 결과</b>
                        <li>
                            서버와 클라이언트 컴포넌트를
                            최적화함으로써 자바스크립트 번들
                            크기를 감소를 통한 초기 페이지
                            로딩 시간 단축
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 5,
        title: "Lighthouse 지표 기반의 성능 최적화",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>성과 기반의 성능 개선</b>
                        <li>
                            Google Lighthouse의 성능,
                            접근성, 권장사항, SEO 항목에서
                            모두 100점을 달성하며 전반적인
                            웹사이트 품질을 객관적으로 검증
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>렌더링 성능 최적화</b>
                        <li>
                            렌더링 차단 리소스 최적화 및
                            불필요한 리소스 제거를 통해 초기
                            화면 렌더링 속도를 개선
                        </li>
                        <li>
                            주요 성능 지표인 FCP(First
                            Contentful Paint)와 LCP(Largest
                            Contentful Paint) 시간을 각각
                            단축하여 빠른 사용자 경험 제공
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>최신 프로토콜 적용</b>
                        <li>
                            HTTP/1.1에서 HTTP/2.0으로
                            전환하여 리소스 병렬 로딩과 우선
                            순위 처리 개선, 리소스 로드
                            시간을 크게 단축
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>불필요한 리소스 최소화</b>
                        <li>
                            사용되지 않는 CSS, JavaScript
                            제거로 네트워크 대역폭 최적화
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },

    {
        id: 7,
        title: "작고 명확한 컴포넌트 설계",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>컴포넌트 단위 최적화</b>
                        <li>
                            복잡한 UI를 작은 단위의
                            컴포넌트로 분리하여 코드
                            가독성을 향상시키고 유지보수를
                            용이하게 함
                        </li>
                        <li>
                            각 컴포넌트가 단일 책임
                            원칙(Single Responsibility
                            Principle)을 준수하도록 설계
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>컴포넌트의 재사용성 강화</b>
                        <li>
                            프로젝트 전반에서 공통적으로
                            사용되는 UI 요소를 재사용 가능한
                            컴포넌트로 추출
                        </li>
                        <li>
                            다양한 화면에서 동일한 스타일과
                            기능을 유지하면서 중복 코드를
                            최소화
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 8,
        title: "효율적인 에러 처리",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>에러 처리 체계 구축</b>
                        <li>
                            API 통신, 컴포넌트, 비즈니스
                            로직 단위별로 세분화된 에러 처리
                            로직을 구현하여 서비스 안정성을
                            강화
                        </li>
                        <li>
                            예외 상황을 사전에 고려한
                            Try-Catch 블록과 Custom Error
                            객체를 활용하여 코드의 예측
                            가능성을 높임
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>디버깅 효율성 향상</b>
                        <li>
                            에러 발생 시 스택 트레이스(Stack
                            Trace)와 로그를 통해 문제가
                            발생한 코드의 위치와 원인을
                            정확히 추적
                        </li>
                        <li>
                            개발 및 운영 환경에서의 로그
                            수준(Level-based Logging)
                            설정으로 디버깅과 모니터링
                            효율성을 극대화
                        </li>
                    </LiContainer>

                    <LiContainer>
                        <b>프로그램 안정성 강화</b>
                        <li>
                            에러 발생 시 프로그램이 종료되지
                            않고 적절한 대응을 수행하도록
                            설계
                        </li>
                        <li>
                            사용자에게는 에러 상황에 대한
                            명확하고 친화적인 메시지를
                            제공하여 불편을 최소화
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>서비스 UX 향상</b>
                        <li>
                            중요한 기능에서 에러가 발생할
                            경우 Fallback UI 또는 대체
                            흐름(Alternative Flow)을
                            제공하여 서비스 이용 중단을 방지
                        </li>
                        <li>
                            API 통신 실패 시, 재시도 로직과
                            에러 메시지를 표시하여 사용자
                            신뢰도를 유지
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 9,
        title: "책임과 역할 중심의 코드 리팩토링",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>단일 책임 원칙(SRP) 적용</b>
                        <li>
                            코드가 여러 가지 책임을 갖지
                            않도록 역할과 책임을 기준으로
                            분리하여 모듈화
                        </li>
                        <li>
                            비즈니스 로직, 데이터 처리, UI
                            렌더링을 각각 독립된 컴포넌트나
                            함수로 분리하여 유지보수성과
                            확장성을 강화
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>가독성 향상</b>
                        <li>
                            중복된 코드를 제거하고, 함수와
                            변수명을 명확하고 일관성 있게
                            개선하여 협업 과정에서의
                            이해도를 높임
                        </li>
                        <li>
                            코드의 구조를 간소화하여 논리
                            흐름을 쉽게 파악할 수 있도록
                            설계
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
];

const BACK_DESC: IDESC[] = [
    {
        id: 1,
        title: "swagger-typescript-api를 활용하여 swagger 문서기반으로 요청,응답 DTO 타입을 프론트에게 제공하여 프론트의 개발 생산성 향상",
        content: (
            <>
                <UlContainer>
                    <li>
                        요청 DTO,응답 DTO,ENUM 등을
                        swagger에 기록해두고 프론트엔드에서
                        swagger-typescript-api를 활용하여
                        타입들을 활용할 수 있도록 설계
                    </li>
                    <li>
                        프론트에서 API 통신 관련 타입
                        셋팅없이 스웨거 문서 기반 타입을
                        바로 활용하여 프론트 개발 생산성
                        향상
                    </li>
                </UlContainer>
            </>
        ),
    },
    {
        id: 2,
        title: "비대해진 특정 도메인 서비스 코드를 여러 서비스 코드로 분리하여 유지보수 관리 향상",
        content: (
            <>
                <UlContainer>
                    <li>
                        도메인의 서비스 코드가 길어짐에 따라
                        도메인 내부에서 목적에 맞게 여러
                        서비스 파일로 분리
                    </li>
                    <li>
                        서비스 코드 분리에 따른 코드
                        가독성과 유지보수성 향상
                    </li>
                </UlContainer>
            </>
        ),
    },
    {
        id: 3,
        title: "interceptor를 통해 응답 데이터 커스텀",
        content: (
            <>
                <UlContainer>
                    <li>
                        응답 데이터를 커스텀하여 일관된 응답
                        형식 제공 및 응답 구조 확장
                    </li>
                </UlContainer>
            </>
        ),
    },

    {
        id: 5,
        title: "interceptor를 통해 transaction이 필요한 API가 사용하도록 설계",
        content: (
            <>
                <ReactCodeMirror
                    theme={"dark"}
                    value={codeAboutTransaction}
                    extensions={[javascript({ jsx: true })]}
                />
                <p></p>
                <UlContainer>
                    <LiContainer>
                        <b>
                            트랜잭션 관리의 중앙화 및 간소화
                        </b>
                        <li>
                            Interceptor를 통해 공통된
                            트랜잭션 처리를 중앙에서
                            일괄적으로 관리
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>코드 재사용성 향상</b>
                        <li>
                            여러 API에서 공통적으로 사용할
                            수 있는 구조를 제공
                        </li>
                        <li>
                            코드 중복 제공과 유지보수성 향상
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>
                            API 수준에서 유연한 트랜잭션
                            활용 가능
                        </b>
                        <li>
                            Interceptor를 원하는 API
                            핸들러에만 적용
                        </li>
                        <li>
                            트랜잭션이 필요한 요청에서만
                            사용
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>데이터 무결성 보장</b>
                        <li>
                            여러 개의 데이터베이스 연산 중
                            하나라도 실패하면 모든 연산이
                            rollback되어 데이터의 불완전한
                            상태를 방지
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 6,
        title: "클라이언트에게 S3 presignedurl 제공하여 파일 업로드",
        content: (
            <>
                <p> </p>
                <UlContainer>
                    <LiContainer>
                        <b>
                            presignedurl 제공하는 API 설계
                        </b>
                        <li>
                            클라이언트에게 해당 API를 통해
                            파일 업로드
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>서버 부하 감소</b>
                        <li>
                            서버에 직접 파일을 저장할
                            필요없으므로 서버 자원의 사용
                            감소
                        </li>
                        <li>
                            클라이언트와 서버와의 네트워크
                            비용 감소
                        </li>
                        <li>서버 트래픽 비용 감소</li>
                    </LiContainer>
                    <LiContainer>
                        <b>서버 확장 용이</b>
                        <li>
                            클라우드에 리소스를
                            업로드함으로써 오토스케일링에
                            용이
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>보안 강화</b>
                        <li>
                            만료 시간 설정과 파일 업로드
                            경로를 제한함으로써 보안 강화
                        </li>
                        <li>
                            트랜잭션이 필요한 요청에서만
                            사용
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>데이터 무결성 보장</b>
                        <li>
                            여러 개의 데이터베이스 연산 중
                            하나라도 실패하면 모든 연산이
                            rollback되어 데이터의 불완전한
                            상태를 방지
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 7,
        title: "커서 페이지네이션 방식으로 페이지 페이지네이션 제한성 극복",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>
                            데이터가 추가/삭제되어도 일관성
                            유지
                        </b>
                        <li>
                            데이터가 추가되거나 삭제되더라도
                            이전에 가져온 데이터와 중복이나
                            누락 없이 다음 데이터 확보
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>클라이언트의 간결한 API 요청</b>
                        <li>
                            클라이언트는 단순히 커서 값만
                            저장하고 요청
                        </li>
                        <li>
                            페이지 번호 관리가 필요하지 않아
                            클라이언트 구현이 간단
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 8,
        title: "refresh 토큰을 활용한 보안 강화",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <li>
                            access 토큰의 만료 주기를
                            5분으로 설정
                        </li>
                        <li>
                            refresh 토큰을 통하여 access
                            토큰 재발급
                        </li>
                        <li>
                            access 토큰 만료 주기를 짧게
                            가져감으로써 보안 강화
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 9,
        title: "swagger API 문서 작성",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <li>API 스펙 확인</li>
                        <li>
                            요청,응답 DTO,ENUM 타입 등을
                            swagger에 등록
                        </li>
                        <li>
                            프론트에서
                            swagger-typescript-api를
                            활용하여 API 통신에 필요한 타입
                            제공
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 10,
        title: "Bull과 Redis를 활용하여 오래 걸리는 작업을 큐에서 작업하여 요청/응답시간 절약",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>
                            오래 걸리는 작업을 큐에서 처리
                        </b>
                        <li>
                            큐를 사용하여 오래 걸리는 작업을
                            백그라운드에서 처리하여 메인
                            스레드가 빠르게 API 요청을 처리
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>작업 처리량 확대</b>
                        <li>
                            워커 노드를 통해 병렬로 실행할
                            수 있어 작업 처리량 확대
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 11,
        title: "Redis를 통한 캐싱 처리",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>빠른 데이터 액세스</b>
                        <li>
                            메모리 기반 데이터 스토리지인
                            Redis를 활용하여 데이터 읽기 및
                            쓰기 속도 향상
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>DB 부하 감소</b>
                        <li>
                            자주 사용되는 데이터를 캐싱하여
                            데이터베이스 또는 API 호출을
                            최소화
                        </li>
                    </LiContainer>

                    <LiContainer>
                        <b>서버 확장성 용이</b>
                        <li>
                            다수의 서버에서 동일한 캐시
                            데이터를 공유할 수 있어 분산
                            시스템 구축에 유리한 환경 구축
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 12,
        title: "RBAC과 커스텀 데코레이터를 통한 클라이언트 권한 부여",
    },
];

const DEV_OPS_DESC: IDESC[] = [
    {
        id: 1,
        title: "Front-End > 배포 및 파이프라인 설계",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>
                            EC2와 Github action을 이용한
                            배포 파이프라인 설계
                        </b>
                        <li>
                            AWS ec2에 next.js 애플리케이션
                            배포
                        </li>
                        <li>
                            github action을 사용하여 main
                            브랜치에 PR이 되면 자동으로
                            인스턴스에 배포가 되도록 배포
                            파이프라인 설계
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>nginx</b>
                        <li>
                            도메인으로 80포트나 443포트로
                            요청을 받으면 3000 포트로 포트
                            포워딩
                        </li>
                        <li>
                            SSL 인증서를 설치하여 HTTPS를
                            제공
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>AWS API Gateway</b>
                        <li>
                            외부 요청을 받아 내부적으로 EC2
                            인스턴스 엔드포인트로 전달
                        </li>
                        <li>
                            도메인 이름과 백엔드 EC2
                            인스턴스 간의 매핑
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 2,
        title: "Back-End > 도커와 Github Action를 활용한 CI/CD 파이프라인 구축",
        content: (
            <>
                <UlContainer>
                    <LiContainer>
                        <b>도커를 배포 파이프라인</b>
                        <li>
                            main 브랜치에 푸시되면 배포
                            파이프라인 시작
                        </li>
                        <li>
                            애플리케이션 도커 이미지로 빌드
                        </li>
                        <li>
                            빌드된 이미지를 도커헙에 푸시
                        </li>
                        <li>
                            푸시된 이미지를 인스턴스에서
                            실행
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>환경 일관성 보장</b>
                        <li>
                            어디서 실행하든 동일한 환경을
                            보장
                        </li>
                        <li>
                            로컬 개발 환경과 서버 환경이
                            다를 경우 발생할 수 있는 문제를
                            방지
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>빠른 배포</b>
                        <li>
                            미리 빌드된 이미지를
                            실행함으로써 배포 속도 향상
                        </li>
                    </LiContainer>
                    <LiContainer>
                        <b>인스턴스 리소스 절약</b>
                        <li>
                            인스턴스에서 불필요한 종속성
                            설치와 빌드로 인해 발생하는
                            CPU/메모리 리소스 낭비를 방지
                        </li>
                        <li>
                            빌드와 실행이 분리되어 있으므로
                            서버 리소스를 효율적으로 사용
                        </li>
                    </LiContainer>
                </UlContainer>
            </>
        ),
    },
    {
        id: 3,
        title: "사진 및 동영상 등 파일 S3에 업로드",
    },
];

export const Desc = {
    FRONT_DESC,
    BACK_DESC,
    DEV_OPS_DESC,
};
