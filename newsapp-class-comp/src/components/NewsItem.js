import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1221%2Fr473374_3_1296x729_16%2D9.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/News" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}
