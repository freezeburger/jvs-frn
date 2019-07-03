import React from "react";
import PropTypes from "prop-types";
import {Header} from 'react-native-elements';

import { ActionProfileShow, ActionUserDisconnect } from './constants/action'
import { iconColor, iconType, iconDisconnect, iconProfile } from './constants/icon'

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
const leftComponent = cb => iconComponent(iconDisconnect, cb);

/**
 * Right icon component (profile)
 * @param {function} cb callback
 */
const rightComponent = cb => iconComponent(iconProfile, cb);

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
      leftComponent={leftComponent(() => onPress(ActionUserDisconnect))}
      centerComponent={centerComponent(title)}
      rightComponent={rightComponent(() => onPress(ActionProfileShow))}
    />
  );
};

/**
 * Props Types
 */
BamHeader.propTypes = {
  /** Titre */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Callback */
  bamAction: PropTypes.func.isRequired
};

/**
 * Default props
 */
BamHeader.defaultProps = {
  title: ""
};

export default BamHeader;
