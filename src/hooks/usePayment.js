import { useMutation } from "react-query";
import { makePayment } from "../services/apiPayment";
import toast from "react-hot-toast";

export function usePayment() {
  const {
    mutate: makePaymentAPI,
    isLoading,
    error,
  } = useMutation({
    mutationFn: makePayment,
    onSuccess: () => {
      toast.success("Payment done successfully");
    },
    onError: () => {
      toast.error("Payment failed");
    },
  });

  return { makePaymentAPI, isLoading, error };
}
