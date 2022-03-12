import Image from "next/image";
import requests from "../utils/requests";

const Home = ({ trendingMedia }) => {
  return (
    <div className=''>
      <main className='relative'>
        {/* <Image
          src='/hulu-logo-4.png'
          layout='fixed'
          className='object-center  opacity-25'
          alt='hulu image'
        /> */}
      </main>
    </div>
  );
};
export const getStaticProps = async () => {
  console.log(requests.fetchTrending.url);
  const res = await fetch(requests.fetchTrending.url);
  const trendingMedia = await res.json();
  console.log({ trendingMedia });
  return {
    props: {
      trendingMedia,
    },
  };
};

export default Home;
