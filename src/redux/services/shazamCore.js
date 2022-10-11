import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders:(headers) => {
                headers.set('X-RapidAPI-Key','5fe8221b2cmshc62b62f1492688dp1d9d5ejsnc517524b5e2d');

                return headers;
            }
        }),
        endpoints:(builder) => ({
            getTopCharts:(builder.query({query:() => '/charts/world'})),
            getSongDetails:(builder.query({query:(songid)=> `/tracks/details?track_id=${songid}`})),
            getSongRelatedSong:(builder.query({query:(songid)=> `/tracks/related_song?track_id=${songid}`})),
        }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery
    } = shazamCoreApi