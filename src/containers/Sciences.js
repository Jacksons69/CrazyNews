import { connect } from 'react-redux';
import { getFrenchNews } from 'src/store/reducer';
import Sciences from '../components/Sciences';


const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getFrenchNews: (part1, part2, part3, part4) => {
    dispatch(getFrenchNews(part1, part2, part3, part4));
  },
})

const SciencesContainer = connect(mapStateToProps, mapDispatchToProps)(Sciences);

export default SciencesContainer;
