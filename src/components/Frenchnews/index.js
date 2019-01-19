import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';


import Article from 'src/Components/Article';


import './frenchnews.scss';


class Frenchnews extends React.Component {

  
  nextPage = () => {
    const { goNextPage } = this.props;
    goNextPage(true);
    window.scrollTo(0, 0);
  }

  previousPage = () => {
    const { goNextPage } = this.props;
    goNextPage(false);
    window.scrollTo(0, 0);
  }

  goHome = () => {
    const { goHome } = this.props;
    goHome();
    window.scrollTo(0, 0);
  }

  render() {
    const { frNewsPart1, frNewsPart2, frNewsPart3, frNewsPart4, page} = this.props;
    const articlesList = [frNewsPart1, frNewsPart2, frNewsPart3, frNewsPart4];
    return(
      <div id="frenchnews">
        {frNewsPart1[0] && 
          <div className="french-list-articles">
            {articlesList[page][0].map((article, index) => (
              <Article 
                title={article.title} 
                description={article.description} 
                date={article.date} 
                image={article.urlToImage}
                link={article.url} 
                key={index} />
            ))}
          </div>
        }
        <hr />
          <div className="pagination">
            {page > 0 && <button className="btn btn-primary mt-5" onClick={this.previousPage}>Précédent</button>}
            <button className="btn btn-warning mt-5" onClick={this.goHome}>Accueil</button>
            {page < 3 && <button className="btn btn-primary mt-5" onClick={this.nextPage}>Suivant</button>}
          </div>
          <p className="text-center mt-5">API from NewsAPI.org</p>
      </div>
    );
  }
}

Frenchnews.propTypes = {
  frNewsPart1: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object.isRequired).isRequired).isRequired,
  frNewsPart2: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object.isRequired).isRequired).isRequired,
  frNewsPart3: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object.isRequired).isRequired).isRequired,
  frNewsPart4: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object.isRequired).isRequired).isRequired,
  page: PropTypes.number.isRequired,
  goNextPage: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired
}
/**
 * Export
 */
export default Frenchnews;
