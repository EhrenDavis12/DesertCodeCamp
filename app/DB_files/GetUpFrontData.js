import React from "react";
import {
  testGetTracksByConferenceId,
  testGetTimesByConferenceId,
  testGetSessionsByConferenceId
} from "../API/api";

updateCountLoad = () => {
  const countLoaded = store.get(`countLoaded`);
  store.set(`countLoaded`, countLoaded + 1);
};

GetUpFrontData = store => {
  const tracks = store.get(`tracks`);
  if (!tracks)
    testGetTracksByConferenceId().then(results => {
      store.set(`tracks`, results);
      updateCountLoad();
    });
  else updateCountLoad();

  const times = store.get(`time`);
  if (!times)
    testGetTimesByConferenceId().then(results => {
      store.set(`time`, results);
      updateCountLoad();
    });
  else updateCountLoad();

  const sessions = store.get(`sessions`);
  if (!sessions)
    testGetSessionsByConferenceId().then(results => {
      store.set(`sessions`, results);
      updateCountLoad();
    });
  else updateCountLoad();
};
export default GetUpFrontData;
