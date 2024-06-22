// import Card from './Card'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import useAxiosCommon from '../../../hook/useAxiosCommon'
import Cards from './Cards'
import Heading from '../../../Shared/Heading'
import LoadingSpinner from '../../../Shared/LoadingSpinner'
import Container from '../../../Shared/Container'
// import Heading from '../../../Shared/Heading'
// import LoadingSpinner from '../../../Shared/LoadingSpinner'

const TourType = () => {
  const axiosCommon = useAxiosCommon()
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
  const tourType = params.get('tourType')

  // console.log(tourType)

  const { data: packages=[],isLoading} = useQuery({
    queryKey: ['packages',tourType],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/packages?tourType=${tourType}`)
    //   rooms?category=${category}
    
      return data 
      
    },
      
   
  })

  if (isLoading) return <LoadingSpinner/>
// console.log(data)
  return (
    
    <Container>
      
      {packages && packages.length > 0 ? (
        <div className='pt-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8'>
          {packages.map(item => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Tour packages Available In This type!'
            subtitle='Please Select Other Tour Type.'
          />
        </div>
      )}
    </Container>


    // <div><h2>ujan</h2></div>
  )
}

export default TourType
