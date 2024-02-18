export default async function getPlayList() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd6c9be4f05msh9649ee51f220299p1018dejsnd4d17d096c95',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const responses = await Promise.all([
    fetch(
      "https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1E35PtHOpoIIDu",
      options
    ),
    fetch(
      "https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DZ06evO0ET6BG",
      options
    ),
    fetch(
      "https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DXcF6B6QPhFDv",
      options
    ),
  ]);

  const playlists = await Promise.all(responses.map(response => response.json()));
  
  return playlists;

}
