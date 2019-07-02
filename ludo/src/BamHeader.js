import React from "react";
import PropTypes from "prop-types";
import {Header} from 'react-native-elements';

/**
 * Color - white
 */
const iconColor = "#fff";
/**
 * Type - ionicon
 */
const iconType = 'ionicon';

/**
 * Generique icon component
 * @param {string} icon name of icon
 * @param {function} cb callback
 */
const iconComponent = (icon, cb) => ({
  icon,
  type: iconType,
  color: iconColor,
  onPress: cb
});

/**
 * Left icon component (log out)
 * @param {function} cb callback
 */
const leftComponent = cb => iconComponent("ios-log-out", cb);

/**
 * Right icon component (profile)
 * @param {function} cb callback
 */
const rightComponent = cb => iconComponent("ios-person", cb);

/**
 * Title component
 * @param {string | React.ReactElement} title title of header
 */
const centerComponent = title =>
  React.isValidElement(title)
    ? title
    : { text: title, style: { color: iconColor } };

/**
 * BamHeader component
 * @param {object} props props of BamHeader
 */
const BamHeader = props => {
  const { title, bamAction } = props;

  /**
   * Call bamAction with action on press
   * @param {string} action name of action
   */
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

/**
 * Props Types
 */
BamHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  bamAction: PropTypes.func.isRequired
};

/**
 * Default props
 */
BamHeader.defaultProps = {
  title: ""
};

export default BamHeader;
