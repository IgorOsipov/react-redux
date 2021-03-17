import React from 'react';
import Post from './Post';

export default function Posts ({posts}){
    if(!posts.lenght){
        return <p className="text-center">Постов нет</p>
    }
    return posts.map(post=><Post post={post} key={post}/>)
}