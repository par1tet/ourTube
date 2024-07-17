import {React, useContext} from 'react';
import { MyContext } from '../../App.js';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import VideoShower from '../VideoShower.jsx';

const SearchPage = observer(() => {
    const videosState = useContext(MyContext)

    return ( <div className='search-page'>
        <VideoShower videos={(toJS(videosState.videos))}></VideoShower>
    </div> );
})

export default SearchPage;