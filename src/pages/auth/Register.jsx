import React from "react";
import AuthContainer from "../../components/template/AuthContainer";
import { SingUpImg } from "../../assets/images";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import useAuth from "../../utils/hooks/useAuth";
import getFormValue from "../../utils/getFormValue";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { singUp } = useAuth();
  const hendleSubmit = async () => {
    const values = getFormValue("register-form");
    const res = await singUp(values);
    !res.success && toast.error(res.message);
    // console.log(values);
  };
  return (
    <AuthContainer img={SingUpImg}>
      <h1 className="auth-title">Ro'yxatdan O'tish</h1>
      <p className="auth-desc">
        sizni hisobingiz bormi <ActionLink path="/login">Kirish</ActionLink>
      </p>
      <Form className="auth-form-control register-form" onSubmit={hendleSubmit}>
        <TextInput name="first_name" placeholder="Ismingiz" />
        <TextInput name="last_name" placeholder="Familyangiz" />
        <TextInput name="phone_number" placeholder="Telefon raqam" />
        <TextInput name="email" placeholder="Email" />
        <TextInput name="password" placeholder="Parol" />
        <Button type="submit">Ro'yxatdan O'tish</Button>
      </Form>
      <Toaster position="top-center" reverseOrder={false} />
    </AuthContainer>
  );
};
export default Register;
