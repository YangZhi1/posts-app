import React, { useState } from 'react';

const AddComment = () => {
  const [comment, setComment] = useState('');

  const onChangeComment = (e) => {
    setComment(e.target.value);
  }

  return (
    <div>
      <input
        className="comment-box"
        value={comment}
        onChange={onChangeComment}
        placeholder='Add a comment'
      />
    </div>
  );
}

export default AddComment;
