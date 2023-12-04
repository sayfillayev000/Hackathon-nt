import React from "react";
import TextInput from "../../../components/ui/TextInput";
import Form from "../../../components/template/Form";
import Button from "../../../components/ui/Button";
const CreateBook = () => {
  return (
    <div className="container">
      <div className="create_left">
        <Form className={"create_img"}>
          <label htmlFor="inputTag">
            <p className="create_plus">+</p>
            <br />
            Click or drag file to this area to upload
            <TextInput
              id="inputTag"
              type={"file"}
              accept="image/png, image/jpg, image/gif, image/jpeg,image/svg"
            />
          </label>
        </Form>
      </div>
      <div className="form">
        <h1 className="title">Add Book</h1>
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

export default CreateBook;
