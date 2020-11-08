import React, { useEffect, useState } from "react";

interface Post {
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    let ignore = false;

    async function fetchPosts() {
      const response = await fetch("/posts");
      const data = await response.json();
      if (!ignore) setPosts(data);
    }

    fetchPosts();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <React.Fragment>
      <header>
        <h1>Posts</h1>
      </header>
      {posts.map((post) => (
        <article className="post">
          <header>
            <div>
              <h1>{post.title}</h1>
            </div>
          </header>
          <p className="body">{post.body}</p>
        </article>
      ))}
    </React.Fragment>
  );
}
