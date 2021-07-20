export const createTimeStamp = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const MM = pad(d.getMonth());
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  const ms = pad(d.getMilliseconds());
  const stamp = `${yyyy}${MM}${dd}T${hh}${mm}${ss}${ms}`;
  return stamp;
};

const pad = num => String(num).padStart(2, '0');

export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
