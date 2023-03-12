import styles from "./styles.module.css";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import { Link,useNavigate } from "react-router-dom";

import star from "./star.png";
const cookie_key = "murari";
// import { useNavigate } from "react-router-dom";
const Table = ({ database }) => {
  const navigate=useNavigate()
  //console.log(database);
  bake_cookie(cookie_key, database);

  const databases = read_cookie(cookie_key);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title_tab}>Title</p>
        <p className={styles.genre_tab}>Speciality</p>
        <p className={styles.genre_tab}>Experience</p>
        <p className={styles.rating_tab}>Rating</p>
        <p className={styles.rating_tab}>Appointment</p>

      </div>
      {databases.map((movie) => (
        <div className={styles.movie} key={movie._id}>
          <div className={styles.title_container} >
            <p className={styles.movie_title} onClick={()=> navigate(`/PatientMain/finddoctor/${movie.email}`)}>
              
               {movie.name} ({movie.email})
            </p>
          </div>
          <div className={styles.genre_container}>
            {movie.speciality.map((speciality, index) => (
              <p key={speciality} className={styles.movie_genre}>
                {speciality}
                {index !== movie.speciality.length - 1 && "/"}
              </p>
            ))}
          </div>
          <div className={styles.rating_container}>
            <p className={styles.movie_rating}>{movie.experience} Years</p>
          </div>
          <div className={styles.rating_container}>
            <img src={star} alt="star" className={styles.star_img} />
            <p className={styles.movie_rating}>{movie.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
