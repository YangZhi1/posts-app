import React from 'react';
import AddComment from './AddComment';
import Comments from './Comments';

const CommentSection = () => {
  return (
    <div>
      <AddComment />
      <Comments />
    </div>
  );
}

export default CommentSection;
