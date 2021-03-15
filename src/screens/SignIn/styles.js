import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #242034;
  justify-content: space-between;
`;

export const ImageEdit = styled.Image`
  width: 41%;
  margin-top: 30px;
  resize-mode: contain;
`;

export const InputArea = styled.View`
  padding: 15px;
  width: 100%;
`;

export const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #3db396;
  width: 270px;
  height: 67px;
  border-radius: 15px;
  position: relative;
  top: -15%;
`;

export const LoginButtonText = styled.Text`
  color: white;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  position: relative;
  top: -15%;
  margin-top: 31.6px;
  flex-grow: 1;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #76718a;
`;

export const SignInButton = styled.TouchableOpacity`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 61px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CustomView = styled.View`
  align-items: center;
`;

export const SignInButtonText = styled.Text`
  width: 50%;
  color: #242034;
`;

export const ImageArrow = styled.Image`
  position: relative;
  right: -50px;
  resize-mode: contain;
  width: 8px;
`;
