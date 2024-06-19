import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../../../../hook/useAxiosCommon";


const AllUsers = () => {
    // const { user } = useAuth() || {};
   
     const {  data:users=[] } = useQuery({
         queryKey: ['/user'], 
         queryFn: async() =>{
             const res = await axiosCommon.get(`/user`);
             return res.data;
            
         }
     });
     console.log(users);

    return (
        <div>
            <h2>
              {users.length}
            </h2>
        </div>
    );
};

export default AllUsers;