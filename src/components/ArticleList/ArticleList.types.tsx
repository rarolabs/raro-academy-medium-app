import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types"

export type ArticleListProps = {
  articles: ArticleThumbnailProps[];
  remove?: (id:number) => Promise<void> 
}
