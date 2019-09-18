const _ = require("underscore");

function CleanSessionData(trackId, JsonData) {
  let sessionsData = _.filter(JsonData, obj => {
    return _.some([obj.Track], { TrackId: trackId }) &&
      _.some([obj], { IsApproved: true }) &&
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

// fillInMissingData = data => {
//   let defaultTime = {
//     StartDate: "2020-01-01T00:00:00",
//     EndDate: "2020-01-01T1:00:00"
//   };

//   const mappedData = _.map(data, session => {
//     return !session.Time ? { ...session, Time: defaultTime } : session;
//   });
//   return mappedData;
// };

export default CleanSessionData;
