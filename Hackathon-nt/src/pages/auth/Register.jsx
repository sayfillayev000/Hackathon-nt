<<<<<<< HEAD:src/pages/auth/Register.jsx
import React from "react";
import AuthContainer from "../../components/template/AuthContainer";
import { SingUpImg } from "../../assets/images";
import ActionLink from "../../components/ui/ActionLink";
import Form from "../../components/template/Form";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
=======
import React from 'react'
import AuthContainer from '../../components/template/AuthContainer'
import { SingUpImg } from '../../assets/images'
import ActionLink from '../../components/ui/ActionLink'
import Form from '../../components/template/Form'
import TextInput from '../../components/ui/TextInput'
import Button from '../../components/ui/Button'
import { useNavigate } from 'react-router-dom'
>>>>>>> origin/anonymousdeveloper:Hackathon-nt/src/pages/auth/Register.jsx

const Register = () => {
  const navigat = useNavigate();
  return (
    <AuthContainer img={SingUpImg}>
<<<<<<< HEAD:src/pages/auth/Register.jsx
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
=======
        <h1 className='auth-title'>Ro'yxatdan O'tish</h1>
        <p className='auth-desc'>sizni hisobingiz bormi <ActionLink path='/login'>Kirish</ActionLink></p>
        <Form className='auth-form-control'>
          <TextInput placeholder='Ismingiz'/>
          <TextInput placeholder='Familyangiz'/>
          <TextInput placeholder='Telefon raqam'/>
          <TextInput placeholder='Email'/>
          <TextInput placeholder='Parol'/>
          <Button>
                Ro'yxatdan O'tish
          </Button>
        </Form>
      </AuthContainer>
  )
}
export default Register
>>>>>>> origin/anonymousdeveloper:Hackathon-nt/src/pages/auth/Register.jsx
