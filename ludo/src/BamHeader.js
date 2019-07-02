import React from "react";
import PropTypes from "prop-types";
import {Header} from 'react-native-elements';

const iconColor = "#fff";
const iconType = 'ionicon';

const iconComponent = (icon, cb) => ({
  icon,
  type: iconType,
  color: iconColor,
  onPress: cb
});

const leftComponent = cb => iconComponent("ios-log-out", cb);

const rightComponent = cb => iconComponent("ios-person", cb);

const centerComponent = title =>
  React.isValidElement(title)
    ? title
    : { text: title, style: { color: iconColor } };

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
