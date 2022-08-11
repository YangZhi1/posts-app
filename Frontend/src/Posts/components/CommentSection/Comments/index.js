import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState(['comment1', 'comment2']);

  return (
    <div>
      {comments && comments.map((comment, index) => {
        return (
          <p>{comment}</p>
        )
      })}
    </div>
  );
}

export default Comments;
