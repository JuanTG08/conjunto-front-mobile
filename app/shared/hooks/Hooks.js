export const Message = (error, message, payload = false) => {
  return {
    error,
    message,
    payload,
  };
};

export const isEmail = (email) => {
  const expresionMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return expresionMail.test(email) ? email : false;
}

export const _length = (value, max, min) => {
  if (value === undefined) return undefined;
  if (typeof value == "object")
    return value.length <= max && value.length >= min ? value : undefined;
  value = value.toString();
  return value.length <= max && value.length >= min ? value : undefined;
}

export const verifyDataObject = (obj, exception = []) => {
  let error = [];
  Object.entries(obj).forEach(([key, val]) => {
    if (!exception.includes(key)) {
      if (val === undefined || val === null) error.push(key);
    }
  });
  return error.length === 0 ? true : error;
};