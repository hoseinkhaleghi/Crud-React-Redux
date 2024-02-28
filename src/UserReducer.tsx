import { createSlice } from "@reduxjs/toolkit";
import { list } from "./list";

const userSlice = createSlice({
  name: "userList",
  initialState: list,
  reducers: {
    addList: (state, action) => {
      state.push(action.payload);
    },
    updatelist: (state, action) => {
      const { id, name, email } = action.payload;
      const update = state.find((user) => user.id == id);
      if (update) {
        update.name = name;
        update.email = email;
      }
    },
    Deletelist: (state, action) => {
      const { id } = action.payload;
      const Delete = state.find((user) => user.id == id);
      if (Delete) {
        return state.filter((e) => e.id !== id);
      }
    },
  },
});
// const favoriteSlice = createSlice({
//   name: "favoriteList",
//   initialState: favoritelist,
//   reducers: {
//     Favoritelist: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

export const { addList, updatelist, Deletelist } = userSlice.actions;
// export const { Favoritelist } = favoriteSlice.actions;
export default userSlice.reducer;
