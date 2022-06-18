import { tokenLogo } from '../images/blue'

type props = {
    item: any
}

const ItemCardMobile = ({item}: props) => {
    return (
        <div className={`bg-cardItem-mobile-${item.color} px-2 py-2 w-full overflow-hidden bg-no-repeat bg-bottom flex flex-col justify-center items-center`}>
            <div className=''><img className='itemImg' src={item.img_url} alt="" /></div>
            <div className={`text-center itemCategoryText categoryTextColor-${item.color}`} style={{marginTop:'-5px'}}>{item.category}</div>
            <div className='text-center itemNameText' >{item.name}</div>
            <div className='text-center itemPriceText'>
                <img src={tokenLogo} alt="" style={{float:'left'}}/>
                <span style={{display:'inline'}}>{item.price}</span>
            </div>
            <div className='text-center itemChainNameText'>{item.chain}</div>
        </div>            
    )
}

export { ItemCardMobile }