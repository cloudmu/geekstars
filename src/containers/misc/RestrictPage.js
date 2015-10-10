import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class RestrictPage extends Component {
 
  componentWillMount() {
    const {history, user} = this.props;
    if (!user) {
      history.replaceState(null, '/login');
    }
  }

  render() {
    const {user} = this.props;
    if(user){
      return this.props.children;
    }else{
      return null;
    }
  }
}

RestrictPage.propTypes = {
  user: PropTypes.string,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {user: state.auth.user};
}

export default connect(mapStateToProps)(RestrictPage);