import { io } from "socket.io-client";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  socket: null,
  onlineUsers: null,
}

export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    initializeSocket: (state, action) => {

      const socket = io(import.meta.env.VITE_APP_URL, {
        query: { userId: action.payload },
      });
      socket.on('connect', () => {
        console.log("socket connected")
      })

      state.socket = socket
    },

    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload
    }
  }
})

export const { initializeSocket, setOnlineUsers } = socketSlice.actions

export default socketSlice.reducer