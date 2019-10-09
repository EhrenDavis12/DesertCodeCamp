const _ = require("underscore");

export function CleanSessionData(JsonData) {
  let sessionsData = _.filter(JsonData, obj => {
    return _.some([obj], { IsApproved: true }) &&
      !_.some([obj], { Time: null }) &&
      !_.some([obj], { Room: null })
      ? true
      : false;
  });
  sessionsData = _.sortBy(sessionsData, session => {
    return session.Time.StartDate;
  });
  return sessionsData;
}

export function sort(unSorted, Type, field) {
  return _.sortBy(unSorted, item => {
    return field ? item[Type][field] : item[Type];
  });
}

export function GetSessionDataByTrack(trackId, JsonData) {
  let sessionsData = CleanSessionData(JsonData);
  sessionsData = _.filter(sessionsData, obj => {
    return _.some([obj.Track], { TrackId: trackId }) ? true : false;
  });
  sessionsData = _.sortBy(sessionsData, session => {
    return session.Time.StartDate;
  });
  return sessionsData;
}

export function GetSessionDataByTime(timeId, JsonData) {
  let sessionsData = CleanSessionData(JsonData);
  sessionsData = _.filter(sessionsData, obj => {
    return _.some([obj.Time], { TimeId: timeId }) ? true : false;
  });
  sessionsData = _.sortBy(sessionsData, session => {
    return session.Track.Name;
  });
  return sessionsData;
}

export function CleanStringHTML(word) {
  let returnWord = word.toString();
  returnWord = returnWord.replace(/&#039;/g, "'");
  returnWord = returnWord.replace(/&#39;/g, "'");
  returnWord = returnWord.replace(/&quot;/g, '"');
  returnWord = returnWord.replace(/&apos;/g, "'");
  returnWord = returnWord.replace(/&amp;/g, "&");
  returnWord = returnWord.replace(/&lt;/g, "<");
  returnWord = returnWord.replace(/&gt;/g, ">");
  returnWord = returnWord.replace(/&nbsp;/g, " ");
  returnWord = returnWord.replace(/<p>/g, "\t");
  returnWord = returnWord.replace(/<\/p>/g, "");
  returnWord = returnWord.replace(/<br>/g, "\n");
  return returnWord;
}
