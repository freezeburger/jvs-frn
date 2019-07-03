import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Easing, Image, TouchableOpacity } from 'react-native'

export default class BamGrumpyCat extends Component {
    constructor (props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount(){
        this.handleAnimation();
    }

    handleAnimation = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease
        }).start(() => {
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 1000,
                easing: Easing.ease
            }).start()
        })
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.handleAnimation}>
                    <Animated.Image
                        source={require('./images/bg.jpg')}
                        style={{ 
                            width: "100%", 
                            aspectRatio: 1,
                            transform: [
                                {
                                    translateX: this.animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 120]
                                    })
                                },
                                {
                                    translateY: this.animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 25]
                                    })
                                },
                                {
                                    scaleX: this.animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 6]
                                    })
                                },
                                {
                                    scaleY: this.animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 4.75]
                                    })
                                }
                            ]
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
