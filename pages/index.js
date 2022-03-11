import Image from "next/image";

export default function Home() {
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
}
