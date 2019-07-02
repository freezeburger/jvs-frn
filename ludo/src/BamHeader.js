import React from "react";
import PropTypes from "prop-types";
import {Header} from 'react-native-elements';

const leftComponent = cb => ({
  icon: "undo",
  color: "#fff",
  onPress: cb
});

const rightComponent = cb => ({
  icon: "person",
  color: "#fff",
  onPress: cb
});

const centerComponent = title =>
  React.isValidElement(title)
    ? title
    : { text: title, style: { color: "#fff" } };

const BamHeader = props => {
  const { title, bamAction } = props;

  const onPress = (action) => {
    bamAction({
      action
    })
  }

  return (
    <Header
      leftComponent={leftComponent(() => onPress('USER_DISCONNECT'))}
      centerComponent={centerComponent(title)}
      rightComponent={rightComponent(() => onPress('PROFILE_SHOW'))}
    />
  );
};

BamHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  bamAction: PropTypes.func.isRequired
};

BamHeader.defaultProps = {
  title: ""
};

export default BamHeader;
