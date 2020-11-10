import React from 'react';

const Home = () => {

    const currentTine = new Date();
    const updateTime = currentTine.getHours();
    let dynamicTime = '';

    if(updateTime > 1 && updateTime < 12){
        dynamicTime = 'Good Morning'

    }

    else if(updateTime >= 12 && updateTime < 16){
        dynamicTime = 'Good Afternoon';
    }

    else if(updateTime >= 16 && updateTime < 20){
        dynamicTime = 'Good Evening';
    }

    else if(updateTime >= 20 && updateTime <= 24){
        dynamicTime = 'Good Night';
    }

    return(
        <>
        <div className="welcome">
        <div style={{ marginTop: '0px'}} className="d-flex text-center flex-column w-100 vh-100 align-items-center justify-content-center">
    <h1>Hi Friends <strong>{dynamicTime}!</strong></h1>
            <p className="font-weight-300" style={{ fontSize: '16px'}}>Welcome to our React CRUD application</p>
        </div>
        </div>
        </>
    )
}

export default Home;