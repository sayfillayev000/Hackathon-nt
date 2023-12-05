import React from "react";
import TextInput from "../../../components/ui/TextInput";
import Form from "../../../components/template/Form";
import Button from "../../../components/ui/Button";
const CreateAuthor = () => {
  return (
    <div className="container">
      <div className="create_left">
      <Form className={"create_img"}>
          <label htmlFor="inputTag">
            <p className="create_plus">+</p>
            <br/>
            Click or drag file to this area to upload
            <input
              id="inputTag"
              type="file"
              accept="image/png, image/jpg, image/gif, image/jpeg,image/svg"
            />
          </label>
        </Form>
      </div>
      <div className="form">
        <h1 className="title">Add Author</h1>
        <Form classname="create_form">
          <TextInput className={"create_input"} placeholder={"First Name"} />
          <TextInput className={"create_input"} placeholder={"Last Name"} />
          <TextInput className={"create_input"} placeholder={"Date of birth"} />
          <TextInput className={"create_input"} placeholder={"Date of death"} />
          <TextInput className={"create_input"} placeholder={"Country"} />

          <select name="genre">
            <option selected value="Lirik">
              Lirik
            </option>
            <option value="Dramatik">Dramatik</option>
            <option value="Romantik">Romantik</option>
            <option value="Detectiv">Detectiv</option>
          </select>
          <textarea className={"create_bio"} placeholder={"Bio"} />

          <Button>Create</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAuthor;
