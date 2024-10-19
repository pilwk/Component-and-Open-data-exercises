import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RefreshButton } from './RefreshButton';

function DeployToday() {
    const [data, setData] = useState(null);
    const APIurl = 'https://shouldideploy.today/api?tz=UTC'

    const fetchData = async () => {
        try {
            const response = await axios.get(APIurl);
            setData(response.data);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const handleKeyDown = (event) => {
            if (event.key === ' ') {
                fetchData();
            }
        };

        window.addEventListener('keydown', (e) => {
            if (e.repeat) return
            handleKeyDown(e)
        });

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleRefresh = () => {
        fetchData()
    }

    function changeBackground(shouldideploy) {
        const body = document.getElementById('assignment-2')
        console.log(shouldideploy)
        if (shouldideploy) {
            body.classList.remove('false-background');
            body.classList.add('true-background');
        } else {
            body.classList.remove('true-background');
            body.classList.add('false-background');
        }
    }

    return (
        <div className='container'>
            {data ? (
                <>
                    <p className='question'>Should I Deploy Today?</p>
                    <h1 className='message'>{data.message.toUpperCase()}</h1>
                    <RefreshButton onRefresh={handleRefresh} />
                    {changeBackground(data.shouldideploy)}
                </>
            ) : (
                <p>Loading...</p>
            )
            }
        </div>
    );
}

export default DeployToday