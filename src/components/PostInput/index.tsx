import './style.css';

export const PostInput = () => {
    return (
        <section className="post-input-card">
            <div className="post-input-author-picture">
                <img
                    className="profile-picture"
                    src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/162179-tv-news-feature-rick-and-morty-season-6-release-date-trailer-and-how-to-watch-image1-kbmgzwpsy5.jpg"
                    alt="foto do perfil"
                />
            </div>
            <form className="post-input-form">
                <textarea placeholder="No que está pensando?" className="post-input" />
                <button
                    className="btn"
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                >
                    Postar
                </button>
            </form>
        </section>
    )
}