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

export function sort(unSorted, field) {
  return _.sortBy(unSorted, item => {
    return item[field];
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
