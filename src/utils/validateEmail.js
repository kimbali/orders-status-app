const emailValidation = (valor) => {
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (emailRegex.test(valor)) {
    return true;
  } else {
    alert("Please, enter a valid email.");
  }
};

export default emailValidation;
