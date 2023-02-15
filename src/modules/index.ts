export const getValueByPricing = (value: number | string) => {
  return Number(value).toLocaleString("ko");
};

export const getValueByTimeDiff = (value: string) => {
  const date_sent = new Date(value);
  const time_now = new Date();
  let time_difference = date_sent.getTime() - time_now.getTime();
  let msec = time_difference;
  let yy = Math.floor(msec / 1000 / 60 / 60 / 24 / 365);
  msec -= yy * 1000 * 60 * 60 * 24 * 365;
  let dd = Math.floor(msec / 1000 / 60 / 60 / 24);
  msec -= dd * 1000 * 60 * 60 * 24;
  let hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  let mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  let ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  return { yy, dd, hh, mm, ss}
}

export const getValueByTimeZero = (value: number) => {
  if(String(value).length === 1){
    return 0
  }
  else{
    return ""
  }
}