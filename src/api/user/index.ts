// import { UserAuth, UserRegister } from "@/types";
// import axios from "axios";

// const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

// export const registerUser = async (newUser: UserRegister): Promise<any> => {
//   const response = await axios.post(`${baseUrl}/api/auth/register`, {
//     name: newUser.name,
//     email: newUser.email,
//     password: newUser.password
//   });

//   const { token } = response.data;

//   return token;
// };

// export const loginUser = async (user: UserAuth): Promise<any> => {
//   const response = await axios.post(`${baseUrl}/api/auth/login`, {
//     email: user.email,
//     password: user.password
//   });

//   const { token } = response.data;

//   return token;
// };

