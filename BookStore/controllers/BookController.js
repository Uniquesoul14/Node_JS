import Book from "../models/BookModel.js";

export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const updateBook = async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Book updated", updated });
};

export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};


export const BooksSample = async (req, res) => {
  try {
    const sampleBooks = [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        category: "Fiction",
        publishYear: 1988
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        price: 499,
        category: "Self Help",
        publishYear: 2018
      },
      {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        price: 350,
        category: "Motivation",
        publishYear: 1937
      }
    ];

    await Book.insertMany(sampleBooks);

    res.json({ message: "Sample books inserted successfully!" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};