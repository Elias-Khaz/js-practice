let library = [];

// Add new books function
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

// list all books function
function listBooks() {
    if (library.length === 0) {
        alert("Your library is empty!");
    } else {
        console.log("Your Library:");
        library.forEach((book, index) => {
            console.log(
                `${index + 1}. ${book.title} by ${book.author} - ${book.isRead ? "Read" : "Not Read"}`
            );
        });
        alert("Books listed in the console!")
    }
}

// list only unread books function
function listUnreadBooks() {
    let unread = library.filter(book => !book.isRead);
    if (unread.length === 0) {
        alert("You have no unread books!");
    } else {
        console.log("Unread Books: ");
        unread.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author}`);
        });
        alert("Unread books listed in the console!")
    }
}

// mark book as read function
function markAsRead(title) {
    let found = false;
    for (let book of library) {
        if (book.title.toLowerCase() === title.toLowerCase()) {
            book.isRead = true;
            alert(`You marked "${book.title}" as read!`);
            found = true;
            break;
        }
    }
    if (!found) {
        alert(`Book titled "${title}" not found in your library.`);
    }
}

// remove book function
function removeBook(title) {
    let index = library.findIndex(
        book => book.title.toLowerCase() === title.toLowerCase()
    );
    if (index !== -1) {
        let removedBook = library.splice(index, 1)[0];
        alert(`Removed "${removedBook.title}" by ${removedBook.author} from your library.`);
    } else {
        alert(`Book titled "${title}" not found.`);
    }
}

// main menu
function showMenu() {
    let exit = false;

    while (!exit) {
        let choice = prompt(
            "Choose an action:\n" +
            "1. Add Book\n" +
            "2. List All Books\n" +
            "3. List Unread Books\n" +
            "4. Mark Book as Read\n" +
            "5. Remove Book\n" +
            "6. Exit\n"
        );

        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                listBooks();
                break;
            case "3":
                listUnreadBooks();
                break;
            case "4":
                let titleRead = prompt("Enter the title of the book to mark as read:");
                markAsRead(titleRead);
                break;
            case "5":
                let titleRemove = prompt("Enter the title to remove:");
                if (titleRemove !== null) removeBook(titleRemove);
                break;
            case "6":
                alert("Bye Bye!");
                exit = true;
                break;
            default:
                alert("Invalid choice. Please try again.")
        }
    }
}

showMenu();