import { image8, Frame_LAND, Frame_LOOT, Mask_Group } from '../../images/blue'
import { ItemCard } from '../../components/ItemCard'

type props = {
  leftSide: boolean,
  name: string,
  items: any[],
  brand: string,
  desc: string
}


const BuyContainer = ({ leftSide, name, items, brand, desc }: props) => {


  let mainClass: string = 'bg-group-image-lg lg:bg-group-image-lg'
  if (leftSide === false) mainClass = 'bg-group1071-image-lg lg:bg-group1071-image-lg section-custom-top-margin'

  return (
    <div className={`${mainClass} overflow-hidden bg-cover ${name}`}>
      <div className={`mx-auto flex content-center align-middle justify-center items-center py-8 gap-1 ${leftSide ? 'pl-10 pr-2' : 'pl-3 pr-10'}`}>
        {
          leftSide && <div className="w-400 flex relative" ><img className="w-full h-full absolute z-50" src={Mask_Group} alt="" /><img className="w-full " src={image8} alt="" /></div>
        }
        <div className='flex flex-col'>
          <div className='flex flex-row justify-around mt-5'>
            {
              items.map((item, i) => {
                return (
                  <ItemCard key={`${name}-${i}`} item={item} />
                )
              })
            }
          </div>
          {
            leftSide ? (
              <div className='flex flex-row justify-center items-center'>
                <div ><img src={brand} alt="" /></div>
                <div className='mx-4'>{desc}</div>
                <div className='cursor-pointer mx-4'><a href="https://market.spacey2025.com/"><img src={Frame_LAND} className="h-126px" alt="" /></a></div>
              </div>
            ) : (
              <div className='flex flex-row justify-center items-center'>
                <div className='cursor-pointer mx-4'>
                
                  <a href="https://market.spacey2025.com/asset/1"><img src={Frame_LOOT} className="h-126px" alt="" /></a></div>
                <div className='mx-4'>{desc}</div>
                <div className='chest-custom-margin'><img src={brand} alt="" /></div>
              </div>
            )
          }

        </div>
        {
          !leftSide && <div className='w-400 flex relative'><img className="w-full h-full absolute z-50" src={Mask_Group} alt="" /><img className="w-full" src={image8} alt="" /></div>
        }
      </div>
    </div>
  )
}

export { BuyContainer }