import { MetaTags } from '@redwoodjs/web'
import Article from 'src/components/ArticleCell/ArticleCell'
const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <Article id={id} />
    </>
  )
}

export default ArticlePage
