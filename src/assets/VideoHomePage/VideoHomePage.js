import VideoResult from './PageVideo';
function VideoHomePage({ data = [] }) {
    return (
        <div>
            {data.map((data, value) => (
                <VideoResult data={data} key={value} />
            ))}
        </div>
    );
}

export default VideoHomePage;
