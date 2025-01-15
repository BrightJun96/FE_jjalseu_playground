import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

/**
 * 깃헙,블로그,이메일 정보
 */
function Infos() {
    return (
        <nav
            className={
                "flex flex-col gap-5 justify-center items-center"
            }
        >
            <div
                className={
                    "flex gap-5 justify-center items-center"
                }
            >
                <Link
                    href={"https://github.com/BrightJun96"}
                >
                    <Image
                        width={50}
                        height={50}
                        src={"/github-mark.png"}
                        alt={
                            "github icon from https://www.flaticon.com/kr/free-icons"
                        }
                    />
                </Link>
                <Link
                    href={
                        "https://velog.io/@kcj_dev96/posts"
                    }
                >
                    <Image
                        width={50}
                        height={50}
                        src={"/blog-mark.png"}
                        alt={
                            "blog-icon from https://www.flaticon.com/kr/free-icons"
                        }
                    />
                </Link>
            </div>
            <div
            // className={
            //     "flex flex-col justify-center items-center"
            // }
            >
                <span className={"font-bold"}>
                    Contact:
                </span>
                <address>
                    <Link
                        className={"underline"}
                        href={"mailto:cjfwns966@gmail.com"}
                    >
                        cjfwns966@gmail.com
                    </Link>
                </address>
            </div>
        </nav>
    );
}

export default Infos;
