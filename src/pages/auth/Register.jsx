import React from "react";
import AuthContainer from "../../components/template/AuthContainer";
import { SingUpImg } from "../../assets/images";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";

const Register = () => {
  return (
    <AuthContainer img={SingUpImg}>
      <h1 className="auth-title">Ro'yxatdan O'tish</h1>
      <p className="auth-desc">
        sizni hisobingiz bormi <ActionLink path="/login">Kirish</ActionLink>
      </p>
      <Form className="auth-form-control">
        <TextInput placeholder="Ismingiz" />
        <TextInput placeholder="Familyangiz" />
        <TextInput placeholder="Telefon raqam" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Parol" />
        <Button children="Keyingi qadam" />
      </Form>
    </AuthContainer>
  );
};

export default Register;
