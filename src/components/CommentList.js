import React from 'react';
import { Comment } from './CommentsContainer';

const CommentList = ({comments}) => {
  return comments.map((comment) => (
    <div>
        <Comment data={comment} />
        <div className='pl-5 border  ml-5 border-l-black'>
            <CommentList comments={comment.replies} />
        </div>
    </div>
))
}

export default CommentList
