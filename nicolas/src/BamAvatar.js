import _ from 'lodash';
import React, { Component } from 'react'
import Proptypes from 'prop-types';

import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import { View, TouchableOpacity, Text } from 'react-native';
import { Image, Avatar, Button, Icon } from 'react-native-elements';

/**
 * Avatar of the boite à miaou.
 *
 * @class BamAvatar
 * @extends {Component}
 */
class BamAvatar extends Component {
    /**
     * Proptypes.
     *
     * @static
     * @memberof BamAvatar
     */
    static propTypes = {
        bamAction: Proptypes.func,
    }

    /**
     * Creates an instance of BamAvatar.
     *
     * @param {*} args
     * @memberof BamAvatar
     */
    constructor(...args){
        super(...args);

        this.state = {
            capturing: false,
            hasCameraPermission: null,
            type: Camera.Constants.Type.front,
        }
    }

    /**
     * Handle avatar onPress event.
     *
     * @memberof BamAvatar
     */
    handleImagePress = async (event) => {
        const { hasCameraPermission } = this.state;

        if (_.isNil(hasCameraPermission)){
            const { status } = await Permissions.askAsync(Permissions.CAMERA);

            this.setState({ hasCameraPermission: status === 'granted' }, () => {
                const { hasCameraPermission: allowed } = this.state;

                if (allowed) {
                    this.setState({ capturing: true })
                }
            });
        } else if (hasCameraPermission) {
            this.setState({ capturing: true })
        }
    }

    /**
     * Take picture
     *
     * @memberof BamAvatar
     */
    handleTakePicture = async () => {
        // const photo = await this.camera.takePictureAsync();

        // console.log(photo);

        this.setState({ capturing: false })

        _.invoke(this.props, 'bamAction', 'PROFILE_PICTURE_UPDATE')
    }

    /**
     * Render the component.
     *
     * @returns
     * @memberof BamAvatar
     */
    render() {
        const { 
            capturing,
            type 
        } = this.state;

        return (
            <View>
                {
                    capturing ? (
                        <React.Fragment>
                            <View> 
                                <Camera
                                    ref={ref => { this.camera = ref; }}
                                    style={{ flex: 1 }}
                                    type={type}
                                />
                            </View>
                            <View>
                                <Button
                                    type='clear'
                                    raised
                                    title='Miaou!'
                                    onPress={this.handleTakePicture}
                                    icon={
                                        <Icon
                                            name="ios-camera"
                                            size={24}
                                            type='ionicon'
                                        />
                                    }
                                />
                            </View>
                        </React.Fragment>
                    )
                    : (
                        <Avatar
                            containerStyle={{
                                borderWidth: 5,
                                borderColor: "#000"
                            }}
                            size={150}
                            rounded
                            source={require('./images/bg.jpg')}
                            onPress={this.handleImagePress}
                        />
                    )
                }
            </View>
        )
    }
}

export default BamAvatar;
