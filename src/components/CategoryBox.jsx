import PropTypes from 'prop-types'
import queryString from 'query-string'
import { useNavigate, useSearchParams } from 'react-router-dom'

const CategoryBox = ({ label, icon: Icon }) => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams()
  const tourType = params.get('tourType')

  const navigate = useNavigate()
  const handleClick = () => {
    // 1. Create Query String
    let currentQuery = { tourType: label }
    const url = queryString.stringifyUrl({
      url: '/',
      query: currentQuery,
    })
    // url output---> /?category=label

    // 2. Set query string in url
    navigate(url)
  }
  return (
    <div
      onClick={handleClick}
      className={`flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
    
    border-b-2
   hover:text-neutral-800
    transition
    cursor-pointer  ${
        tourType === label && 'border-b-neutral-800 bg-purple-200 rounded-xl text-neutral-800'
    } `}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
