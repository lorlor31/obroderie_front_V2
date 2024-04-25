import moment from 'moment';

/* eslint-disable import/prefer-default-export */

export const dateUtils = (dateString) => {
  return dateString !== null
    ? moment(dateString).format('DD/MM/YYYY')
    : '--/--/----';
};
