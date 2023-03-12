import styles from "./styles.module.css";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import star from "./star.png";
const cookie_key = "murari";
// import { useNavigate } from "react-router-dom";

const Table = ({ database }) => {
  const navigate = useNavigate();
  //console.log(database);
  bake_cookie(cookie_key, database);

  const databases = read_cookie(cookie_key);
  const URL = "http://localhost:3000/docaptdelete";

  
// function MyComponent() {
//   useEffect(() => {
//     // Call a function here
//     PostData()
//   }, []);}


  //
  const PostData = async (e,id) => {
    e.preventDefault()
    console.log("lolol");
    const res = await fetch("/docaptdelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid");
      console.log("Invalid");
    } else {
      window.alert("Appointment successfully");
      console.log("Successful Registration");
      // navigate("/Patient/login",{ replace :true});
      // history.push("/login");
    }
  };

  


  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.title_tab}>Name</p>
        <p className={styles.genre_tab}>Mobile Number</p>
        <p className={styles.genre_tab}>Done</p>
        {/* <p className={styles.rating_tab}>Rating</p>
        <p className={styles.rating_tab}>Appointment</p> */}
      </div>
      {databases.map((movie) => (
        <div className={styles.movie} key={movie._id}>
          <div className={styles.title_container}>
            <p className={styles.movie_title}>{movie.patientname}</p>
          </div>

          <div className={styles.genre_container}>
            <p className={styles.movie_genre}>
              <p className={styles.movie_rating}>{movie.patientnumber}</p>
            </p>
          </div>
          <div className={styles.rating_container}>
            <p className={styles.movie_rating}>
              <button onClick={event=>PostData(event,movie._id)}>Done</button>
            </p>
          </div>
          {/* <div className={styles.rating_container}>
            <img src={star} alt="star" className={styles.star_img} />
            <p className={styles.movie_rating}>{movie.rating}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Table;
