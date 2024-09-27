import React, { useState } from 'react';

const LikedDisliked = () => {
  const [liked, setLike] = useState(false);

  const handleLike = () => {
    setLike(!liked);
  };

  return (
    <>
      <div class='w-full min-h-[300px] flex  flex-col justify-center items-center'>
        <button
          onClick={handleLike}
          class={liked ? 'btn btn-success' : 'btn btn-primary'}
        >
          {liked ? 'Dislike' : 'Like'}
        </button>
      </div>
    </>
  );
};

export default LikedDisliked;
