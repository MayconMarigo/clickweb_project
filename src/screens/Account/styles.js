import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #242034;
  padding: 15px;
`;

export const HeaderView = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 14% 20px 20px 0;
`;

export const AccountLabel = styled.TouchableOpacity`
  width: 100%;
  height: 8.2%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #302b44;
`;
export const ImageIni = styled.Image`
  width: 30px;
  resize-mode: contain;
`;
export const TextEd = styled.Text`
  flex-grow: 1;
  margin-left: 11px;
  color: white;
  font-size: 17px;
`;
export const ImageEnd = styled.Image`
  position: relative;
  right: 15px;
  width: 7px;
  resize-mode: contain;
  tint-color: white;
`;
