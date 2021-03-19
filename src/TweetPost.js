import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const TweetPost = () => {
    const [body, setBody] = useState('');
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:8000/USERS/1')
        .then((res) => {
            if(!res.ok)
                throw Error('Could not fetch user data');
            return res.json();
        })
        .then((data) => {
            setUser(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const tweet = { tweet: body, user }

        fetch('http://localhost:8000/TWEETS', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tweet)
        })
        .then(res => {
            if(!res.ok)
                throw Error('There was a problem posting the tweet.');
            setBody('');
            history.push('/');
            document.location.reload();
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div className="post-tweet-wrapper">
            {user && 
            <div className="post-tweet">
                <div className="post-tweet-sidebar">
                    <img src={ user.avatar } alt={ user.displayName + "'s avatar" } className="avatar"/>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Posting as { user.displayName }</label>
                    <textarea name="tweet" className="tweet-write"
                        value={ body }
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="What's on your mind?"
                        maxLength="240"
                        required>
                        </textarea>
                    <button className="submit-button">Tweet</button>
                </form>
            </div>
            }
        </div>
     );
}
 
export default TweetPost;