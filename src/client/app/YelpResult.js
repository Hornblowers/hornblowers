import React from 'react';

class YelpResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      result: null
    };
    this.goToUrl = this.goToUrl.bind(this);
  }

  goToUrl(e) {
    console.log(e.currentTarget);
  }

  render() {
    return (
      <div className="yelpResult">
        <br />
        <h4 onClick={this.goToUrl}>{this.props.result.name}</h4>
        <div>
          <div className="yelpProp"></div>
          <img src={this.props.result.image_url} className="yelpImage" />
          <h5>{this.props.result.location.display_address.join(', ')}</h5>
          <div className="yelpProp">Rating: {this.props.result.rating}</div>
          <div className="yelpProp">Reviews: {this.props.result.review_count}</div>
          <div className="yelpProp">Price: {this.props.result.price}</div>
        </div>
        <br />
      </div>
    );
  }
}

export default YelpResult;
