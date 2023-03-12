import styles from "./styles.module.css";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
const cookie_key = "murari";
console.log("lol")
const Profile = ({ userLogin }) => {
  bake_cookie(cookie_key, userLogin);

  const userLogins = read_cookie(cookie_key);
  console.log(userLogins);

  return (
    <div className={styles.container}>
      {/* <div className={styles.heading}>
		        <p className={styles.title_tab}>Name</p>
		        <p className={styles.genre_tab}>Email</p>
		        <p className={styles.genre_tab}>Phone</p>
		        <p className={styles.rating_tab}>Age</p>
		    </div> */}
      {userLogins.map((movie) => (
        <div className={styles.maindiv}>
          
            <section className="signin">
              {/* <div className='container-mt-5'> */}
              {/* <div className='signin-content'> */}
              <div className={styles.signinform}>
                <h1 className={styles.formtitle}>Profile</h1>
                <form className={styles.registerform} id="register-form">
                  <div className={styles.formgroup}>
                    <div className={styles.name}>
                      <p>Name</p> <p>:</p> <p>{movie.name}</p>
                    </div>
                  </div>

                  <div className={styles.formgroup}>
                    {/* Email : {movie.email} */}
                    <div className={styles.name}>
                      <p>Email</p> <p>:</p> <p>{movie.email}</p>
                    </div>
                  </div>

                  <div className={styles.formgroup}>
                    <div className={styles.name}>
                      <p>Phone</p> <p>:</p> <p>{movie.phone}</p>
                    </div>
                  </div>

                  <div className={styles.formgroup}>
                    <div className={styles.name}>
                      <p>Age</p> <p>:</p> <p>{movie.Age}</p>
                    </div>
                  </div>
                </form>
				</div>
            </section>
          </div>
      ))}
    </div>
  );
};
export default Profile;
