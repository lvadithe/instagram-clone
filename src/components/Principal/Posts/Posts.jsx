import React, { useEffect, useState } from 'react'
import { db } from '../../../FireBase/firebase';
import Post from '../Post/Post';
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div>
            {
                posts.length > 0 ? (
                    posts.map((post, id) => {
                        return <Post
                            key={id}
                            username={post.username}
                            caption={post.caption}
                            imageUrl={post.imageUrl}
                        />
                    })
                ) : (
                    <div>No posts</div>
                )
            }
        </div>
    )
}

export default Posts