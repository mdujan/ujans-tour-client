// import useAuth from '../'
// import axios from 'axios'
import useAuth from './useAuth'
// import useAxiosSecure from '../hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { axiosSecure } from './useAxiosSecure'
// import { axiosSecure } from './useAxiosSecure'
const useRole = () => {
  const { user, loading } = useAuth()
  // const axiosSecure = useAxiosSecure()

  const { data: role = '', isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`user/role/${user?.email}`)
      return data.role
    },
  })

  //   Fetch user info using logged in user email

  return [role, isLoading]
}

export default useRole
