import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from "react-native";

class BamListItem extends Component {
    state = {
        displayFull: false
    };

    componentDidMount() {
        const {
            user,
        } = this.props;
    }

    setDisplayFull = () => {
        this.setState({ displayFull: true });
    };

    render() {
        const {
            message, username, avatar
        } = this.props;

        const {displayFull} = this.state;

        const imageLink = avatar || "https://images4.persgroep.net/rcs/iQoMRKfl6Q9Ta9AKQEmhUWgnoXo/diocontent/75305151/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9";


        return (

            <View  style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: imageLink}} /> 
            {displayFull ? 
                <Text  style={styles.text}>
                    [{username}] - {message}
                </Text> 
                : 
                <Text numberOfLines={1} ellipsizeMode="tail" onPress={this.setDisplayFull} style={styles.text}>
                    [{username}] - {message}
                </Text>}
          </View>
        );
    }
}

BamListItem.defaultProps = {
    avatar: null
};

BamListItem.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        width: '98%',
        flexDirection:'row', 
        flexWrap:'wrap',
      textAlign: "left",
      backgroundColor: '#fff',
      color: '#000',
    },
    image: {width: 50, height: 50, borderRadius: 400/ 2},
    text: {textAlignVertical: "center", paddingLeft: 5}
  });

export default BamListItem;
