import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TombolKhusus = ({
  backgroundColor, color, text, onPress, fontSize, width,
}) => {
  const gaya = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: "700",
      color,
    },
  });

  return (
    <TouchableOpacity style={gaya.button} onPress={onPress}>
      <Text style={gaya.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

TombolKhusus.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  fontSize: PropTypes.number,
  width: PropTypes.node,
};

TombolKhusus.defaultProps = {
  fontSize: 16,
  width: 100,
};

export default TombolKhusus;
