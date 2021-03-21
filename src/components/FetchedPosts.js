import { Button } from 'react-bootstrap';
import React from 'react';

export default function FetchedPosts ({posts}){
   
    if(!posts.lenght){
        
    }
    
    return (
        <div>
            <Button variant="primary">Добавить пост</Button>
        </div>
    )
}