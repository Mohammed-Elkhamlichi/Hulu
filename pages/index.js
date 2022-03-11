import Image from "next/image";

const Home = () => {
    return (
        <div className=''>
            <main className=''>
                <Image
                    src='/hulu-logo-4.png'
                    layout='fill'
                    className='object-contain opacity-25'
                    alt='hulu image'
                />
            </main>
        </div>
    );
};
export default Home;
