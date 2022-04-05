// import axios from "axios";
// import { response } from "express";

// export const getMenu = () => {
//   return axios.get("api/menu").then((response) => {

//     console.log(response.data)
//     return response.data.sort((a, b) => {
//       if (a.iceCream.name < b.iceCream) {
//         return -1;
//       }
//       if (a.iceCream.name > b.iceCream) {
//         return 1;
//       }
//       return 0;
//     });
//     return response})
// };


// export const getMenuItem = async (id) => {
//     const getM = await fetch(`/api/menu/${id}`);
//     const tpp = await response.json();
//     setNewM(tpp);
  
//   };
