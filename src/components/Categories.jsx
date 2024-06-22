import Container from '../Shared/Container'
import { categories } from './CategoriesData'
import CategoryBox from './CategoryBox'
import { motion } from "framer-motion"
import { FaArrowTurnDown } from "react-icons/fa6";
const newVariants={
  hidden:{rotate:-180},
  visible:{
    rotate:0,
    transition: { duration :1}
  }
}

const Categories = () => {
  return (
    <Container>
    <motion.div className="flex w-[33%] mx-auto mb-14 mt-20" variants={newVariants}
    initial="hidden"
    animate="visible">
      <h2 className="mx-auto  w-[100%]  font-bold text-4xl text-stone-700 " 
    
    >Choose Tour Package</h2><FaArrowTurnDown className='text-2xl mt-8' /></motion.div>


      <div className='pt-4 border  bg-cover rounded-3xl p-4 flex items-center justify-between overflow-x-auto' style={{backgroundImage: 'url(https://i.ibb.co/nnHyJ0F/5570863.jpg)'}} >
        {categories .map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  )
}

export default Categories
