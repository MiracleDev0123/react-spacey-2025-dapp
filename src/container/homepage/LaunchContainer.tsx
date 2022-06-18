import { Group1090 } from "../../images/blue";

const LaunchContainer = () => {
  return (
    <div className="bg-lines-image-lg md:bg-center overflow-hidden bg-cover relative">
      <div className="Linear_layer w-full h-full absolute"></div>
      <video
        src="https://d120jow55euzzh.cloudfront.net/ScreenShot_Reference.mp4"
        muted
        autoPlay
        className="video_Reference absolute w-full"
      ></video>

      <div className="container mx-auto mt-20 my-20 ">
        <div className="text-4xl md:text-6xl mt-10 md:mt-28">
          MARS &<br /> BLOCKCHAIN
        </div>
        <div className="text-1xl md:text-2xl mt-10">
          COLONIZING MARS WITH THE
          <br /> POWER OF BLOCK CHAIN
        </div>
        {/* <div className='w-0 md:w-full'><img className='spaceYLogoBlue' src={Logo} alt="" /></div> */}
        {/* <div className='text-2xl hidden md:block'>An awesome tower defense game that offers a rich<br /> gaming experience with multiple opportunities to earn<br /> money</div> */}
        <div className="mt-20 my-20 ">
          <a href="https://game.spacey2025.com/">
            <img src={Group1090} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { LaunchContainer };
