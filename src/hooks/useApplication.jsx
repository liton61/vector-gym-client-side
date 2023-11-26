import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useApplication = () => {

    const axiosPublic = useAxiosPublic();
    const { data: trainer = [] } = useQuery({
        queryKey: ["trainer"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/trainerApplication?role=trainer`)
            return res.data
        }
    })
    return [trainer]
};
//     const axiosPublic = useAxiosPublic();
//     const { data: trainer = [] } = useQuery({
//         queryKey: ["trainer"],
//         queryFn: async () => {
//             const res = await axiosPublic.get("/trainers")
//             return res.data
//         }
//     })
//     return [trainer]
// };

export default useApplication;