import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="justify flex justify-center items-center  w-screen h-screen ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="items-center h-screen  justify-start  w-1/2 flex bg-[#0090CD] flex-col">
       
        <div className="z-0 rounded-full h-[300px] w-[300px] bg-[#87D2EC] absolute -top-240 left-[130px]"></div>
        <div className="z-0 rounded-full h-[300px] w-[300px] bg-[#87D2EC] absolute top-1/3 right-[100px]"></div>
        <div className="z-0 rounded-full h-[300px] w-[300px] bg-[#87D2EC] absolute -bottom-24 left-[140px]"></div>
        <h1 className="z-10 text-[#0009DC] mt-5" style={{ fontSize: 30 }}>
          ASTAR SNS
        </h1>
        <div className="flex items-center">
          <Image
            className="z-10 w-10 h-10"
            src="/unchain_logo.png"
            alt="unchain_logo"
            width={30}
            height={30}
          />
           <Image
            className="w-10 h-7"
            src="/cross_mark_2_logo-removebg.png"
            alt="cross_logo"
            width={30}
            height={30}
          />
           <Image
            className="z-10 w-10 h-10"
            src="/Astar_logo.png"
            alt="astar_logo"
            width={30}
            height={30}
          />
          
        </div>
        <div className="z-10 mt-20 mb-10 text-s items-center flex flex-col text-[#0009DC]">
          <div>SHARE YOUR</div>
          <div>WONDERFUL DAILY LIFE</div>
          <div>ON ASTAR</div>
        </div>  
        <button
          className="z-10 text-l text-white items-center flex justify-center h-10 w-50 bg-[#003AD0] hover:bg-blue-600  py- px-4 rounded-full"
          onClick={() => {
            router.push("home");
          }}
        >
          Connect Wallet
        </button>
        
        <Image
          className="rotate-[17deg] h-14 w-16 top-16 left-[530px] absolute "
          src="/cross_star_6_logo-removebg.png"
          alt="astar_logo"
          width={40}
          height={40}
        />
        <Image
          className="rotate-[30deg] h-200 w-90 top-1 right-1/3 absolute "
          src="/cross_star_6_logo-removebg.png"
          alt="astar_logo"
          width={100}
          height={100}
        />
        <Image
          className="rotate-[340deg] h-100 w-30 bottom-10 left-1/3 absolute "
          src="/cross_star_6_logo-removebg.png"
          alt="astar_logo"
          width={70}
          height={70}
        />
        <Image
          className="rotate-[35deg] h-10 w-10 fill-black bottom-100 left-1/3 absolute "
          src="/cross_star_2_logo-removebg.png"
          alt="astar_logo"
          width={30}
          height={30}
        />
        <Image
          className="rotate-[25deg] h-7 w-7 fill-black bottom-10 right-1/3 absolute "
          src="/cross_star_2_logo-removebg.png"
          alt="astar_logo"
          width={100}
          height={200}
        />
      </main>
    </div>
  );
};

export default Home;
