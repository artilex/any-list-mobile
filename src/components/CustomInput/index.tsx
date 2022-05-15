import React, {useState} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

import s from './styles';
import CustomText from 'src/components/CustomText';

type Props = TextInputProps & {
  label: string;
};

const CustomInput = ({label, value, onChangeText, ...props}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={s.container}>
      <CustomText style={s.labelText} title>
        {label}
      </CustomText>

      <View style={[s.inputWrapper, isFocused && s.focused]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={s.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoCapitalize={'none'}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomInput;
