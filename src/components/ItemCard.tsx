type props = {
  item: any
}

const ItemCard = ({ item }: props) => {
  return (
    <div className='bg-group1091-image px-6 py-6 overflow-hidden bg-no-repeat flex flex-col justify-center items-center itemCard'>
      <div className='w-28 h-28'><img src={item.img_url} alt="" /></div>
      <div className='text-center mt-6 text-xs h-26 pb-3'> <b >{item.head}</b><br />{item.content}</div>
    </div>
  )
}

export { ItemCard } 