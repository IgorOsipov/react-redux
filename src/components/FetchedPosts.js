import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';

export default function FetchedPosts (){
   
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)

    if(!posts.length){
        return (
            <div>
                <Button onClick={()=>dispatch(fetchPosts())} variant="primary">Добавить пост</Button>
            </div>
        )
    }
    
    return posts.map(post=><Post post={post} key={post.id}/>)
}