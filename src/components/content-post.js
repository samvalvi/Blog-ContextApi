import React from 'react'
import post from '../data/post'
import {useParams, Redirect} from 'react-router-dom'

const ContentPost = () => {
    const {id} = useParams();

    return (
        <div>
            {post[id-1] ?
                <div>
                    <h1>{post[id-1].titulo}</h1>
                    <p>{post[id-1].texto}</p>
                </div>
                :
                <Redirect to="/blog" />
            }
        </div>
    )
}

export default ContentPost;
