import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const quranApi = createApi({
    reducerPath:'quranApi',
    baseQuery:fetchBaseQuery({ baseUrl: 'https://api.alquran.cloud/v1' }),
    endpoints:(builder)=>({
        getWholeQuran: builder.query({
            query:()=>`quran/quran-uthmani`
        }),
        getJuzById: builder.query({
            query:(id)=>`juz/${id}/quran-uthmani`
        }),
        getSurahById: builder.query({
            query:(id)=>`surah/${id}/quran-uthmani`
        })
    })
})


export const {useGetWholeQuranQuery, useGetJuzByIdQuery, useGetSurahByIdQuery} = quranApi;




