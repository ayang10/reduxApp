"use strict"

// Get A BOOK
export function getBooks(){
    return { 
            type: "GET_BOOKS"
        }
}

// DELETE A BOOK
export function deleteBooks(id){
    return {
            type: "DELETE_BOOK",
            payload: id
    }
}

// UPDATE A BOOK
export function updateBooks(book){
    return {
            type: "UPDATE_BOOK",
            payload: book
    }
}