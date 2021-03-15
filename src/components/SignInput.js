import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled from "styled-components/native";

const InputArea = styled.View`
  width: 100%;
  height: 15%;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: #302b44;
  margin-bottom: 15px;
  align-items: center;
`;

const ImageEdit = styled.Image`
  width: 4%;
  tint-color: #767089;
  resize-mode: contain;
`;

const TextEd = styled.Text`
  color: #76718a;
`;

const ImageEnd = styled.Image`
  align-self: flex-end;
  width: 20px;
  tint-color: #767089;
  resize-mode: contain;
  align-content: center;
  justify-content: center;
  margin-bottom: 5px;
`;
const TextEdit = styled.TextInput`
  font-weight: bold;
  color: white;
  width: 82%;
`;

export default ({
  label,
  icon,
  placeholder,
  value,
  iconEnd,
  pass,
  onChangeText,
  onPress,
}) => {
  return (
    <>
      <TextEd>{label}</TextEd>
      <InputArea>
        {icon ? (
          <>
            <ImageEdit source={icon} />
            <TextEdit
              style={{ marginLeft: 12 }}
              placeholder={placeholder}
              placeholderTextColor="white"
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={pass}
            />
            <TouchableWithoutFeedback onPress={onPress}>
              <ImageEnd source={iconEnd} />
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <TextEdit
              placeholder={placeholder}
              placeholderTextColor="white"
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={pass}
            />
            <TouchableWithoutFeedback onPress={onPress}>
              <ImageEnd source={iconEnd} />
            </TouchableWithoutFeedback>
          </>
        )}
      </InputArea>
    </>
  );
};
