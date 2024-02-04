import notion from "@/utils/notion"
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

type getArticleListProps = {
    category: string
}

export const getArticleList = (props: getArticleListProps):Promise<QueryDatabaseResponse> => {
    const dbId = process.env.NOTION_DB_ID as string;
    const data = notion.databases.query({
        database_id: dbId,
        filter: {
            and: [
                {
                    property: "IS_PUBLISHED",
                    checkbox: {
                        equals: true,
                    }
                },
                {
                    property: "CATEGORY",
                    select: {
                        equals: props.category,
                    }
                }
            ],
        },
        sorts: [
            {
                property: "CREATED_AT",
                direction: "descending"
            }
        ],
    });
    return data;
}