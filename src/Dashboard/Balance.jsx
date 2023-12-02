import { Helmet } from "react-helmet";


const Balance = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | Balance</title>
            </Helmet>
            <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-10 mt-5">Total Balance</h2>
        </div>
    );
};

export default Balance;