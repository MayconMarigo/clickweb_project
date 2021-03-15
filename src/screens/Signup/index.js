import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Lock from "../../assets/lock.png";
import HideNull from "../../assets/hide-null.png";
import Hide from "../../assets/hide.png";
import Arrow from "../../assets/left-arrow.png";
import { Checkbox } from "react-native-paper";

import {
  Container,
  InputArea,
  CustomHeader,
  TextEd,
  TermsAndPoliticsView,
  TextBold,
  TermText,
  LoginButton,
  LoginButtonText,
  CheckBoxView,
  ImageArrow,
} from "./styles";

import Input from "../../components/SignInput";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const [security, setSecurity] = useState(true);
  const [checked, setCheckedBox1] = useState(false);
  const [checked2, setCheckedBox2] = useState(false);

  const handleBackArrow = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  const handleCreateAccount = () => {
    if (nameField == "") {
      alert("Por favor, preencha o nome corretamente !");
    } else if (emailField == "") {
      alert("O campo Email não pode estar vazio!");
    } else if (phoneField == "") {
      alert("O campo telefone precisa ser preenchdido");
    } else if (passCheck != passwordField) {
      alert("As senhas não conferem!");
    } else if (!checked) {
      alert(
        "Você precisa concordar com os termos de uso para prosseguir com a criação da conta!"
      );
    } else if (!checked2) {
      alert(
        "Você precisa concordar com as politicas de privacidade para prosseguir com a criação da conta!"
      );
    } else {
      navigation.reset({
        routes: [{ name: "TabBar" }],
      });
    }
  };

  return (
    <Container>
      <CustomHeader>
        <TouchableOpacity onPress={handleBackArrow}>
          <ImageArrow source={Arrow}></ImageArrow>
        </TouchableOpacity>
      </CustomHeader>
      <TextEd>Novo cadastro</TextEd>

      <InputArea>
        <Input
          label={"Nome Completo"}
          value={nameField}
          placeholder={"Nome Completo"}
          onChangeText={(t) => setNameField(t)}
        />
        <Input
          label={"E-mail"}
          value={emailField}
          placeholder={"E-mail"}
          onChangeText={(t) => setEmailField(t)}
        />
        <Input
          label={"Telefone"}
          value={phoneField}
          placeholder={"(__) _____-____"}
          onChangeText={(t) => setPhoneField(t)}
        />
        <Input
          label={"Senha"}
          icon={Lock}
          value={passwordField}
          placeholder={"Senha"}
          iconEnd={security ? HideNull : Hide}
          pass={security}
          onChangeText={(t) => setPasswordField(t)}
          onPress={() => setSecurity(!security)}
        />
        <Input
          label={"Confirme a senha"}
          icon={Lock}
          value={passCheck}
          pass={security}
          placeholder={"Confirme a senha"}
          onChangeText={(t) => setPassCheck(t)}
        />
      </InputArea>

      <CheckBoxView>
        <TermsAndPoliticsView>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            uncheckedColor={"gray"}
            color={"#3db396"}
            onPress={() => {
              setCheckedBox1(!checked);
            }}
          />
          <TermText>Concordo com os</TermText>
          <TouchableOpacity>
            <TextBold> Termos de uso</TextBold>
          </TouchableOpacity>
        </TermsAndPoliticsView>

        <TermsAndPoliticsView>
          <Checkbox
            status={checked2 ? "checked" : "unchecked"}
            uncheckedColor={"gray"}
            color={"#3db396"}
            onPress={() => {
              setCheckedBox2(!checked2);
            }}
          />
          <TermText>Concordo com as</TermText>
          <TouchableOpacity>
            <TextBold> Políticas de privacidade</TextBold>
          </TouchableOpacity>
        </TermsAndPoliticsView>
      </CheckBoxView>

      <LoginButton onPress={handleCreateAccount}>
        <LoginButtonText>CRIAR CONTA</LoginButtonText>
      </LoginButton>
    </Container>
  );
};
