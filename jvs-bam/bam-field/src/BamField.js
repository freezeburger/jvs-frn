import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

class BamField extends React.Component {
  
  constructor(props){
    super(props);
    this._validator = props.bamValidator  ? props.bamValidator  : () => true;
    this._action    = props.bamAction     ? props.bamAction     : () => { throw new Error("Any action")};
    this._ref       = null;
    this._value      = '';
  }

  triggerAction(){
    this._triggerAction(this._value);
  }

  _triggerAction(value){
    if(this._validator(value)){
      this._action(value);
    }
  }

  render(){   

    const properties = {
      ref: (ref) => this._ref = ref,
      onChange: (evt) => this._value = evt.nativeEvent.text
    }

    if(this.props.bamValue){
      properties.value = this.props.bamValue;
    }

    if(this.props.bamPlaceHolder){
      properties.placeholder = this.props.bamPlaceHolder;
    }

    let icon = undefined;

    if(this.props.bamLeftIcon){
      properties.leftIcon = this.props.bamLeftIcon;
    }

    let btn = undefined;

    if(this.props.children){
      const children = this.props.children;
      btn = (
        <children.type { ... Object.assign({}, this.props.children.props, {onPress: (()=> { this.triggerAction(); if(children.props.onPress) children.props.onPress(); })})}/>
      );
    }

    return (
      <View style={ styles.container }>
        <Input { ... properties } />
        { btn }
      </View>
    )
  }
}

BamField.propTypes = {
  bamValidator: PropTypes.func,
  bamPlaceHolder: PropTypes.string,
  bamAction: PropTypes.func.isRequired,
  bamLeftIcon: PropTypes.element,
  bamValue: PropTypes.string
}

export default BamField;