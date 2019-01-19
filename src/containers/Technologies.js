import { connect } from 'react-redux';
import { getFrenchNews } from 'src/store/reducer';
import Technologies from '../components/Technologies';


const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getFrenchNews: (part1, part2, part3, part4) => {
    dispatch(getFrenchNews(part1, part2, part3, part4));
  },
})

const TechnologiesContainer = connect(mapStateToProps, mapDispatchToProps)(Technologies);

export default TechnologiesContainer;
