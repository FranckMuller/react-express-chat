import React from 'react';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import isToday from 'date-fns/isToday';
import isThisHour from 'date-fns/isThisHour';

const TransformDate = ({ date }) => {
  let transformedDate = null;

  if (isThisHour(parseISO(date))) {
    transformedDate = <span>{distanceInWordsToNow(parseISO(date), { locale: ruLocale, addSuffix: true })}</span>;
  } else if (isToday(parseISO(date))) {
    transformedDate = <span>{format(parseISO(date), 'HH:mm')}</span>;
  } else {
    transformedDate = <span>{format(parseISO(date), 'yyyy.MM.dd')}</span>;
  }
  return transformedDate;
};

export default TransformDate;
