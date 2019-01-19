import { connect } from 'react-redux';
import { getFrenchNews } from 'src/store/reducer';
import Sante from '../components/Sante';


const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  getFrenchNews: (part1, part2, part3, part4) => {
    dispatch(getFrenchNews(part1, part2, part3, part4));
  },
})

const SanteContainer = connect(mapStateToProps, mapDispatchToProps)(Sante);

export default SanteContainer;
