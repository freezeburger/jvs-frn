import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from "react-native";

class BamListItem extends Component {

    componentDidMount() {
        const {
            user,
        } = this.props;
    }


    render() {
        const {
            message, username, avatar
        } = this.props;

        const imageLink = avatar || "https://images4.persgroep.net/rcs/iQoMRKfl6Q9Ta9AKQEmhUWgnoXo/diocontent/75305151/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9";


        return (

            <View  style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: imageLink}} /> 
            <Text style={styles.text}>[{username}] - {message}</Text>
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
        width: '100%',
        flexDirection:'row', 
        flexWrap:'wrap',
      textAlign: "left",
      backgroundColor: '#fff',
      color: '#000',
    },
    image: {width: 50, height: 50, borderRadius: 400/ 2},
    text: {textAlignVertical: "center"}
  });

export default BamListItem;
