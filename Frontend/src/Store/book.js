import {create} from "zustand"

export const useBookStore = create((set) => ({
    books: [] ,
    setBooks:  (books) => set({books}),
    createBook: async (newBook) => {
        if(!newBook.name || !newBook.image || !newBook.author || !newBook.genre || !newBook.description){
            return {success: false, message: "Please Fill in All Fields."}
        }
        const res = await fetch("/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
        const data = await res.json()
        set((state) => ({books :[...state.books, data.data]}))
        return {success: true, message: "Book Created"}
    },
    fetchBooks: async () =>{
        const res  = await fetch("/api/books");
        const data = await res.json()
        set({books: data.data})
    },
    fetchBook: async (id) =>{
        const res = await fetch(`/api/books/${id}`)
        const data = await res.json()
        set({books: data.data})
    }
}))