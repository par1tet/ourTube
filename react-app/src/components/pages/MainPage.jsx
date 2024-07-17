import { React, useContext } from 'react';
import InputSearch from './../UI/input/InputSearch.jsx'
import { useNavigate } from 'react-router-dom';
import { postGetVideos } from '../../api/requests'
import { MyContext } from '../../App.js';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const MainPage = observer(() => {
    const navigate = useNavigate();
    const videosState = useContext(MyContext)

    const searchVideos = async (e) => {
        e.stopPropagation()
        if (e.key === 'Enter'){
            let videos = await postGetVideos(e.target.value)
            videosState.setVideos(videos.data)
            navigate('search')
        }
    }

    return (
        <div className="App">
            <InputSearch
                placeholder={'Ввидите поисковой запрос для ютуба'}
                searchFunction={searchVideos}
                ></InputSearch>
        </div>
    );
})

export default MainPage