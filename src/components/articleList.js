import React from "react"
import { Link } from "gatsby"

import { 
    articleListContainer, 
    articleItemContainer, 
    articleItems, 
    articleListItem,
    articleListItem_content,
    articleListHeader,
    articleLatestHeader
} from './articleList.module.css';

export function ArticleList({ articles }) {
    return (
        <div className={articleListContainer}>
            <span className={ articleLatestHeader }>Latest</span>
            <div className={articleItemContainer}>
                <div className={articleItems}>
                    { articles.map(article => 
                        <ArticleListItem article={article} />
                    )}
                </div>
            </div>
        </div>
    )
}

function ArticleListItem({ article }) {
    return (
        <Link className={articleListItem} to={ `articles/${article.slug}` } key={ article.id }>
                <span>@read_article</span>
                <span>{ article.title }</span>
                <span>{ article.subtitle }</span>
        </Link>
    )
}