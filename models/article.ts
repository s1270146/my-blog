import { NotionText } from "@/models/notion-type/notion-text";
import { NotionCheckbox } from "@/models/notion-type/notion-checkbox";
import { NotionDate } from "@/models/notion-type/notion-date";
import { NotionSelect } from "@/models/notion-type/notion-select";
import { NotionMultiselect } from "@/models/notion-type/notion-multiselect";
import { NotionRichtext } from "./notion-type/notion-richtext";


type ArticleProperties = {
    IS_PUBLISHED: NotionCheckbox,
    UPDATED_AT: NotionDate,
    CREATED_AT: NotionDate,
    TAG: NotionMultiselect,
    CATEGORY: NotionSelect,
    TITLE: {
        id: string,
        type: string,
        title: NotionText[]
    },
    DESCRIPTION: NotionRichtext
}

type ArticleColumns = {
    id: string,
    properties: ArticleProperties,
    cover?: {
        external:{
            url: string
        }
    }
}

export class Article {
    isPublished: boolean;
    updatedAt: string;
    createdAt: string;
    tag: string[];
    category: string;
    title: string;
    id: string;
    imgUrl: string;
    description: string;

    constructor(props: {
        isPublished: boolean,
        updatedAt: string,
        createdAt: string,
        tag: string[],
        category: string,
        title: string,
        id: string,
        imgUrl: string,
        description: string
    }) {
        this.isPublished = props.isPublished;
        this.updatedAt = props.updatedAt;
        this.createdAt = props.createdAt;
        this.tag = props.tag;
        this.category = props.category;
        this.title = props.title;
        this.id = props.id;
        this.imgUrl = props.imgUrl;
        this.description = props.description;
    }

    static fromNotion(obj: Object): Article {
        const data = obj as ArticleColumns;
        return new Article({
            isPublished: data.properties.IS_PUBLISHED.checkbox,
            updatedAt: data.properties.UPDATED_AT.date!=null
            ? data.properties.UPDATED_AT.date.start
            : ""
            ,
            createdAt: data.properties.CREATED_AT.date.start,
            tag: data.properties.TAG.multi_select.map(value=>value.name),
            category: data.properties.CATEGORY.select.name,
            title: data.properties.TITLE.title[0].plain_text,
            id: data.id,
            imgUrl: typeof data.cover!=='undefined' ? data.cover?.external.url : '',
            description: data.properties.DESCRIPTION.rich_text.map(value=>value.plain_text).join()
        });
    }
}