import { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Posts from "../components/Posts";

function PostsPage() {
  const { user } = useContext(AuthContext);
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Posts user={user} />
    </div>
  );
}

export default PostsPage;