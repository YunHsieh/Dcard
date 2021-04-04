import React from 'react'
import Header from 'components/Header'
import Button from 'react-bootstrap/Button';

class ChooseCity extends React.Component{
    
    cityListEn = ["Taipei", "NewTaipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung", "Keelung", "Hsinchu", "HsinchuCounty", "MiaoliCounty", "ChanghuaCounty", "NantouCounty", "YunlinCounty", "ChiayiCounty", "Chiayi", "PingtungCounty", "YilanCounty", "HualienCounty", "TaitungCounty", "KinmenCounty", "PenghuCounty", "LienchiangCounty"]

    cityListCh = ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "基隆市", "新竹市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "嘉義市", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "金門縣", "澎湖縣", "連江縣"]

    render(){
        return(
            <React.Fragment>
                <Header />
                <div className="buttonBox">
                    {
                    this.cityListEn.map((item, index) => {
                        return (
                            <Button className="m-2 p-4" key={index} href={'/scenicSpot/'+item} variant="outline-secondary">
                                {this.cityListCh[index]} <br /> {item}
                            </Button>
                    )})
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ChooseCity;