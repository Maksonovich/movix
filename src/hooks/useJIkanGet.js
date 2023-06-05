// import React, { useEffect, useState } from 'react';
// import { fetchJikanApi } from '../utils/api';

// const useJIkanGet = (url) => {

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setLoading('loading...');
//         setData(null);
//         setError(null);

//         fetchJikanApi(url)
//             .then((res) => {
//                 setLoading(false);
//                 setData(res);
//             })

//             .catch((err) => {
//                 setLoading(false);
//                 setError('something is went wrong')
//             })

//     }, [url])

//     return { data, loading, error }
// }

// export default useJIkanGet