
import { JSON_HEADERS } from './../constants/headers.constant';

  // functions

 export const Search = async (KeyWord) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${KeyWord}&include_adult=false&language=en-US&page=1`, {
        method: "GET",
        headers: {
          ...JSON_HEADERS,
        },
      });

      const payload = await response.json();
      console.log(payload);
      
      if (payload.results) setdata(payload.results);
    } catch (error) {
      
      
      console.log(error);

    }
  };