import uuid from "uuid";
import moment from "moment";
import Constants from "expo-constants";

const api = `https://api.myconferenceevents.com`;
const conferenceId = "14";

export function loadData(url, data) {
  url = `${url}?`;
  for (let attributeName in data) {
    url = `${url}${attributeName}=${data[attributeName]}&`;
  }
  debugger;
  return fetch(url).then(response => response.json());
}

export function testGetTracksByConferenceId() {
  let url = `${api}/Track/GetTracksByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

// function loadData(url, dataObject) {
//   // $('#divTable').hide();
//   $.ajax({
//     async: true,
//     type: "GET",
//     url: url,
//     data: dataObject,
//     success: function (msg) {
//       var ppTable = prettyPrint(msg);
//       // $('#divTable').html(ppTable);
//       // $('#divTable').show();
//       // showSuccess("Completed");
//     },
//     // beforeSend: function (jqHeader, settings) {
//       var text = "Calling service '" + settings.url + "'`;
//       // showInfo(text);
//     // },
//     error: function (jqHeader, statusText, errorThrown) {
//       var text = "Status : '" + statusText + "'<br />errorThrown: '" + errorThrown + "'`;
//       // showDanger(text);
//     }
//   });
// }

// export function showSuccess(text) {
//   showMessage(text, 'alert-success');
// }
// export function showInfo(text) {
//   showMessage(text, 'alert-info');
// }//
// export function showDanger(text) {
//   showMessage(text, 'alert-danger');
// }
// export function showMessage(text, cssClass) {
//   $("#Status").removeClass('alert-info alert-danger alert-success').addClass(cssClass).html(text).show();
// }
// export function alertResults(results) {
//   alert(results);
// }

// @@@@@@@@@@@@@@@@@@@@
//  MasterConference Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetMasterConferences() {
  let url = `${api}/MasterConference/GetMasterConferences`;
  return loadData(url).then(response => response);
}

export function testGetActiveMasterConferences() {
  let url = `${api}/MasterConference/GetActiveMasterConferences`;
  return loadData(url).then(response => response);
}

export function testGetMasterConferenceByDomain() {
  let url = `${api}/MasterConference/GetMasterConferenceByDomain?domain=desertcodecamp.com`;
  let data = { domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetMasterConferenceByMasterConferenceId() {
  let url = `${api}/MasterConference/GetMasterConferenceByMasterConferenceId`;
  let data = { masterConferenceId: "2" };
  return loadData(url, data).then(response => response);
}

export function testGetMasterConferenceForConferenceId() {
  let url = `${api}/MasterConference/GetMasterConferenceForConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

// @@@@@@@@@@@@@@@@@@@@
//  Conference Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetConferences() {
  let url = `${api}/Conference/GetConferences`;
  return loadData(url).then(response => response);
}

export function testGetConferenceByConferenceId() {
  let url = `${api}/Conference/GetConferenceByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetConferenceByConferenceDomain() {
  let url = `${api}/Conference/GetConferenceByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetConferenceForMasterConferenceByDomain() {
  let url = `${api}/Conference/GetConferenceForMasterConferenceByDomain`;
  let data = { domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetConferenceForMasterConferenceByMasterConferenceId() {
  let url = `${api}/Conference/GetConferenceForMasterConferenceByMasterConferenceId`;
  let data = { masterConferenceId: 2 };
  return loadData(url, data).then(response => response);
}

// @@@@@@@@@@@@@@@@@@@@
//  Room Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetRoom() {
  let url = `${api}/Room/GetRoom`;
  let data = { roomId: "60" };
  return loadData(url, data).then(response => response);
}

export function testGetRoomsByConferenceId() {
  let url = `${api}/Room/GetRoomsByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetRoomsByConferenceDomain() {
  let url = `${api}/Room/GetRoomsByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetRoomsByLocationId() {
  let url = `${api}/Room/GetRoomsByLocationId`;
  let data = { locationId: "3" };
  return loadData(url, data).then(response => response);
}

export function testGetRoomsWithSessionByConferenceId() {
  let url = `${api}/Room/GetRoomsWithSessionByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetRoomsWithSessionByConferenceDomain() {
  let url = `${api}/Room/GetRoomsWithSessionByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

// @@@@@@@@@@@@@@@@@@@@
//  Session Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetSession() {
  let url = `${api}/Session/GetSession`;
  let data = { sessionId: "1000" };
  return loadData(url, data).then(response => response);
}

export function testGetSessionsByConferenceId() {
  let url = `${api}/Session/GetSessionsByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetSessionsByConferenceDomain() {
  let url = `${api}/Session/GetSessionsByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetRecentlyApprovedSessionsByConferenceDomain() {
  let url = `${api}/Session/GetRecentlyApprovedSessionsByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetScheduledSessionsByConferenceId() {
  let url = `${api}/Session/GetScheduledSessionsByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetScheduledSessionsByConferenceDomain() {
  let url = `${api}/Session/GetScheduledSessionsByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetScheduledSessionsForLoginByConferenceId() {
  let url = `${api}/Session/GetScheduledSessionsForLoginByConferenceId`;
  let data = { login: "jguadagno", conferenceId: "1" };
  return loadData(url, data).then(response => response);
}

export function testGetScheduledSessionsForLoginByConferenceDomain() {
  let url = `${api}/Session/GetScheduledSessionsForLoginByConferenceDomain`;
  let data = {
    login: "jguadagno",
    subdomain: "apr2014",
    domain: "desertcodecamp.com"
  };
  return loadData(url).then(response => response);
}

export function testGetAmIInterestedInSessionByUserId() {
  let url = `${api}/Session/AmIInterestedByUserId`;
  let data = { userId: "22298", sessionId: "1000" };
  return loadData(url, data).then(response => response);
}

export function testGetAmIInterestedInSessionByLogin() {
  let url = `${api}/Session/AmIInterestedByLogin`;
  let data = { login: "jguadagno", sessionId: "1000" };
  return loadData(url, data).then(response => response);
}

export function testGetMyInterestedInSessionsByUserId() {
  let url = `${api}/Session/GetMyInterestedInSessionsByUserId`;
  let data = {
    userId: "22298",
    subdomain: "apr2014",
    domain: "desertcodecamp.com"
  };
  return loadData(url).then(response => response);
}

export function testGetMyInterestedInSessionsByLogin() {
  let url = `${api}/Session/GetMyInterestedInSessionsByLogin`;
  let data = {
    login: "jguadagno",
    subdomain: "apr2014",
    domain: "desertcodecamp.com"
  };
  return loadData(url).then(response => response);
}

export function testGetMyPresentationsByUserId() {
  let url = `${api}/Session/GetMyPresentationsByUserId`;
  let data = {
    userId: "22298",
    subdomain: "apr2014",
    domain: "desertcodecamp.com"
  };
  return loadData(url).then(response => response);
}

export function testGetMyPresentationsSessionByLogin() {
  let url = `${api}/Session/GetMyPresentationsByLogin`;
  let data = {
    login: "jguadagno",
    subdomain: "apr2014",
    domain: "desertcodecamp.com"
  };
  return loadData(url).then(response => response);
}

export function testGetAmIPresentingSessionByUserId() {
  let url = `${api}/Session/AmIPresentingByUserId`;
  let data = { userId: "22298", sessionId: "1000" };
  return loadData(url, data).then(response => response);
}

export function testGetAmIPresentingSessionByLogin() {
  let url = `${api}/Session/AmIPresentingByLogin`;
  let data = { login: "jguadagno", sessionId: "1000" };
  return loadData(url, data).then(response => response);
}

// @@@@@@@@@@@@@@@@@@@@
//  Time Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetTime() {
  let url = `${api}/Time/GetTime`;
  let data = { timeId: "1" };
  return loadData(url, data).then(response => response);
}

export function testGetTimesByConferenceId() {
  let url = `${api}/Time/GetTimesByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetTimesByConferenceDomain() {
  let url = `${api}/Time/GetTimesByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

export function testGetTimesWithSessionByConferenceId() {
  let url = `${api}/Time/GetTimesWithSessionByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetTimesWithSessionByConferenceDomain() {
  let url = `${api}/Time/GetTimesWithSessionByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

// @@@@@@@@@@@@@@@@@@@@
//  Track Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetTrack() {
  let url = `${api}/Track/GetTrack`;
  let data = { trackId: "1" };
  return loadData(url, data).then(response => response);
}

export function testGetTracks() {
  let url = `${api}/Track/GetTracks`;
  return loadData(url).then(response => response);
}

// export async function testGetTracksByConferenceId() {
//   let url = `${api}/Track/GetTracksByConferenceId`;
//   let data = { conferenceId: conferenceId };
//   return await    return loadData(url).then(response => response);
// }

export function testGetTracksByConferenceDomain() {
  let url = `${api}/Track/GetTracksByConferenceDomain`;
  let data = { subdomain: "apr2014", domain: "desertcodecamp.com" };
  return loadData(url, data).then(response => response);
}

// @@@@@@@@@@@@@@@@@@@@
// User Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetUser() {
  let url = `${api}/User/GetUser`;
  let data = { userId: "22298" };
  return loadData(url, data).then(response => response);
}

export function testGetUsers() {
  let url = `${api}/User/GetUsers`;
  return loadData(url).then(response => response);
}

export function testSearchForEmail() {
  let url = `${api}/User/SearchForEmail`;
  let data = { email: "guadagno" };
  return loadData(url, data).then(response => response);
}

export function testSearchForFirstName() {
  let url = `${api}/User/SearchForFirstName`;
  let data = { firstName: "Jo" };
  return loadData(url, data).then(response => response);
}

export function testSearchForLastName() {
  let url = `${api}/User/SearchForLastName`;
  let data = { lastName: "Gua" };
  return loadData(url, data).then(response => response);
}

export function testSearchForUser() {
  let url = `${api}/User/SearchForUser`;
  let data = { text: "Gua" };
  return loadData(url, data).then(response => response);
}

// @@@@@@@@@@@@@@@@@@@@
// Win8 Service
// @@@@@@@@@@@@@@@@@@@@
export function testGetNewSessionBadgeCount() {
  let url = `${api}/Win8/GetNewSessionBadgeCount`;
  let data = { howLong: "7" };
  return loadData(url, data).then(response => response);
}

export function testGetNotifications() {
  let url = `${api}/Win8/GetNotifications`;
  let data = { howLong: "7", position: 0 };
  return loadData(url, data).then(response => response);
}
