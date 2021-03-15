import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const windowHeight = Dimensions.get("window").height;

const w = scale(100);
const h = verticalScale(200);

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #242034;
  align-items: center;
  flex-direction: column;
`;

export const ImageEdit = styled.Image`
  width: ${w}px;
  margin-top: ${windowHeight * 0.02}px;
  resize-mode: contain;
`;

export const ViewWrapper = styled.View`
  width: ${1.5 * w}px;
  height: ${1.15 * h}px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 0 2.5%;
`;
export const ImageWrapper = styled.Image`
  width: ${w * 0.7}px;
  resize-mode: contain;
  position: relative;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: ${h * 0.1}px;
`;
