import { calculateInvestmentResults } from "../src/util/investment.js";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);

  console.log(resultData);

  return <p>Result...</p>;
}
