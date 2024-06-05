import { getPosts } from "./data/getPosts";

export default function Board() {


    const postIts = getPosts();

    return (
        <>
            <div className="container">
                {
                    postIts.map((item) => (
                        <div className="note" key={item.author}>
                            <div className="note-text">
                                <p>{item.quote} </p>
                            </div>
                            <div className="note-author">
                                <sub>- {item.author}</sub>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
