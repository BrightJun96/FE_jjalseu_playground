import { StringUtils } from "@/app/_shared/utils/class/StringUtils";
import { Link } from "next-view-transitions";
import React from "react";

interface Menu {
    name: string;
    id: number;
}

function Menus() {
    const menus: Menu[] = [
        { name: "work", id: 1 },
        { name: "tech", id: 2 },

        {
            name: "ability",
            id: 3,
        },
        {
            name: "project",
            id: 4,
        },
    ];

    return (
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
    );
}

export default Menus;
