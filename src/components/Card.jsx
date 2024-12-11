import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card bg-dark text-light h-100">
              <img
                src={`http://localhost:3000/images/${post.image}`}
                className="card-img-top img-fluid"
                alt={post.title}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
              </div>
              <div className="card-footer">
                <Link to={`/posts/${post.id}`} className="btn btn-light">
                  Dettagli
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
