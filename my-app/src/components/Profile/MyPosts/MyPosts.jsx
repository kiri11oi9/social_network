import p from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () =>{
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Добавить пост</button>
            </div>
            <Post />
        </div>
    );
}

export default MyPosts;