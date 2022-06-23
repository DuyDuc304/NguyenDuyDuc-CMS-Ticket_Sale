import { createSlice } from '@reduxjs/toolkit';

export interface userInfo {
    Name: string,
    UserName: string,
    Phone: string,
    Email: string,
    Password: string,
    Role: string,
    Avatar?: string,
}

const initialState: userInfo = {
    UserName: "duc",
    Name: "Nguyễn Duy Đức",
    Phone: "0379439568",
    Email: "duc304@gmail.com",
    Password: "123",
    Role: "Admin",
    Avatar: "https://tinhte.vn/store/2016/10/3893837_1_1.jpg"
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})



export default UserSlice.reducer;
