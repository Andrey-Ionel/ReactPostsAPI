import "uikit/dist/css/uikit.css";
import Uikit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
Uikit.use(Icons);
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Albums } from "./containers/Albums/Albums";
import { Post } from "./components/Post/Post";
import { Postsgrid } from "./containers/Postsgrid/Postsgrid";
import { Postslists } from "./containers/Postslists/PostsLists";
import { PostsProvider } from "./PostsContext";
import ScrollToTop from "./components/Hooks/ScrollToTop"

export default function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Postslists} />
          <Route exact path="/Postsgrid" component={Postsgrid} />
          <Route exact path="/Albums" component={Albums} />
          <Route exact path="/Post/:id" component={Post} />
        </Switch>
      </BrowserRouter>
    </PostsProvider>
  );
}
