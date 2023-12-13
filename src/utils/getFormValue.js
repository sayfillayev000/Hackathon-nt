const getFormValue = (form) => {
  const formElement = document.querySelector(`.${form}`);
  const values = {};

  const formData = new FormData(formElement);

  for (let [key, value] of formData) {
    Object.assign(values, { [key]: value });
  }
  return values
};

export default getFormValue;
