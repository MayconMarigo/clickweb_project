import styled from "styled-components/native";

import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const w = scale(100);
const h = verticalScale(400);
const p = moderateScale(5);

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #242034;
`;

export const CustomHeader = styled.View`
  justify-content: space-between;
  padding: 35px 25px 15px 25px;
  flex-direction: row;
  align-items: center;
`;
export const ImageArrow = styled.Image`
  resize-mode: contain;
  width: 14px;
`;
export const TextEd = styled.Text`
  position: relative;
  bottom: 49px;
  align-self: center;
  font-size: 20px;
  color: #3db396;
`;

export const InputArea = styled.View`
  position: relative;
  top: -20px;
  padding: 15px;
  width: 100%;
  height: 40%;
`;

export const LoginButton = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: #3db396;
  width: 270px;
  height: 67px;
  border-radius: 15px;
  top: 7%;
`;

export const LoginButtonText = styled.Text`
  color: white;
`;

export const SignInButton = styled.TouchableOpacity`
  background-color: white;
  align-self: flex-end;
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

export const TermsAndPoliticsView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 6px 6px 0 6px;
`;

export const TermText = styled.Text`
  color: #767089;
`;

export const TextBold = styled.Text`
  color: white;
  font-weight: bold;
`;
export const CheckBoxView = styled.View`
  margin-top: 20%;
`;
