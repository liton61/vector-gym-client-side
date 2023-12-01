import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useTrainer = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainerApplication/trainer/${user.email}`);
            // console.log(res.data);
            return res.data?.trainer;
        }
    })
    return [isTrainer, isTrainerLoading]
};

export default useTrainer;