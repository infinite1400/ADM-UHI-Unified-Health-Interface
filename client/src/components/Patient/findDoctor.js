import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom"
import PatientNavbar2 from './PatientNavbar2'
import axios from 'axios'
import Search from './PatientComponents/Search'
import Table from './PatientComponents/Table'
import Sort from './PatientComponents/Sort'
import Speciality from './PatientComponents/Speciality'
const URL= "http://localhost:3000/doctor";
console.log(URL);
function FindDoctor() {
    const [obj,setObj]=useState([]);
    const [sort,setSort]=useState({sort:"rating",order:"desc"});
    const [filterGenre,setFilterGenre]=useState([]);
    const [search,setSearch]=useState("");
     const data="";
    useEffect(()=>{
        const getalldoctors= async()=>{
            try{
                const url=`${URL}?sort=${sort.sort},${sort.order}&speciality=${filterGenre.toString()}&search=${search}`;
                //console.log(url);
                const {data}=await axios.get(url);
                setObj(data);
                console.log(data)
                console.log(obj.database);
            }catch(err){
                console.log(err)
            }
        }
        getalldoctors();
    },[sort,filterGenre,search])
    return (
        <div>
            {/* <PatientNavbar2/> */}
            {/* <h1>Hello, i'm in Find doctor page.</h1> */}
            <div className='wrapper'>
                <div className='container'>
                <div className='head'>
                <Search setSearch={(search)=>setSearch(search)} />
                </div>
                <div className='body'>
                    <div className='table_container'>
                        {console.log(obj.database)}
                        { <Table database={obj.database}/> }
                    </div>
                    <div className='filter_container'>
                        <Sort sort={sort} setSort={(sort)=>setSort(sort)}/>
                        <Speciality
							filterGenre={filterGenre}
							genres={obj.speciality ? obj.speciality : []}
							setFilterGenre={(genre) => setFilterGenre(genre)}
						/>
                    </div>
                </div>
                </div>
            </div>
            <div><Link to='/findDoctor'></Link></div>
        </div>
    )
}

export default FindDoctor
