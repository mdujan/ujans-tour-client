import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../../../hook/useAxiosCommon";
import useAuth from "../../../hook/useAuth";
import { Link } from "react-router-dom";

const MeetTourGuide = () => {
    const { user } = useAuth() || {};

    const { refetch, data: packages = [] } = useQuery({
        queryKey: ['tourGuideList'], 
        queryFn: async () => {
            const res = await axiosCommon(`/tourGuideList`);
            return res.data;
        }
    });

    console.log(packages);

    return (
        <div>
            <div className="p-10 rounded-b-2xl shadow-violet-800 shadow-inner bg-violet-100 container  mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl text-violet-800 font-bold leading-tight">Tour Guide List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Time stamp</th>
                                <th className="p-3">Tour guide Email</th>
                                <th className="p-3">See-details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {packages.map((item) => (
                                <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{item.timestamp
                                        }</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.email}</p>
                                    </td>
                                    <td className="p-3">
                                       <Link to={`/detailsProfile/${item._id}`}>
                                       <button className="btn btn-outline bg-violet-300 border-4 "> 
                                        Details
                                       </button>
                                       
                                       </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MeetTourGuide;
