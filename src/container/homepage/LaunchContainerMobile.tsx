import {Logo} from '../../images/blue'

const LaunchContainerMobile = () => {
    return (
        <div className='bg-spacey-image-sm sm:bg-center overflow-hidden bg-cover'>            
            <div className='container mx-auto flex flex-col justify-around items-center' style={{height: '91.5vh'}}>
                <div className='text-2xl mt-20 sm:leading-6 w-52 text-center mx-auto'>COLONIZING MARS WITH THE POWER OF BLOCK CHAIN</div>
                <div className='text-center mx-auto'>
                    <button>
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.0493 26.9251C45.7159 28.4647 45.7159 32.3137 43.0493 33.8533L27.0592 43.0852C24.3925 44.6248 21.0592 42.7003 21.0592 39.6211L21.0592 21.1574C21.0592 18.0782 24.3925 16.1537 27.0592 17.6933L43.0493 26.9251Z" fill="white" fillOpacity="0.7"/>
                            <path d="M60.9917 30.4958C60.9917 47.3382 47.3382 60.9917 30.4958 60.9917C13.6535 60.9917 0 47.3382 0 30.4958C0 13.6535 13.6535 0 30.4958 0C47.3382 0 60.9917 13.6535 60.9917 30.4958ZM4.03559 30.4958C4.03559 45.1094 15.8822 56.9561 30.4958 56.9561C45.1094 56.9561 56.9561 45.1094 56.9561 30.4958C56.9561 15.8822 45.1094 4.03559 30.4958 4.03559C15.8822 4.03559 4.03559 15.8822 4.03559 30.4958Z" fill="white" fillOpacity="0.7"/>
                        </svg>
                    </button>
                </div>
                <div>
                    <img className='w-48 h-20 mx-auto' src={Logo} alt="" />
                    <p className="text-center">
                        Play on PC and Macs
                    </p>
                </div>
            </div>
        </div>
    )
    
}

export {LaunchContainerMobile}