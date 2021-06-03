import React, { useState } from "react"
import { Pagination } from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import { LMButton } from "../../components/LMButton/LMButton";
import Navigation from "../../components/Navigation/Navigation";
import { PostslistsView } from "../../components/PostslistsView/PostslistsView";
import { PostsgridView } from "../../components/PostsgridView/PostsgridView";

export function Posts() {
  const [pageListView, setPageListView] = useState(true);
  const [pageGridView, setPageGridView] = useState(false);
  return (
    <main className="uk-main">
      <Navigation />
      <div className="uk-section">
        <div className="uk-container">
          <Filters
            pageListView={pageListView}
            setPageListView={setPageListView}
            pageGridView={pageGridView}
            setPageGridView={setPageGridView}
          />
          {pageListView ?
            <PostslistsView /> :
            <PostsgridView />}
          <LMButton />
          <Pagination />
        </div>
      </div >
    </main >
  )
}
