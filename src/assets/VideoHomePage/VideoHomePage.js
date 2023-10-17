import VideoResult from './Video';
function VideoHomePage({ data = [] }) {
    return (
        <div>
            {data.map((data) => (
                <VideoResult data={data} key={data.id} />
            ))}
        </div>
    );
}

export default VideoHomePage;
