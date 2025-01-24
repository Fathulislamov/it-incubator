import type { NextApiRequest, NextApiResponse } from "next";

type Data = BookType[];

const booksDB = [
  { id: 1, name: "name 1" },
  { id: 2, name: "title" },
  { id: 3, name: "name 3" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let books = booksDB;

  const term = req.query.term as string;
  if (term) {
    books = books.filter((book) =>
      book.name.toLowerCase().includes(term.toLowerCase())
    );
  }
  if (req.method === "GET") {
    res.status(200).json(books);
  }
}

// types
type BookType = {
  id: number;
  name: string;
};
