import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import "./styles/App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles/"
      );
      const newsData = response.data;
      setNews(newsData);
    }
    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      <section id="article">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="white"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.newsSite}
                description={article.summary}
                thumbnail={article.imageUrl}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
