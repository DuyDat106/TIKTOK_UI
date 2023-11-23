import { useState, useEffect, useRef, useCallback } from 'react';
import VideoHomePage from '~/assets/VideoHomePage';
import * as videoService from '~/Services/videoService';

function Home() {
    const [videoPage, setVideoPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const loadNextPage = useCallback(() => {
        videoService
            .getVideoHomePage({ type: 'for-you', page: currentPage })
            .then((data) => {
                setVideoPage((prevData) => [...prevData, ...data]);
                setCurrentPage(currentPage + 1);

                if (data === data[1]) {
                    setVideoPage([]);
                }
            })
            .catch((error) => console.log(error));
    }, [currentPage]);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        if (windowHeight + scrollTop >= documentHeight - 100) {
            loadNextPage();
        }
    };

    const scrollRef = useRef(handleScroll);

    useEffect(() => {
        window.addEventListener('scroll', scrollRef.current);

        videoService
            .getVideoHomePage({ type: 'for-you', page: currentPage })
            .then((data) => {
                setVideoPage((prevData) => [...prevData, ...data]);
                setCurrentPage(currentPage + 1);
            })
            .catch((error) => console.log(error));

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            window.removeEventListener('scroll', scrollRef.current);
        };
    }, [currentPage]);

    return <VideoHomePage data={videoPage} />;
}

export default Home;
