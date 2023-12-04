import TextInput from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import React from "react";
const Security = () => {
  return (
    <>
      <section className="security">
        <div className="my_security">
          <h2 className="my_security_title">
            Parolni o'zgartirishingiz mumkun :
          </h2>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <TextInput id={"email"} placeholder="Doniyor" />
            </div>
            <div>
              <label htmlFor="pass_now">Hozirgi parol</label>
              <TextInput
                type="password"
                id={"pass_now"}
                placeholder="**************"
              />
            </div>
            <div>
              <label htmlFor="pass_new">Yangi parol</label>
              <TextInput
                type="password"
                id={"pass_new"}
                placeholder="**************"
              />
            </div>
            <div></div>
          </form>
          <Button className="btn__save_security">Saqlash</Button>
        </div>
      </section>
    </>
  );
};

export default Security;
