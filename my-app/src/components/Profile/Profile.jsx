import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img
                    src="https://celes.club/uploads/posts/2021-11/1637669611_28-celes-club-p-malenkie-kroliki-zhivotnie-krasivo-foto-30.jpg"
                    alt=""/>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;