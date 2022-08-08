// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  hash: string;
  time: string;
  amountETH: number;
  amount: number;
}[]

export default function TransactionHistory(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json([
      {
        hash: '0xe551717fe479ba88f82bb871250fd04a9aa9aa085e0a160cfd4a9603d29e7c2f',
        time: "21:56",
        amountETH: 0.000112,
        amount: 77.6
      },
      {
        hash: '0xe551717fe479ba88f82bb871250fd04a9aa9aa085e0a160cfd4a9603d29e7c2f',
        time: "21:56",
        amountETH: 0.0001422,
        amount: 427.6
      },
      {
        hash: '0xe551717fe479ba88f82bb871250fd04a9aa9aa085e0a160cfd4a9603d29e7c2f',
        time: "21:56",
        amountETH: 0.02320012,
        amount: 177.6
      },
      {
        hash: '0xe551717fe479ba88f82bb871250fd04a9aa9aa085e0a160cfd4a9603d29e7c2f',
        time: "21:56",
        amountETH: 0.312,
        amount: 7.6
      },
      {
        hash: '0xe551717fe479ba88f82bb871250fd04a9aa9aa085e0a160cfd4a9603d29e7c2f',
        time: "21:56",
        amountETH: 0.012,
        amount: 87.6
      }
    ])
  }
}
