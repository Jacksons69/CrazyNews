import { connect } from 'react-redux';
import { getFrenchNews } from 'src/store/reducer';
import Business from '../components/Business';


const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getFrenchNews: (part1, part2, part3, part4) => {
    dispatch(getFrenchNews(part1, part2, part3, part4));
  },
})

const BusinessContainer = connect(mapStateToProps, mapDispatchToProps)(Business);

export default BusinessContainer;
