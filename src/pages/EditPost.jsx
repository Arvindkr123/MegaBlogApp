import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../Components";
import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/Config";

const EditPost = () => {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) {
          setPosts(posts);
        }
      });
    } else {
      navigate("/");
    }
  }, [navigate, slug]);

  return posts ? (
    <div className="py-8">
      <Container>
        <PostForm posts={posts} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
