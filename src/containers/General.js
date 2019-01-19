import { connect } from 'react-redux';
import { getFrenchNews } from 'src/store/reducer';
import General from '../components/General';


const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getFrenchNews: (part1, part2, part3, part4) => {
    dispatch(getFrenchNews(part1, part2, part3, part4));
  },
})

const GeneralContainer = connect(mapStateToProps, mapDispatchToProps)(General);

export default GeneralContainer;
