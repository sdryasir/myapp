import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSurahByIdQuery } from '../redux/quranApi';

function Surah() {
    const {id} = useParams();

    const {data, error, isLoading} = useGetSurahByIdQuery(id);


    console.log(data?.data.name);


  return (
    <div>
        <h1>Detail of Surah - {data?.data.name}</h1>
        {
            isLoading ? <h1>Loading...</h1> : data?.data.ayahs.map(a=>{
                return <h2 style={{direction:'rtl'}}>{a.text}</h2>
            })
        }
    </div>

  )
}

export default Surah