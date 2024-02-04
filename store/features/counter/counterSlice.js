'use client'
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'track',
  initialState : {
    track_playlist:[],
    track_id:undefined,
    track_isPlaing:false,
    track:undefined,
    repeat:false,
  },
  reducers: {
    setTrackPage: (state,action) => {
      const {sound,index,el} = action.payload
      state.track_id = index
     if (sound.src !== el.track.preview_url) {
        state.track_isPlaing = true
        state.track = el
        sound.src = el.track.preview_url;
        sound.currentTime = 0;
        sound.play();
        return 
       }
    if (!state.isPlaing) {
        state.track_isPlaing=true
        state.track=el
        sound.src = el.track.preview_url
        sound.play()
        
      } else {
        state.track_isPlaing = false,
        state.setTrack = el
        sound.pause()
       
     }
    },
    songisover: (state,action) => {
      const {playListLenght,sound,playList} = action.payload
      if(state.repeat) {
        sound.currentTime = 0;
        sound.play()
        return
      } 
        state.track_id += 1
      if(state.track_id > playListLenght) {
        state.track_id = 0;
        state.track_isPlaing = true;
        state.track = playList.items[0],
        sound.src = playList.items[0].track.preview_url;
        sound.play();
      } else {
        state.track = playList.items[state.track_id]
        state.track_isPlaing = true
        sound.src = playList.items[state.track_id].track.preview_url;
        sound.play();
      }
    },
    setTrackBack: (state,action) => {
        const {sound,data} = action.payload
        state.track_id -= 1
        sound.src = data.items[state.track_id].track.preview_url
        sound.play()
        state.track = data.items[state.track_id]
        state.isPlaing = true
    },
    playsong: (state,action) => {
      const {sound} = action.payload
      if (state.track_isPlaing) {
        state.track_isPlaing = false
        sound.pause();
      } else {
        state.track_isPlaing = true
        sound.play();
      }
    },
    setTrackNext: (state,action) =>  {
      const {data,sound} = action.payload
      if(state.track_id >= data.items.length) {
        return
      }
        state.track_id += 1
        state.track = data.items[state.track_id]
        sound.src = data.items[state.track_id].track.preview_url
        state.isPlaing = true;
        sound.play()
      },
      setRepeat:(state) => {
        if(state.repeat) {
          state.repeat = false
        } else {
          state.repeat = true
        }
      }    
  },
})


export const {songisover,setTrackPage,setTrackBack,setRepeat,playsong,setTrackNext } = counterSlice.actions
export const selectTrack = (state) => state.track
export default counterSlice.reducer