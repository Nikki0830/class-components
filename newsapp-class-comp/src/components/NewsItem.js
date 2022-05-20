import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imgUrl === null
                ? "https://www.slashgear.com/img/gallery/pebblebee-offers-an-airtag-alternative-that-you-can-easily-hook-to-a-keychain/l-intro-1653009815.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
