import React, {useState} from 'react'
import { useGetWholeQuranQuery, useGetJuzByIdQuery } from '../redux/quranApi'
import { Link } from 'react-router-dom';


function Quran() {


  const [juz, setJuz] = useState(undefined);
    
  const {data:QuranData, error, isLoading} = useGetWholeQuranQuery();


  console.log(QuranData?.data.surahs);

  // const {data, error, isLoading} = useGetJuzByIdQuery(juz)

    const handleChange = (e)=>{

      setJuz(e.target.value);
    }


    // if(WholeQuranErr) return <h1>{JSON.stringify(WholeQuranErr) || 'Something went wrong'}</h1>
    

  return (
    <div>
        <h1>Quran</h1>
        <p>{juz}</p>
        <input type="text" value={juz} onChange={handleChange} />
        
        {
            isLoading ? <h1>Loading...</h1> : QuranData?.data.surahs.map(s=>{
            return (
              <Link to={`/surah/${s.number}`}><h2 style={{direction:'rtl'}}>{s.name}</h2></Link>
            )
          })
        }
    </div>
  )
}

export default Quran