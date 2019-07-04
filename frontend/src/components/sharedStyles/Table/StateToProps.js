const mapStateToProps = (state, ownProps) => {
    const props = state.props;
    const my_or_all = ownProps.my_or_all;
    return {
      props, my_or_all
    };
  };

export default mapStateToProps;