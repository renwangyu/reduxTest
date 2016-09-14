import React, {Component, PropTypes} from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {actions, content} = this.props;
    let changeContent = (e) => {
      actions['changeName']();
    }

    return (
      <div onClick={changeContent}>Hello&nbsp;<span>{content}</span></div>
    );
  }
}

Hello.propTypes = {
  content: PropTypes.string
};
Hello.defaultProps = {
  content: 'liuwei'
};

export default Hello;