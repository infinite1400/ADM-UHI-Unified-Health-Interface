import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
const cookie_key = "pandey";
console.log("lol")
const URL = "https://www.google.com/maps/place/";
const DoctorProfileAppointment = ({ userLogin }) => {
  bake_cookie(cookie_key, userLogin);

  const userLogins = read_cookie(cookie_key);
  console.log(userLogins);

  return (
    <div className={styles.container}>
      {userLogins.map((movie) => (
        <div className={styles.maindiv}>
          
            <section className="signin">
              {/* <div className='container-mt-5'> */}
              {/* <div className='signin-content'> */}
              <div className={styles.signinform}>
                <h1 className={styles.formtitle}>DoctorProfileAppointment</h1>
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
                      <p>Location</p> <p>:</p> <a href={URL+movie.location} target="_blank"> <p>{movie.location}</p></a>
                    </div>
                  </div>
                  <div className={styles.formgroup}>
                    <div className={styles.name}>
                      <p>Experience</p> <p>:</p> <p>{movie.experience}</p>
                    </div>
                  </div>
                  <div className={styles.formgroup}>
                    <div className={styles.name}>
                      <p>Qualification</p> <p>:</p> <p>{movie.qualification}</p>
                    </div>
                  </div>
                  <div className={styles.formgroup}>
                    <div className={styles.name}>
                      <p>Speciality</p> <p>:</p> <p>{movie.speciality}</p>
                    </div>
                  </div>
                  <div className={styles.formgroup}>
                    <div className={styles.name}>
                      <p>Rating</p> <p>:</p> <p>{movie.rating}</p>
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
export default DoctorProfileAppointment;
