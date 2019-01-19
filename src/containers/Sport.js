import { connect } from 'react-redux';
import { getFrenchNews } from 'src/store/reducer';
import Sport from '../components/Sport';


const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getFrenchNews: (part1, part2, part3, part4) => {
    dispatch(getFrenchNews(part1, part2, part3, part4));
  },
})

const SportContainer = connect(mapStateToProps, mapDispatchToProps)(Sport);

export default SportContainer;
