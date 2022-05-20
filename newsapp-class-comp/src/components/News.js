import React, { Component } from "react";
import NewsItem from "./NewsItem.js";

export default class News extends Component {
  render() {
    return (
      <>
        <div className=" container my-3">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="Top Headlines"
                description="Description of the  top heading"
                imgUrl="https://www.digitaltrends.com/wp-content/uploads/2022/05/kids-watching-tv.jpeg?p=1"
                newsUrl = "TODO"
              />
            </div>

            <div className="col-md-4">
              <NewsItem
                title="Top Headlines"
                description="Description of the  top heading"
                imgUrl="https://www.digitaltrends.com/wp-content/uploads/2022/05/kids-watching-tv.jpeg?p=1"
              />
            </div>

            <div className="col-md-4">
              <NewsItem
                title="Top Headlines"
                description="Description of the  top heading"
                imgUrl="https://www.digitaltrends.com/wp-content/uploads/2022/05/kids-watching-tv.jpeg?p=1"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
