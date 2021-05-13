import React from 'react'
import post from '../data/post'
import {Link} from 'react-router-dom'

const Blog = () => {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {
                    post.map((item, id) => (
                        
                        <li key={item.id}>
                            <Link to={`/content-post/${item.id}`} >{item.titulo}</Link>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}


export default Blog;