import React from "react";
import styled from "styled-components/native";
import UserIcon from "../assets/user.png";
import EnergyIcon from "../assets/energy.png";
import NotificationIcon from "../assets/notification.png";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const w = scale(100);
const h = verticalScale(60);
const p = moderateScale(10, 5);

const TabArea = styled.View`
  position: absolute;
  bottom: 0;
  width: ${w * 3.3}px;
  height: ${h}px;
  align-self: center;
  background-color: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  flex-direction: row;
  padding: 0 ${2.2 * p}px;
`;

const ImageEd = styled.Image`
  position: relative;
  top: 10px;
  resize-mode: contain;
`;
const DisplayTab = styled.TouchableOpacity`
  padding: ${0.8 * p}px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 3px;
`;

const TextEd = styled.Text`
  position: relative;
  font-size: 13px;
  margin-bottom: 15px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <DisplayTab
        style={{
          borderBottomColor: state.index === 0 ? "#3DB396" : "#D0DBDF",
          borderBottomRadius: state.index === 0 ? 10 : 0,
        }}
        onPress={() => goTo("Account")}
      >
        <ImageEd
          style={{ width: w / 4 }}
          source={UserIcon}
          tintColor={state.index === 0 ? "#3DB396" : "#D0DBDF"}
        ></ImageEd>
        <TextEd style={{ color: state.index === 0 ? "#3DB396" : "#D0DBDF" }}>
          Minha conta
        </TextEd>
      </DisplayTab>

      <DisplayTab
        style={{ borderBottomColor: state.index === 1 ? "#3DB396" : "#D0DBDF" }}
        onPress={() => goTo("InitialScreen")}
      >
        <ImageEd
          style={{ width: w / 5 }}
          source={EnergyIcon}
          tintColor={state.index === 1 ? "#3DB396" : "#D0DBDF"}
        ></ImageEd>
        <TextEd
          style={{
            color: state.index === 1 ? "#3DB396" : "#D0DBDF",
            top: -5.5,
          }}
        >
          Energia solar
        </TextEd>
      </DisplayTab>

      <DisplayTab
        style={{ borderBottomColor: state.index === 2 ? "#3DB396" : "#D0DBDF" }}
        onPress={() => goTo("Notifications")}
      >
        <ImageEd
          style={{ width: w / 5 }}
          source={NotificationIcon}
          tintColor={state.index === 2 ? "#3DB396" : "#D0DBDF"}
        ></ImageEd>
        <TextEd
          style={{ color: state.index === 2 ? "#3DB396" : "#D0DBDF", top: -4 }}
        >
          Notificações
        </TextEd>
      </DisplayTab>
    </TabArea>
  );
};
