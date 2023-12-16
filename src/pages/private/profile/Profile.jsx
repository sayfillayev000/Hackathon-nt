import React from "react";
import ProfileHeader from "../../../components/template/ProfileHeader";
import Camera from "../../../assets/svgs/camera.svg";
import { PersonImg } from "../../../assets/images";
import { Form } from "react-router-dom";
import TextInput from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
const Profile = () => {
  return (
    <section className="profile">
      <div className="container_profile">
        <div className="profile_img">
          <div className="container_img">
            <img src={PersonImg} alt="" className="_profile_img" />
            <label htmlFor="_source_img" className="_source_img_label">
              <img src={Camera} alt="" />
              <input
                type="file"
                name=""
                className="_source_img"
                accept="image/*"
                id="_source_img"
              />
            </label>
          </div>
        </div>
        <div className="my_profile">
          <h2 className="my_profile_title">Mening Profilim</h2>
          <form action="">
            <div>
              <label htmlFor="ism">Ism</label>
              <TextInput id={"ism"} placeholder="Doniyor" />
            </div>
            <div>
              <label htmlFor="familya">Familya</label>
              <TextInput id={"familya"} placeholder="Sultonov" />
            </div>
            <div>
              <label htmlFor="phone">Telefon raqam</label>
              <TextInput
                id={"phone"}
                type="tel"
                placeholder="+998 90 123 45 67"
              />
            </div>
            <div></div>
          </form>
          <Button type="submit" className="btn__save_profile">
            Saqlash
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
