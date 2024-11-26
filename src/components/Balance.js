import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Extract the amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate the total
  const total = amounts.reduce((acc, current) => acc + current, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
