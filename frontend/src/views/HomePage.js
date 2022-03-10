import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      {user && <UserInfo user={user} />}
    </section>
  );
};

export default Home;