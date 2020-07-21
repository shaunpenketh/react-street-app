import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import colors from 'utils/colors';

const styles = {
  buttonStyle: {
    height: 85,
    borderRadius: 4,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.teal,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
};

const NavigationButton = ({onPress, label, buttonStyleExt}) => {
  const {buttonStyle, labelStyle} = styles;
  return (
    <TouchableOpacity
      style={[buttonStyle, buttonStyleExt]}
      onPress={onPress}
      testID={'navigationButton'}>
      <Text style={labelStyle} testID={'navigationButtonText'}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

NavigationButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  buttonStyleExt: PropTypes.object,
};

NavigationButton.defaultProps = {
  buttonStyleExt: undefined,
};

export default NavigationButton;
