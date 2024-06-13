import { notFound } from "next/navigation"
import { posts } from "#site/content"

import { MDXContent } from "@/components/shared/MDXContent"
import Tag from "@/components/shared/Tag"

import "../../../styles/mdx.css"

interface Props {
  params: {
    slug: string[]
  }
}

export default function PostPage({ params }: Props) {
  const slug = params.slug.join("/")

  const post = posts.find((post) => post.slugAsParams === slug)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="container prose mx-auto max-w-3xl py-6 dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      <div className="mb-2 flex gap-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="mt-0 text-xl text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  )
}
