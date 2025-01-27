interface ITech {
    id: number;
    tech: string;
    chipColor:
        | "default"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger";
}

export const Techs: ITech[] = [
    {
        id: 1,
        tech: "next.js",
        chipColor: "warning",
    },
    {
        id: 2,
        tech: "tailwind css",
        chipColor: "warning",
    },
    {
        id: 3,
        tech: "typescript",
        chipColor: "warning",
    },
    {
        id: 4,
        tech: "nest.js",
        chipColor: "default",
    },
    {
        id: 5,
        tech: "typeorm",
        chipColor: "default",
    },
    {
        id: 6,
        tech: "postgresql",
        chipColor: "default",
    },
    {
        id: 7,
        tech: "docker",
        chipColor: "success",
    },
    {
        id: 8,
        tech: "ec2",
        chipColor: "success",
    },
    {
        id: 9,
        tech: "s3",
        chipColor: "success",
    },
    {
        id: 10,
        tech: "rds",
        chipColor: "success",
    },
    {
        id: 11,
        tech: "Github Actions",
        chipColor: "success",
    },
    {
        id: 12,
        tech: "redis",
        chipColor: "success",
    },
];
