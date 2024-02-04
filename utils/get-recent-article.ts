import notion from "@/utils/notion";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

type getRecentArticleProps = {
    category?: string
}

export const getRecentArticle = (props: getRecentArticleProps):Promise<QueryDatabaseResponse> => {
    const isDefault = typeof props.category != "string"
    const defaultFilter = {
        property: "IS_PUBLISHED",
        checkbox: {
            equals: true,
        }
    }

    const filter = isDefault
        ? defaultFilter
        : {
            and: [
                defaultFilter,
                {
                    property: "CATEGORY",
                    select: {
                        equals: props.category!
                    }
                }
            ],
        }

    const dbId = process.env.NOTION_DB_ID as string;
    const data = notion.databases.query({
        database_id: dbId,
        page_size: 3,
        filter: filter,
        sorts: [
            {
                property: "CREATED_AT",
                direction: "descending"
            }
        ],
    })
    return data;
}