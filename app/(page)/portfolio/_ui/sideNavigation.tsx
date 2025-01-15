import { StringUtils } from "@/app/_shared/utils/class/StringUtils";
import { Link } from "next-view-transitions";
import React from "react";

interface Menu {
    name: string;
    id: number;
}

/**
 * 사이드 네비게이션
 */
function SideNavigation() {
    const menus: Menu[] = [
        { name: "profile", id: 1 },
        { name: "tech", id: 2 },

        {
            name: "work",
            id: 3,
        },
        {
            name: "project",
            id: 4,
        },
        {
            name: "ability",
            id: 5,
        },
    ];

    return (
        <aside
            className={
                "lg:w-[15%] bg-orange-100 h-full pt-[50px] fixed top-0 left-0"
            }
        >
            <nav>
                <ul
                    className={
                        "flex flex-col gap-5 items-center"
                    }
                >
                    {menus.map((m) => (
                        <li
                            className={"text-title1"}
                            key={m.id}
                        >
                            <Link href={`#${m.name}`}>
                                {StringUtils.capitalizeFirstLetter(
                                    m.name,
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default SideNavigation;
