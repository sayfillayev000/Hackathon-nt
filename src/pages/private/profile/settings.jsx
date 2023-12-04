import React from 'react'
import Button from '../../../components/ui/Button'
import Dropdown from '../../../components/ui/DropDown'
import Toggle from '../../../components/ui/Checked'
const Settings = () => {
  return (
    <>
      <section className="settings">
        <div className="my_settings">
          <h2 className="my_settings_title">
            Sozlamalar
          </h2>
          <form action="">
            <div className='form__container'>
              <label htmlFor="lang">Til</label>
              <Dropdown className={"choose_lang"} options={["Uzb", "Rus"]} />
            </div>
            <div className='form__container'>
              <label htmlFor="lang__toggle">Rejim</label>
              <Toggle className={"toggle__lang"} id="lang__toggle" />
            </div>
          </form>
          <div className='line'></div>
          <Button className="btn__save_settings">Saqlash</Button>
        </div>
      </section>
    </>
  )
}

export default Settings