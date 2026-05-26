import React from 'react'
import Link from "next/link";

const blogs=[
    {slug:"nextjs",title:"NextJs Basic"},
    {slug:"react",title:"ReactJS Basic"},
    {slug:"node",title:"NodeJS Basic"}
]


const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {
            blogs.map((blog)=>(
                <li key={blog.slug}>
                    <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                    </Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default BlogPage
