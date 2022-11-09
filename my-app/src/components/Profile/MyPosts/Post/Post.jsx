import p from './Post.module.css';

const Post = () =>{
    return(
        <div>

                <div className={p.item}>
                    <img src="https://100biografiy.ru/wp-content/uploads/2022/08/4-1.jpg" />
                    post 1
                    <br/>
                    <div>
                    <span>Нравится</span>
                    </div>
                </div>
        </div>
    );
}

export default Post;