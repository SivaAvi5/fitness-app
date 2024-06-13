export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'c82df37e71msh1c8a1e31ff261f4p16f38ejsn009b5a597516',
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'c82df37e71msh1c8a1e31ff261f4p16f38ejsn009b5a597516',
    },
  };

export const fetchData = async (url, options) => {
  console.log(url,options)
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

