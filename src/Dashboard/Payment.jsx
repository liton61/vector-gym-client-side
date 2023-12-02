import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {

    const { salary, _id, name } = useParams();



    return (
        <div>
            <Helmet>
                <title>Vector gym | Payment</title>
            </Helmet>
            <div>
                {/* <h2 className='text-5xl font-mono font-semibold text-center mt-5'>Payment Here</h2> */}
                <Elements stripe={stripePromise} >
                    <CheckoutForm salary={salary} trainerId={_id} name={name} />

                </Elements>
            </div>
        </div>
    );
};

export default Payment;