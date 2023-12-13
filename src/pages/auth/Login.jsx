/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React from "react";
import AuthContainer from "../../components/template/AuthContainer";
import { SingInImg } from "../../assets/images";
import ActionLink from "../../components/ui/ActionLink";
import TextInput from "../../components/ui/TextInput";
import Form from "../../components/template/Form";
import Button from "../../components/ui/Button";
import useAuth from "../../utils/hooks/useAuth";
import getFormValue from "../../utils/getFormValue";
import toast, { Toaster } from "react-hot-toast";

const login = () => {
  const { singIn } = useAuth();
  const hendleSubmit = async () => {
    const values = getFormValue("login-form");
    const res = await singIn(values);
    !res.success && toast.error(res.message);
  };

  return (
    <AuthContainer img={SingInImg}>
      <h1 className="auth-title"> Kirish</h1>
      <p className="auth-desc">
        Sizning hisobingiz yo’qmi?{" "}
        <ActionLink path="/register">Ro’yxatdan o’tish</ActionLink>
      </p>
      <Form className="auth-form-control login-form" onSubmit={hendleSubmit}>
        <TextInput name="email" placeholder="Email" />
        <TextInput name="password" placeholder="Password" />
        <Button children="Keyingi qadam" type="submit" />
      </Form>
      <Toaster position="top-center" reverseOrder={false} />
    </AuthContainer>
  );
};

export default login;
