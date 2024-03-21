import React from "react";
import ArticleImg from "../../assets/img/space.jpg";
import "./styles.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={ArticleImg} alt="" />
        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.propose}</h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }
}
