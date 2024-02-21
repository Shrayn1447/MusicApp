'use client'
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'track',
  initialState: {
    playlist: [],
    track_id: undefined,
    track_isPlaing: false,
    track: undefined,
    repeat: false,
  },
  reducers: {
    setPlayList: (state, action) => {
      const { data } = action.payload
      state.playlist = data;
    },
    setTrackPage: (state, action) => {
      const { sound, index, el } = action.payload
      state.track_id = index
      if (sound.src !== el.track.preview_url) {
        sound.src = el.track.preview_url
        sound.currentTime = 0;
        sound.play();
        state.track_isPlaing = true
        state.track = el
        return
      }
      if (state.track_isPlaing) {
        state.track_isPlaing = false
        sound.pause()
      } else {
        state.track_isPlaing = true
        sound.play()
      }
    },
    songisover: (state, action) => {
      const { sound } = action.payload
      if (state.repeat) {
        sound.currentTime = 0;
        sound.play()
        return
      }
      if (state.track_id > state.playlist.length) {
        state.track_id = 0;
        state.track_isPlaing = true;
        state.track = state.playlist[0],
        sound.src = state.playlist[0].track.preview_url;
        sound.play();
      } else {
        state.track_id += 1
        state.track = state.playlist[state.track_id]
        state.track_isPlaing = true
        sound.src = state.playlist[state.track_id]?.track?.preview_url;
        sound.play();
      }
    },
    setTrackBack: (state, action) => {
      const { sound } = action.payload
      state.track_id -= 1
      sound.src = state.playlist[state.track_id].track.preview_url
      sound.play()
      state.track = state.playlist[state.track_id]
      state.isPlaing = true
    },
    playsong: (state, action) => {
      const { sound } = action.payload
      if (state.track_isPlaing) {
        state.track_isPlaing = false
        sound.pause();
      } else {
        state.track_isPlaing = true
        sound.play();
      }
    },
    setTrackNext: (state, action) => {
      const { sound } = action.payload
      if (state.track_id >= state.playlist.length) {
        return
      }
      state.track_id += 1
      sound.src = state.playlist[state.track_id].track.preview_url
      sound.play()
      state.track = state.playlist[state.track_id]
      state.isPlaing = true
    },
    setRepeat: (state) => {
      state.repeat = !state.repeat
    }
  },
})


export const { songisover, setTrackPage, setPlayList, setTrackBack, setRepeat, playsong, setTrackNext } = counterSlice.actions
export const selectTrack = (state) => state.track
export default counterSlice.reducer