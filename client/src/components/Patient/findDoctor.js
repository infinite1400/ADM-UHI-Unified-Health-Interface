import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import PatientNavbar2 from './PatientNavbar2'
import axios from 'axios'
import Search from './PatientComponents/Search'
import Table from './PatientComponents/Table'
import Sort from './PatientComponents/Sort'
import Speciality from './PatientComponents/Speciality'
import Pagination from './PatientComponents/Pagination'
const URL = "http://localhost:3000/doctor";
console.log(URL);
function FindDoctor() {
    const [page, setPage] = useState(1);
    const [obj, setObj] = useState([]);
    const [sort, setSort] = useState({ sort: "rating", order: "desc" });
    const [filterGenre, setFilterGenre] = useState([]);
    const [search, setSearch] = useState("");
    const data = "";
    useEffect(() => {
        const getalldoctors = async () => {
            try {
                const url = `${URL}?page=${page}&sort=${sort.sort},${sort.order}&speciality=${filterGenre.toString()}&search=${search}`;
                //console.log(url);
                const { data } = await axios.get(url);
                setObj(data);
                console.log(data)
                console.log(obj.database);
            } catch (err) {
                console.log(err)
            }
        }
        getalldoctors();
    }, [sort, filterGenre, search, page])
    return (
        // <div id='findDoctor'>
        <>
            <div className='wrapperfd'>

                <div className='container'>
                    <div className='head'>
                        <Search setSearch={(search) => setSearch(search)} />
                    </div>
                    <div className='body'>
                        <div className='filter_container'>
                            <Speciality
                                filterGenre={filterGenre}
                                genres={obj.speciality ? obj.speciality : []}
                                setFilterGenre={(genre) => setFilterGenre(genre)}
                            />
                        </div>
                        <div className='table_container'>
                            {console.log(obj.database)}
                            {<Table database={obj.database} />}
                        </div>
                        <div className='filter_container'>
                            <Sort sort={sort} setSort={(sort) => setSort(sort)} />
                            <Pagination
                                page={page}
                                limit={obj.limit ? obj.limit : 0}
                                total={obj.total ? obj.total : 0}
                                setPage={(page) => setPage(page)}
                            />
                            {/* <Pagination
                        page={page}
                        limit={obj.limit ? obj.limit : 0}
                        total={obj.total ? obj.total : 0}
                        setPage={(page) => setPage(page)}
                        /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div><Link to='/findDoctor'></Link></div>
        </>
    )
}

export default FindDoctor
