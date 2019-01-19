import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import './article.scss';

class Article extends React.Component {

  render() {
    const { title, description, date, link, image} = this.props;
    return(
      <div className="card french-list-item">
        <div className="img-container">
          <img className="card-img-top" src={image} alt="Image de l'article"></img>
        </div>
        <div className="mt-4 card-body">
          <h2 className="card-title article-title">{title}</h2>
          <p className="mt-3 card-text">{description}</p>
          <p><Moment format="DD/MM/YYYY">{date}</Moment></p>
          <a href={link} target="new_blank" className="btn btn-read">Lire l'article</a>
        </div>
        
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired
}
export default Article;

