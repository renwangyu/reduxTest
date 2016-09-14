import {connect} from 'react-redux';
import * as Actions from '../action';
import Hello from '../components/Hello';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.content
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

const HelloComp = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default HelloComp;