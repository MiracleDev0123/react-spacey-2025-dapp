import { btnBuyLand, btnBuyLootbox, Group1133} from '../../images/blue'
import { ItemCardMobile as ItemCard } from '../../components/ItemCardMobile'

type props = {
    name: string,
    items: any[],
    brand: string,
    desc: string
}

const BuyContainerMobile = ({name, items, brand, desc}: props) => {
    let mainClass: string = 'bg-group-image-sm md:bg-group-image-sm'
    let title: string = name === 'buyLand' ? 'Land and Buildings' : 'Towers and Lootbox'

    return (
        <div className={`${mainClass} overflow-hidden bg-cover ${name} min-h-screen`}>
            <div className=''>
                <img className="w-full" alt="" src={Group1133}/>
            </div>
            <div className='min-h-screen grid grid-cols-1 gap-1 content-around' style={{marginTop:'-10px'}}>
                <div className='mt-4'>
                    <div className='text-3xl sm:leading-6 w-full text-center mx-auto'>{title}</div>
                    <div className='text-2xl mt-4 sm:leading-6 w-full text-center px-10'>{desc}</div>                            
                </div>
                <div className='grid grid-cols-2 gap-4 content-center align-middle justify-items-center justify-center px-16'>
                    {
                        items.map((item, i) => {
                            return (
                                <ItemCard key={`${name}-${i}`} item={item}/>                                    
                            )
                        })
                    }
                </div>
                <div className='cursor-pointer align-center mb-10'><img src={ name==='buyLand' ? btnBuyLand : btnBuyLootbox } alt="" className='mx-auto'/></div>
            </div>
        </div>
    )
}

export {BuyContainerMobile}