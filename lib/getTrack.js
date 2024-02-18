export default async function getTrack(id) {
  const url = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${id}&offset=0&limit=100`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d6c9be4f05msh9649ee51f220299p1018dejsnd4d17d096c95",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };
  try {
	const response = await fetch(url, options);
	const result = await response.json();
    return result
    } catch (error) {
	console.error(error);
    }
}
