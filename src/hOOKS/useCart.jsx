import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from '@tanstack/react-query';
const useCart = () => {
  const { user } = useContext(AuthContext);
 const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3456/carts?email=${user.email}`); // Use backticks here
      return response.json();
    },
    enabled:!!user?.email, // This ensures the query doesn't run if there's no user
  });
  return [cart, refetch];
};

export default useCart;
