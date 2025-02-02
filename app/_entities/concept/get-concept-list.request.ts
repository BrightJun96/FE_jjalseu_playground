import { Field } from "@/app/_entities/concept/enum/field.enum";
import { Tech } from "@/app/_entities/concept/enum/tech.enum";

export interface GetConceptListRequest {
    field?: Field;
    tech?: Tech;
}
