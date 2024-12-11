import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function SinglePosts() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <div className="container mt-5 text-light bg-secondary">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card bg-dark text-light p-3">
              <img
                className="card-img-top p-3"
                src={`http://localhost:3000/images/${post.image}`}
                alt=""
              />
              <div className="card-body ">
                <h1 className="card-title">{post.title}</h1>
                <p className="card-text">{post.content}</p>
                <ul className="list-group list-group-flush">
                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <li
                        className="list-group-item bg-dark text-light"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <button onClick={() => navigate(-1)} className="btn btn-dark mb-5">
            torna alla pagina precedente
          </button>
        </div>
      </div>
    </>
  );
}
