/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const CheckoutForm = ({ salary, trainerId, name }) => {
    // console.log({salary,trainerId,name});
    const [error, setError] = useState('');
    const stripe = useStripe();
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext);
    // console.log(user.displayName);
    const [clientSecret, setClientSecret] = useState();
    const elements = useElements();

    useEffect(() => {
        const handlePaymentIntent = async () => {
            try {
                if (!salary || typeof salary !== 'string') {
                    console.error('Invalid salary:', salary);
                    return;
                }

                const parsedSalary = salary.replaceAll("$", "").trim();
                if (isNaN(parsedSalary)) {
                    console.error('Invalid parsed salary:', parsedSalary);
                    return;
                }

                const response = await axios.post('/trainerApplication', {
                    price: parsedSalary,
                    trainerId
                });

                setClientSecret(response.data.clientSecret);
                console.log('Client Secret:', response.data.clientSecret);
            } catch (error) {
                console.error('Error creating payment intent:', error);
            }
        };

        handlePaymentIntent();
    }, [salary, trainerId, name]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        // name: user?.displayName || 'anonymous',
                        // email: user?.email || 'anonymous'

                    }
                }
            })
        if (confirmError) {
            console.log('confirm error')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already Payment!",
                footer: '<p>You can pay this employee next month</p>'
            });
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded')
                console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)

            const payment = {
                email: user.email,
                money: salary,
                transactionId: paymentIntent.id,
                id: trainerId,
                date: new Date(),
                // status: paymentIntent.status,
                name: name,
                status: "success"
            }
            const res = await axios.post('/trainerApplication', payment);
            console.log('payment done', res);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 bg-white rounded-md shadow-md"
            >
                <h2 className="text-lg font-semibold mb-6 text-center pb-10">Provide your card information</h2>
                <div className="mb-6">
                    {/* <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
                        Card Information
                    </label> */}
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="w-full bg-yellow-600 text-white py-3 px-4 rounded focus:outline-none cursor-pointer"
                >
                    Pay Now
                </button>
                <p className='text-red-500'>{error}</p>
                {transactionId && <p className='text-green-500 mt-3'>tnxId: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;