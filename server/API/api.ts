const url = 'https://api.spoonacular.com';
// const axios = require('axios');
import axios from 'axios';

type Account = {
   username: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
};

export const connectUser = async function (account: Account) {
   const userAccountInfo = await axios.post(
      `${url}/users/connect?apiKey=${process.env.SPOONACULAR_API_KEY}`,
      account
   );
   return userAccountInfo;
};
