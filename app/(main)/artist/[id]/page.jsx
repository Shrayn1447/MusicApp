
export default async function page({ params }) {
  const url = `https://spotify23.p.rapidapi.com/artists/?ids=${params.id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b6bc8f0e99mshf5cf0e0eaf6cb2ap1b43cejsn7d29f7d5a54d",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };
  async function getArtist() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.artists[0])
      return result.artists[0]
    } catch (error) {
      console.error(error);
    }
  }
  const data = await getArtist()
  return (
    <>
      <div>
         <img src={data?.images[1]?.url} alt={'dasda'} />
      </div>
    </>
  )
}
