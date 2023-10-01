import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../Components";
import databaseService from "../appwrite/Config";
const AllPost = async () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  const response = await databaseService.getPosts([]);
  const data = await response.json();
  if (data.posts) {
    setPosts(data.documents);
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) => {
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
