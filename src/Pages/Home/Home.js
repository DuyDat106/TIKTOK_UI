import { useState, useEffect } from 'react';
import VideoHomePage from '~/assets/VideoHomePage';
import * as videoService from '~/Services/videoService';

function Home() {
    const [videoPage, setvideoPage] = useState([]);
    useEffect(() => {
        videoService
            .getVideoHomePage({ type: 'for-you', page: 10 })
            .then((data) => setvideoPage(data))
            .catch((error) => console.log(error));
    }, []);
    return <VideoHomePage data={videoPage} />;
}

export default Home;
