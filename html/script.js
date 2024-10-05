document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('book');

    if (bookId) {
        const bookInfo = document.getElementById('book-info');
        let bookDetails = '';

        switch (bookId) {
            case '1':
                bookDetails = `
                    <h2>To Kill a Mockingbird</h2>
                    
                    <p>Author: Harper Lee</p>
                    <p>Price: $15.99</p>
                    <p>Description: "To Kill a Mockingbird" is a novel by Harper Lee published in 1960. It explores serious issues like racial injustice and moral growth through the eyes of a young girl in the American South.</p>
                    <p>Publisher: J.B. Lippincott & Co.</p>
                    <p>Publication Date: July 11, 1960</p>
                    <p>ISBN: 978-0060935467</p>
                `;
                break;
            case '2':
                bookDetails = `
                    <h2>Pride and Prejudice</h2>
                    
                    <p>Author: Jane Austen</p>
                    <p>Price: $12.99</p>
                    <p>Description: "Pride and Prejudice" is a novel by Jane Austen published in 1813. It is a classic work that explores themes of love, social class, and individuality in early 19th-century England.</p>
                    <p>Publisher: T. Egerton</p>
                    <p>Publication Date: January 28, 1813</p>
                    <p>ISBN: 978-1503290563</p>
                `;
                break;
            case '3':
                bookDetails = `
                    <h2>The Great Gatsby</h2>
                    
                    <p>Price: $10.99</p>
                    <p>Description: "The Great Gatsby" is a novel by F. Scott Fitzgerald published in 1925. It depicts the opulence and decadence of the Jazz Age and tells the story of Jay Gatsby's quest to win back his former lover.</p>
                    <p>Publisher: Charles Scribner's Sons</p>
                    <p>Publication Date: April 10, 1925</p>
                    <p>ISBN: 978-0743273565</p>
                `;
                break;
            default:
                bookDetails = '<p>Book not found.</p>';
        }

        bookInfo.innerHTML = bookDetails;
    }
});
