import React from 'react'; 
import useApi from '../hooks/useApi';
import ImageItem from './ImageItem';

const DisplayGifs = ({ category }) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3yGdpTbeKFSsCW14I3OooH0WwLWezKJW&q=${category}&limit=20`;
    const { loading, data } = useApi(url);

    return (
        <div className='container-gifs'>
            {loading ? (
                data.map(img => (
                    <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default DisplayGifs;