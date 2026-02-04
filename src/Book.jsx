import Title from "./Title";
import Author from "./Author";
import BookInfo from "./BookInfo";
import CoverImage from "./CoverImage";

function Book({ book }) {
    const { title, author, year, genre, rating, description, image } = book;

    return (
        <article>
            <CoverImage image={image} title={title} />
            <Title title={title} />
            <Author author={author} />
            <BookInfo
                year={year}
                genre={genre}
                rating={rating}
                description={description}
            />
        </article>
    );
}

export default Book;