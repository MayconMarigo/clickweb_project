import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/solever.png";
import User from "../../assets/user.png";
import Lock from "../../assets/lock.png";
import HideNull from "../../assets/hide-null.png";
import Hide from "../../assets/hide.png";
import Arrow from "../../assets/right-arrow.png";

import {
  ImageEdit,
  Container,
  InputArea,
  LoginButton,
  LoginButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  SignInButton,
  SignInButtonText,
  CustomView,
  ImageArrow,
} from "./styles";

import Input from "../../components/SignInput";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [security, setSecurity] = useState(true);

  const HandleLoginButtonClick = () => {
    navigation.navigate("SignUp");
  };

  const handleSignIn = () => {
    navigation.reset({
      routes: [{ name: "TabBar" }],
    });
  };

  return (
    <Container>
      <CustomView>
        <ImageEdit source={Logo} />

        <InputArea>
          <Input
            label={"Seu E-mail"}
            icon={User}
            value={nameField}
            placeholder={"Seu E-mail"}
            onChangeText={(t) => setNameField(t)}
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
        </InputArea>

        <LoginButton onPress={handleSignIn}>
          <LoginButtonText>ENTRAR</LoginButtonText>
        </LoginButton>

        {/* foram criados para serem clicados, porém a função não foi implementada */}
        <ForgotPasswordButton
          onPress={() => alert("função não implementada ainda")}
        >
          <ForgotPasswordButtonText>
            Esqueci minha senha
          </ForgotPasswordButtonText>
        </ForgotPasswordButton>
      </CustomView>
      <SignInButton onPress={HandleLoginButtonClick}>
        <SignInButtonText>Crie seu cadastro agora!</SignInButtonText>
        <ImageArrow source={Arrow} />
      </SignInButton>
    </Container>
  );
};
