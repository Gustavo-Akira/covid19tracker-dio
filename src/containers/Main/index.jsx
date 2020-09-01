import React , {memo, useCallback, useState, useEffect} from 'react';
import Api from '../../api';
import { MainContainer } from './styled';
import Panel from '../components/Panel';
import Board from '../components/Board';
function Main(){
    const [data,setData] = useState({});
    const [country, setCountry] = useState('');
    const updateAt = new Date().toLocaleString();
    
    const getCovidData = useCallback((country)=>{
        Api.getCountry(country)
            .then(data => setData(data));
    },[]);
    useEffect(()=>{
        getCovidData(country);
    },[getCovidData,country])
    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }
    return(
        <MainContainer>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}          
                />
            </div>
            <Board data={data} />
        </MainContainer>
    )
}
export default memo(Main);