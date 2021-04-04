import React from 'react';
import Button from 'react-bootstrap/Button';
import 'css/home.css'

const Home = () => (
    <React.Fragment>
        <div className="buttonBox">
            <Button className="homeButton" href="/scenicSpot" variant="outline-secondary">
                <p>ScenicSpots<br />取得<span className="font-weight-bold">所有</span>觀光景點資料</p>
            </Button>
            
            <Button className="homeButton" href="/chooseCity" variant="outline-secondary">
                <p>ScenicSpotsCity<br />取得<span className="font-weight-bold">各縣市</span>觀光景點資料</p>
            </Button>
        </div>
    </React.Fragment>
)

export default Home;