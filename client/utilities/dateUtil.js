/* eslint-disable no-useless-escape */
import _ from 'lodash';
import moment from 'moment-timezone';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatRouteDate = str => {
  if (_.isEmpty(str)) return '';
  let date = new Date(str);
  let month = date.getMonth();
  let day = date.getDate();
  day = day > 9 ? day : `0${day}`;
  return `${day} ${MONTHS[month]}`;
};

export const getIntervalDayByFormat = (date1, date2, format) => {
  if (!date1 || !date2) return 0;
  // default format
  let formatStr = 'YYYY-MM-DD HH:mm';
  if (format) formatStr = format;
  let fromDate = moment(date1, formatStr).toDate();
  let toDate = moment(date2, formatStr).toDate();
  var days = (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);
  days = Math.round(days * 10) / 10;
  return Math.abs(Math.floor(days));
};

export const formatDateWithTimeZone = str => {
  return `${moment(str).format('YYYY-MM-DD HH:mm')} ${tzAbbr()}`;
};

export const toUTCDate = str => {
  return moment(str).utc();
};

export const formatToLocalDate = dateStr => {
  return moment(dateStr).format('YYYY-MM-DD HH:mm');
};
export const getCurrentLocalDate = () => {
  return moment().format('YYYYMMDDHHmm');
};
export const formatToGMTDate = dateStr => {
  if (_.isEmpty(dateStr)) {
    return '';
  }
  return moment(dateStr).utcOffset(0).format('YYYY-MM-DD HH:mm');
};
export const formatDate = ({date, format}) => {
  return moment(date).format(format);
};

export const minsConvertHours = ({mins}) => {
  return `${parseInt(mins / 60)} hrs ${mins % 60} mins`;
};

export const dateSubtraction = (date, dayNumber) => {
  // date.setDate(date.getDate() - dayNumber);
  return moment(date).subtract(dayNumber, 'days').format('YYYY-MM-DD HH:mm');
};

export const dateEndTime = date => {
  return moment(date).add(1, 'days').subtract(1, 'seconds');
};

export const compareDate = (preDateStr, nextDateStr) => {
  preDateStr = moment(preDateStr).format();
  nextDateStr = moment(nextDateStr).format();
  return moment(preDateStr).isBefore(nextDateStr);
};

export const isDateEuqalOrGreater = (preDateStr, nextDateStr) => {
  return (new Date(preDateStr).getTime() - new Date(nextDateStr).getTime()) >= 0;
};

const tzAbbr = function () {
  var tzName = moment.tz.guess();
  var abbr = moment.tz(tzName).zoneAbbr();
  return abbr;
};
