import useFetch from './useFetch';
import TweetPost from './TweetPost';
import TweetWall from './TweetWall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const {data, error, pending} = useFetch('http://localhost:8000/TWEETS');

    return ( 
        <div className="content">
            {pending &&
            <div className="pending">        
                <h1>Welcome to Shape Twitter.</h1>
                <h2>A place for your thoughts.</h2>
                <FontAwesomeIcon className="loading-icon" icon={ faSpinner } />
                <div className="pending-message">Fetching the tweets!</div>
            </div>
            }
            {error && 
            <div className="error">
                <img src="https://i.pinimg.com/originals/18/1c/06/181c065b666891b204e8d7f2ee4e7111.gif" alt="Sad cat"/>
                <div className="error-message">Oopsie, there seems to have been a hickup retrieving the tweets!</div>
            </div>
            }
            {data && 
            <div className="wall">
                <TweetPost />
                <TweetWall tweets={ data } />
            </div>
            }
        </div> 
    );
}
 
export default Home;