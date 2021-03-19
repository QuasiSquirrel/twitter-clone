import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRetweet, faShare, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const TweetWall = ({ tweets }) => {


    return ( 
        <div className="tweets">
            {tweets.map((tweet) => (
                <div className="tweet" key={tweet.id}>
                    <div className="tweet-main-bar">
                        <div className="user-info">
                            <img src={tweet.user.avatar} alt={ tweet.user.displayName + "'s avatar"} className="avatar"/>
                            <div className="user-wrapper">
                                <div className="name">
                                    <span className="display-name">{ tweet.user.displayName }</span>
                                    <span className="username">{ "@" + tweet.user.username }</span>
                                </div>
                                <button className="follow-user"><FontAwesomeIcon className="icon-follow" icon={faUserPlus}></FontAwesomeIcon>Follow</button>
                            </div>
                        </div>
                        <div className="tweet-content">
                            { tweet.tweet }
                        </div>
                        <div className="tweet-bottom">
                            <div className="icon-wrapper" id="comment">
                                <FontAwesomeIcon className="icon" icon={faShare} /><span className="icon-text">Reply</span>
                            </div>
                            <div className="icon-wrapper" id="retweet">
                                <FontAwesomeIcon className="icon" icon={faRetweet} /><span className="icon-text">Retweet</span>
                            </div>
                            <div className="icon-wrapper" id="favorite">
                                <FontAwesomeIcon className="icon" icon={faStar} /><span className="icon-text">Favorite</span>
                            </div>
                        </div>
                    </div>
                </div>
            )).reverse()
            }
        </div>
    );
}
 
export default TweetWall;