import React from "react";
import AuthContainer from "../../components/template/AuthContainer";
import { SingInImg } from "../../assets/images";
import ActionLink from "../../components/ui/ActionLink";
import TextInput from "../../components/ui/TextInput";
import Form from "../../components/template/Form";
import Button from "../../components/ui/Button";

const login = () => {
  return (
    <AuthContainer img={SingInImg}>
      <h1 className="auth-title"> Kirish</h1>
      <p className="auth-desc">
        Sizning hisobingiz yo’qmi?{" "}
        <ActionLink path="/register">Ro’yxatdan o’tish</ActionLink>
      </p>
      <Form className='auth-form-control'>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button children='Keyingi qadam'/>
      </Form>
    </AuthContainer>
  );
};

export default login;
