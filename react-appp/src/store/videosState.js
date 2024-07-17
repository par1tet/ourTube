import { makeAutoObservable } from 'mobx';

class videosState{
    constructor(videos){
        this.videos = videos
        makeAutoObservable(this)
    }

    setVideos(videos){
        this.videos = videos
    }

    getVideos(){
        return this.videos
    }
}

export default videosState