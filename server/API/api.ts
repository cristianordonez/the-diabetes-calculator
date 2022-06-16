const url = 'https://api.spoonacular.com';
import axios from 'axios';

type User = {
   username: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
};

interface Account {
   status: string;
   username: string;
   spoonacularPassword: string;
   hash: string;
}

export const connectUser = async function (user: User) {
   const promise = await axios.post<Account>(
      `${url}/users/connect?apiKey=${process.env.SPOONACULAR_API_KEY}`,
      user
   );
   return promise;
};
