import Container from '../Shared/Container'
import { categories } from './CategoriesData'
import CategoryBox from './CategoryBox'

const Categories = () => {
  return (
    <Container>
    <div className="w-[33%] mx-auto mb-14 mt-20"><h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 ">Choose Tour Package</h2></div>


      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories .map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  )
}

export default Categories
