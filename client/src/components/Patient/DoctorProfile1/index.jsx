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
    <div className={styles.docprofilemaindiv}>
      {userLogins.map((movie) => (
        <div className={styles.maindiv}>
          
            <section className="docprofilediv1">
              {/* <div className='container-mt-5'> */}
              {/* <div className='docprofilediv1-content'> */}
              <div className={styles.doctorprofileclass}>
                <h1 className={styles.formtitle}>DoctorProfileAppointment</h1>
                <form className={styles.docprofileform} id="register-form">
                  <div className={styles.docprofileformgroup}>
                    <div className={styles.docprofilefield}>
                      <p>Name</p> <p>:</p> <p>{movie.name}</p>
                    </div>
                  </div>

                  <div className={styles.docprofileformgroup}>
                    {/* Email : {movie.email} */}
                    <div className={styles.docprofilefield}>
                      <p>Email</p> <p>:</p> <p>{movie.email}</p>
                    </div>
                  </div>

                  <div className={styles.docprofileformgroup}>
                    <div className={styles.docprofilefield}>
                      <p>Phone</p> <p>:</p> <p>{movie.phone}</p>
                    </div>
                  </div>

                  <div className={styles.docprofileformgroup}>
                    <div className={styles.docprofilefield}>
                      <p>Location</p> <p>:</p> <a href={URL+movie.location} target="_blank"> <p>{movie.location}</p></a>
                    </div>
                  </div>
                  <div className={styles.docprofileformgroup}>
                    <div className={styles.docprofilefield}>
                      <p>Experience</p> <p>:</p> <p>{movie.experience}</p>
                    </div>
                  </div>
                  <div className={styles.docprofileformgroup}>
                    <div className={styles.docprofilefield}>
                      <p>Qualification</p> <p>:</p> <p>{movie.qualification}</p>
                    </div>
                  </div>
                  <div className={styles.docprofileformgroup}>
                    <div className={styles.docprofilefield}>
                      <p>Speciality</p> <p>:</p> <p>{movie.speciality}</p>
                    </div>
                  </div>
                  <div className={styles.docprofileformgroup}>
                    <div className={styles.docprofilefield}>
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
