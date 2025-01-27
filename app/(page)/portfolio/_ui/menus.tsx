import { StringUtils } from "@/app/_shared/utils/class/StringUtils";
import { Link } from "next-view-transitions";
import React from "react";

interface Menu {
    name: string;
    id: number;
}

function Menus() {
    const menus: Menu[] = [
        { name: "career", id: 1 },
        { name: "tech", id: 2 },

        {
            name: "project",
            id: 3,
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
