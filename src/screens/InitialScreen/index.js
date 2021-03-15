import React from "react";
import { Text, StyleSheet } from "react-native";
import Logo from "../../assets/solever.png";
import Simulator from "../../assets/simulator.png";
import Location from "../../assets/locate-energy.png";
import Buy from "../../assets/buy-energy.png";
import Sell from "../../assets/sell-energy.png";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import {
  Container,
  ImageEdit,
  ViewWrapper,
  ImageWrapper,
  Wrapper,
} from "./styles";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default () => {
  const w = scale(100);
  const h = verticalScale(200);
  const p = moderateScale(5);

  return (
    <Container>
      <ImageEdit source={Logo} />

      <Wrapper>
        <ViewWrapper color={"#EBC400"}>
          <ImageWrapper source={Simulator} />
          <Text style={{ ...styles.text, paddingTop: p }}>Simulador</Text>
          <Text style={styles.text}>de consumo</Text>
        </ViewWrapper>

        <ViewWrapper color={"#EB6949"}>
          <ImageWrapper source={Location} />
          <Text style={styles.text}>Locação</Text>
          <Text style={{ ...styles.text, paddingBottom: p * 5 }}>
            de energia
          </Text>
        </ViewWrapper>
      </Wrapper>

      <Wrapper>
        <ViewWrapper color={"#6B478D"}>
          <ImageWrapper source={Buy} style={{ top: 2 * p }} />
          <Text style={styles.text}>Comprar</Text>
          <Text style={{ ...styles.text, paddingBottom: p * 6 }}>energia</Text>
        </ViewWrapper>

        <ViewWrapper color={"#2BADE4"}>
          <ImageWrapper source={Sell} style={{ top: 2 * p }} />
          <Text style={styles.text}>Vender</Text>
          <Text style={{ ...styles.text, paddingBottom: p * 6 }}>energia</Text>
        </ViewWrapper>
      </Wrapper>
    </Container>
  );
};
