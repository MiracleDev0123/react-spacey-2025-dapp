import { Group1133 } from '../../images/blue'
import { Linkvc, Ncty, Lancer, Longling, Fenbushi, Neo, Fbg, Draperdragon, Huobi, Okex, Ntc, Ashwsb, Magnus, Bonfire, Formless, Btcchina, Collinstar, Everse, F2pool, Fission, Geekbeans,
    Hobit, Titans, Zonff } from '../../images/blue'
import { partnerBg } from '../../images/blue'

const PartnersArray: string[] = [
    Linkvc, Ncty, Lancer, Longling, Fenbushi, Neo, Fbg, Draperdragon, Huobi, Okex, Ntc, Ashwsb, Magnus, 
    Bonfire, Formless, Btcchina, Collinstar, Everse, F2pool, Fission, Geekbeans,Hobit, Titans, Zonff
]

const PartnersContainer = () => {
    return (
        <div className='bg-partner-image-sm overflow-hidden bg-cover min-h-screen relative '>
            <div className=''>
                <img className="w-full" alt="" src={Group1133}/>
            </div>
            <div className='flex flex-col'>
                <div className='text-3xl sm:leading-6 w-full text-center mx-auto mt-8'>Sponsors</div>
                <div className='mx-auto flex flex-col content-center align-middle justify-center items-center py-10 px-22 gap-4'>  
                    <div className="grid grid-cols-2 gap-3 mx-10">     
                        {
                            PartnersArray.map((item, i) => {
                                return (
                                    <img key={`partner-${i}`} src={item} alt='' className=''/>                                    
                                )
                            })
                        }         
                    </div>
                </div>
            </div>
            <div className="w-full partner-bottom-bg">
                <img src={partnerBg} alt='' className='w-full partner-bottom-bg-img'/>
            </div>
        </div>
    )
}

export { PartnersContainer }