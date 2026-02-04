
function BookInfo({ year, genre, rating, description }) {
    return (
        <section>
            <p>{year}</p>
            <p>{genre}</p>
            <p>{rating}</p>
            <p>{description}</p>
        </section>

    );
}

export default BookInfo;

