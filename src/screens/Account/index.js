import React from "react";
import { Text } from "react-native";
import ConsumptionIcon from "../../assets/consumption.png";
import HistoryIcon from "../../assets/history.png";
import MyDataIcon from "../../assets/my-data.png";
import PlanIcon from "../../assets/plan.png";
import EquipIcon from "../../assets/equip.png";
import AttendanceIcon from "../../assets/attendance.png";
import ConfigIcon from "../../assets/config.png";
import AboutIcon from "../../assets/about.png";
import Arrow from "../../assets/right-arrow.png";
import {
  Container,
  HeaderView,
  ImageIni,
  AccountLabel,
  TextEd,
  ImageEnd,
} from "./styles";
import { useNavigation } from "@react-navigation/core";

export default () => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      <HeaderView onPress={handleLogOut}>
        <Text style={{ color: "#3DB396", fontSize: 22 }}>SAIR</Text>
      </HeaderView>

      <AccountLabel>
        <ImageIni source={ConsumptionIcon} />
        <TextEd>Acompanhe seu consumo</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>

      <AccountLabel>
        <ImageIni source={HistoryIcon} />
        <TextEd>Histórico de pagamentos</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>

      <AccountLabel>
        <ImageIni source={MyDataIcon} />
        <TextEd>Meus Dados</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>

      <AccountLabel>
        <ImageIni source={PlanIcon} />
        <TextEd>Adquira seu plano</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>

      <AccountLabel>
        <ImageIni source={EquipIcon} />
        <TextEd>Adquira seus equipamentos</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>

      <AccountLabel>
        <ImageIni source={AttendanceIcon} />
        <TextEd>Atendimento</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>

      <AccountLabel>
        <ImageIni source={ConfigIcon} />
        <TextEd>Configurações</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>

      <AccountLabel>
        <ImageIni source={AboutIcon} />
        <TextEd>Sobre</TextEd>
        <ImageEnd source={Arrow} />
      </AccountLabel>
    </Container>
  );
};
