import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import * as gameService from '../../services/gameService'
import * as commentService from '../../services/commentService';

const GameDetails = () => {
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => setGame(result));

        commentService.getAll(gameId)
            .then(setComments);
    }, [gameId]);

    const addCommentHandler = async (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);

        const createdComment = await commentService.create(
            gameId, 
            formData.get('username'),
            formData.get('comment')
        );

        setComments(state => [...state, createdComment]);

        console.log(createdComment);
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({_id, username, text}) => (

                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                    
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="Enter username" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
};

export default GameDetails;