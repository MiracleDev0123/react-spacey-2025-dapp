import { spacey20251, Group978, Mask_Group } from '../../images/blue'

const PlayToEarnContainer = () => {
  return (
    <div className='bg-group-image-lg lg:bg-group-image-lg  overflow-hidden bg-cover section-custom-top-margin'>
      <div className='mx-auto flex content-center align-middle justify-center items-center py-8 px-12 gap-2'>
        <div className='flex bg-image8 bg-cover mx-auto justify-center items-center bg-image8-play relative'>
          <div className="h-80 grid grid-cols-2 gap-10 content-center ">
            <div className='flex flex-col items-center'>
              <img src={spacey20251} alt="" className='rounded-full w-80px h-80px' />
              <span className='text-2xl pt-5'>SPAY</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src={Group978} alt="" className='rounded-full w-80px h-80px' />
              <span className='text-2xl pt-5'>MetaMars</span>
            </div>
          </div>
          <div className='w-full h-full flex absolute'><img className="w-full h-full absolute z-40" src={Mask_Group} alt="" /></div>
        </div>
        <div className='flex flex-col ml-5 min-h-473px '>
          <div className='flex flex-row mt-5'>
            <div >Play to Earn:<br />
              The economic activity of SpaceY2025 currently relies on two functions - fighting and upgrading. A combat requires players to obtain several turrets (NFTs) in order to proceed. The game will give players 15 free turrets which are not NFTs to allow players “free to play”.
              Players will receive an in-game resource, “gMars”, as the reward for defeating a wave of enemies. gMars can be converted to MetaMars. After that, players can claim their MetaMars to wallets as actual tokens. SpaceY 2025 has a leaderboard mechanism that rewards the highest ranked players with a certain amount of SPAY tokens every month.</div>
          </div>
          <br />
          <hr className="divide-hr" />
          <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col justify-start  '>
              <div className='mt-5'>These are two tokens of SpaceY 2025: </div>
              <div className='mt-2'>SPAY & MetaMars</div>
              <div className='mt-2'>SPAY is a MetaSpace governance token. It allows majority holders to have DAO voting rights. It is used to purchase NFTs in SpaceY 2025. </div>
              <div className='mt-2'>MetaMars is a Token used in SpaceY 2025 for Turret evolution and other features coming in the future. Players are able to obtain MetaMars by defeating waves of aliens in tower defense mode.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PlayToEarnContainer }