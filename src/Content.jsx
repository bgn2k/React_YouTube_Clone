import profilePP from "../../../BroCode/Website/my-app/src/assets/placeholderPicForProfile.png";
import axios from "axios";
import { useState, useEffect } from "react";
const Content = () => {
  const YOUTUBE_API_KEY = "AIzaSyA6I6DpuM5zqNW5vJCFTOidbAFZF7k7924";
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: "snippet,contentDetails,statistics",
              chart: "mostPopular",
              maxResults: 50,
              regionCode: "IN", // You can change the region code as needed
              key: YOUTUBE_API_KEY,
            },
          }
        );
        setVideos(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };
    fetchVideos();
  }, []);
  function convertISO8601ToTime(isoDuration) {
    let hours = 0,
      minutes = 0,
      seconds = 0;

    // Extract hours, minutes, and seconds from the ISO duration
    const matches = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (matches[1]) hours = parseInt(matches[1].replace("H", ""));
    if (matches[2]) minutes = parseInt(matches[2].replace("M", ""));
    if (matches[3]) seconds = parseInt(matches[3].replace("S", ""));

    // Convert to MM:SS or HH:MM:SS format
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    if (hours === 0) {
      return `${minutesStr}:${secondsStr}`; // MM:SS format if hours are 0
    } else {
      const hoursStr = hours.toString().padStart(2, "0");
      return `${hoursStr}:${minutesStr}:${secondsStr}`; // HH:MM:SS if hours are present
    }
  }
  return (
    <>
      {/* <div className="video-container-grid">
        {videos.map((video) => (
          <div key={video.id} className="videoPreview">
            <div className="thumbnail-row">
              <img
                className="thumbnail"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <div className="timestamp">
                {() => {
                  convertISO8601ToTime(video.contentDetails.duration);
                }}
              </div>
            </div>
            <div className="video-info-grid">
              <div className="pp">
                <img className="img-pp" src={profilePP} />
              </div>
              <div className="videoInfo">
                <p className="title">{video.snippet.title}</p>
                <p className="author">{video.snippet.channelTitle}</p>
                <p className="stats">
                  {`${video.statistics.viewCount} views`} &#x2022; `$
                  {video.snippet.publishedAt}`
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="video-container-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-preview">
            <div className="thumbnail-row">
              <img
                className="thumbnail"
                src={video.snippet.thumbnails.standard.url}
                alt={video.snippet.title}
              />
              <div className="timestamp">
                {convertISO8601ToTime(video.contentDetails.duration)}
              </div>
            </div>
            <div className="video-info-grid">
              <div className="pp">
                <img className="img-pp" src={profilePP} />
              </div>
              <div className="videoInfo">
                <p className="title">{video.snippet.title}</p>
                <p className="author">{video.snippet.channelTitle}</p>
                <p className="stats">
                  {`${video.statistics.viewCount} views`} &#x2022;
                  {video.snippet.publishedAt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
