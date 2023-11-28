import React, { useState } from "react";
import Post from "./Post";
import PostHue from "./PostHue";
import store, { persistor } from "../store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import LoginRedirect from "./LoginRedirect";

interface Props {
  posts: Post[];
  addHue: (color: string) => void;
}

const Main = ({ posts, addHue }: Props) => {
  const [showLogin, setShowLogin] = useState(false);

  const HandleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="flex flex-wrap w-full justify-center gap-8 overflow-y-auto">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <Routes>
              <Route
                path="/login"
                element={<LoginRedirect onClick={HandleShowLogin} />}
              />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<PostHue addHue={addHue} />} />
              </Route>
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Main;
