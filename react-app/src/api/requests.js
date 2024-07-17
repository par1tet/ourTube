import axios from 'axios'

export const postGetVideos = async (req) => {
    let videos = []
    await axios.post("http://127.0.0.1:8000/get_videos", {
        "req":req
    })
    .then(r => {
        videos = r.data
    })
    return videos
}