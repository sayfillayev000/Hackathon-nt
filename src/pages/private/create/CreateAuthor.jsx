import React from "react";
import TextInput from "../../../components/ui/TextInput";
import Form from "../../../components/template/Form";
import Button from "../../../components/ui/Button";
const CreateAuthor = () => {
  return (
    <div className="container">
      <div className="create_left">df</div>
      <div className="form">
        <h1 className="title">Add book</h1>
        <Form classname="create_form">
          <TextInput className={"create_input"} placeholder={"Title"} />
          <TextInput className={"create_input"} placeholder={"Pages"} />
          <TextInput className={"create_input"} placeholder={"Year"} />
          <TextInput className={"create_input"} placeholder={"Price"} />
          <select name="genre">
            <option selected value="Lirik">
              Lirik
            </option>

            <option value="Dramatik">Dramatik</option>
            <option value="Romantik">Romantik</option>
            <option value="Detectiv">Detectiv</option>
          </select>
          <select name="genre">
            <option value="Dramatik">Dramatik</option>
            <option value="Romantik">Romantik</option>
            <option value="Detectiv">Detectiv</option>
          </select>
          <TextInput className={"create_input"} placeholder={"Bio"} />

          <Button>Send</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAuthor;
