import { connect } from 'react-redux';
import { getFrenchNews, goNextPage, goHome } from 'src/store/reducer';
import Frenchnews from '../components/Frenchnews';


const mapStateToProps = state => ({
  frNewsPart1: state.frNewsPart1,
  frNewsPart2: state.frNewsPart2,
  frNewsPart3: state.frNewsPart3,
  frNewsPart4: state.frNewsPart4,
  page: state.page,
})

const mapDispatchToProps = dispatch => ({

  getFrenchNews: (part1, part2, part3, part4) => {
    dispatch(getFrenchNews(part1, part2, part3, part4));
  },

  goNextPage: direction => {
    dispatch(goNextPage(direction));
  },

  goHome: () => {
    dispatch(goHome());
  }
})

const FrenchNewsContainer = connect(mapStateToProps, mapDispatchToProps)(Frenchnews);

export default FrenchNewsContainer;
