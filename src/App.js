import "uikit/dist/css/uikit.css";
import Uikit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
Uikit.use(Icons);
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Albums } from "./components/Albums/Albums";
import { Post } from "./components/Post/Post";
import { Posts } from "./components/Posts/Posts";
import { Postsgrid } from "./components/Postsgrid/Postsgrid";
import { Postslists } from "./components/Postslists/PostsLists";
import { PostsProvider } from "./PostsContext";

export default function App() {

  return (
    <PostsProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Postslists} />
          <Route exact path="/Postsgrid" component={Postsgrid} />
          <Route exact path="/Albums" component={Albums} />
          <Route exact path="/Posts" component={Posts} />
          <Route exact path="/Post" component={Post} />
        </Switch>
      </BrowserRouter>
    </PostsProvider>
  );
}
