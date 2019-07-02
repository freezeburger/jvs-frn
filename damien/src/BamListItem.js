import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from "react-native";

class BamListItem extends Component {

    componentDidMount() {
        const {
            user,
        } = this.props;
    }


    render() {
        const {
            message,
        } = this.props;


        return (
            <View  style={styles.container}>
               <Text style={{textAlignVertical: 'top',textAlign: "left",}}>{message}</Text>
            </View>
        );
    }
}

BamListItem.defaultProps = {
    message: null,
};

BamListItem.propTypes = {
    message: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
      textAlign: "left",
      backgroundColor: '#fff',
      color: '#000',
    },
  });

export default BamListItem;
