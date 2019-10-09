import uuid from "uuid";
import moment from "moment";
import Constants from "expo-constants";

const api = `https://api.myconferenceevents.com`;
const conferenceId = "14";
const subdomain = "oct2019";
const domain = "desertcodecamp.com";
const login = "jguadagno";
const masterConferenceId = "2";

export function loadData(url, data) {
  url = `${url}?`;
  for (let attributeName in data) {
    url = `${url}${attributeName}=${data[attributeName]}&`;
  }
  // debugger;
  return fetch(url).then(response => {
    // debugger;
    return response.json();
  });
}

export function testGetTracksByConferenceId() {
  let url = `${api}/Track/GetTracksByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetMyInterestedInSessionsByUserId(userId) {
  let url = `${api}/Session/GetMyInterestedInSessionsByUserId`;
  let data = {
    userId: userId, // "22298",
    subdomain: subdomain, //"apr2014",
    domain: domain
  };
  return loadData(url, data).then(response => response);
}

export function testGetAmIInterestedInSessionByUserId(userId, sessionId) {
  let url = `${api}/Session/AmIInterestedByUserId`;
  let data = {
    userId: userId, //"22298",
    sessionId: sessionId //"1000"
  };
  return loadData(url, data).then(response => response);
}

export function updateSessionsInterested(sessionId, userId, interested) {
  let url = `${api}/session/UpdateInterest`;
  let data = {
    sessionId: sessionId,
    userId: userId,
    interested: interested
  };
  return loadData(url, data).then(response => response);
}

export function testGetTimesByConferenceId() {
  let url = `${api}/Time/GetTimesByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testGetSessionsByConferenceId() {
  let url = `${api}/Session/GetSessionsByConferenceId`;
  let data = { conferenceId: conferenceId };
  return loadData(url, data).then(response => response);
}

export function testSearchForEmail(email) {
  let url = `${api}/User/SearchForEmail`;
  let data = { email };
  return loadData(url, data).then(response => response);
}
