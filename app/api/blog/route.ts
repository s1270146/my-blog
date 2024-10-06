import { corsHeaders } from "@/constants/api";
import { Article } from "@/models/article";
import { getRecentArticle } from "@/utils/get-recent-article";
import { NextResponse } from "next/server";

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET() {
    const pageRes = await getRecentArticle({});
    const articles: Article[] = [];
    for (const article of pageRes.results) {
        articles.push(Article.fromNotion(article));
    }

    return NextResponse.json(
        { articles: articles, },
        { status: 200, headers: corsHeaders }
    );
}