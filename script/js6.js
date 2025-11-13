let library = [];

function addBook() {
    let title = prompt("Enter the book title:");
    let author = prompt("Enter the book author");
    let isReadInput = prompt("Have you read this book? (yes/no)").toLowerCase();

    let isRead = isReadInput === "yes" ? true : false;

    let newBook = {
        title: title,
        author: author,
        isRead: isRead
    };

    library.push(newBook);
    alert(`Book "${title}" by ${author} added to your library!`)
}

