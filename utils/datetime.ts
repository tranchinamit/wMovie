
import { format, isToday, isYesterday } from 'date-fns';
// export const HH_mm_ss = "HH:mm:ss";
// export const YYYY_MM_dd = "yyyy-MM-dd";
export const dd_MM_YYYY = "dd-MM-yyyy";
// export const TODAY_STRING = format(new Date(), YYYY_MM_dd);

// export const toDateNum = (szDate) => {
//   let _date = szDate ? new Date(szDate) : new Date();
//   return Date.parse(_date);
// };

export const extractDateString = ({ time = "", bOnlyYear = false }: { time: string, bOnlyYear: boolean }) => {
  if (!time) return "";
  const _arrDate = time.slice(0, 10).split("-");
  const _arrTime = time.slice(11, 19).split(":");
  if (bOnlyYear) return _arrDate[0];
  return `${_arrTime[0]}:${_arrTime[1]} ${_arrDate[2]}-${_arrDate[1]}-${_arrDate[0]}`;
};

// const isToday = (someDate: string | number) => {
//   if (!someDate) return false;

//   const _today = format(new Date(), dd_MM_YYYY);
//   const _someDate = format(new Date(someDate), dd_MM_YYYY);
//   return _today === _someDate
// }
// const isYesterday = (someDate: string | number) => {
//   if (!someDate) return false;

//   const _yesterday = format(new Date().getTime() - 24 * 60 * 60 * 1000, dd_MM_YYYY);
//   const _someDate = format(new Date(someDate), dd_MM_YYYY);
//   return _yesterday === _someDate
// }

export const timenDate = (time: string | number = "") => {
  if (!time) return false;
  return isToday(new Date(time)) ? `Today, ${format(new Date(time), 'p')}`
    : isYesterday(new Date(time)) ? `Yesterday, ${format(new Date(time), 'p')}`
      : format(new Date(time), 'PPp')
  // return isToday(time) ? `Today, ${format(new Date(time), 'p')}`
  //   : isYesterday(time) ? `Yesterday, ${format(new Date(time), 'p')}`
  //     : format(new Date(time), 'PPp');
};
