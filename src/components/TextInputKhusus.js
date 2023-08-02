import React from "react";
import PropTypes from "prop-types";
import {
  TextInput, Text, StyleSheet, View,
} from "react-native";

const TextInputKhusus = ({
  text, onChange, label, multiline, numberOfLines,
}) => {
  const gaya = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#ddd",
      padding: 10,
    },
  });

  return (
    <View style={gaya.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={gaya.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
};

TextInputKhusus.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool.isRequired,
  numberOfLines: PropTypes.number.isRequired,
};

TextInputKhusus.defaultProps = {
  text: "",
};

export default TextInputKhusus;
