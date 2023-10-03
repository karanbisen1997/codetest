import React from 'react'

const BlogCard = ({item}) => {
  return (
    <div className='gird-col-4 bg-gray-200 mx-2 my-2'>
    <h1>{item.id}</h1>
    <h1>{item.title}</h1>
    <p>{item.body}</p>
    </div>
  )
}

export default BlogCard
