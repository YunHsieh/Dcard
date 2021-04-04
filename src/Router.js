import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from 'components/App';
import ScenicSpots from 'components/ScenicSpots';
import NotFound from 'components/NotFound';
import ChooseCity from 'components/ChooseCity'

class Router extends React.Component{

    cityListEn= [ "Taipei", "NewTaipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung", "Keelung", "Hsinchu", "HsinchuCounty", "MiaoliCounty", "ChanghuaCounty", "NantouCounty", "YunlinCounty", "ChiayiCounty", "Chiayi", "PingtungCounty", "YilanCounty", "HualienCounty", "TaitungCounty", "KinmenCounty", "PenghuCounty", "LienchiangCounty"]

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/Home" exact component={App}></Route>
                    <Route path="/scenicSpot" exact component={ScenicSpots}></Route>
                    <Route path="/chooseCity" exact component={ChooseCity}></Route>
                    {
                    this.cityListEn.map((item, index) => {
                        return <Route key={index} path={"/scenicSpot/" + item} component={ScenicSpots}></Route>
                    })
                    }
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;