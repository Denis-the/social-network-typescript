import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileDetailed } from "../../types/Profile";
import { $FixTypeLater } from "../../types/utils";

const initialState = {
  profile: undefined as ProfileDetailed | undefined,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<$FixTypeLater>) {
      state.profile = action.payload.profile;
    },
  },
});

export default profileSlice.reducer;
