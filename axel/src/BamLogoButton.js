import _ from 'lodash';
import React from 'react'
import PropTypes from 'prop-types';

import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

/**
 * BAM Logo Button.
 * 
 * @param {*} props 
 */
const BamLogoButton = (props) => {

    /**
     * Handle Press Image.
     */
    const handlePress = async () => { 
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync(require('../assets/cat.mp3'));
          await soundObject.playAsync();
          // Your sound is playing!
        } catch (error) {
          // An error occurred!
        }
        _.invoke(props, 'bamAction');
    
    };

    const { 
        width,
        height,
        ...rest
    } = props;
    
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image
                {...rest}
                style={{ width, height }}
                source={require('../assets/paw.png')}
            />
        </TouchableOpacity>
       
    )
};

/** PropTypes. */
BamLogoButton.propTypes = {
    bamAction: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
}

/** DefaultProps. */
BamLogoButton.defaultProps = {
    width: 100,
    height: 100,
}

export default BamLogoButton;
