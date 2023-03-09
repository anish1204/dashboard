import './FeedPage.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '../../assets/9.png'
import PayPalImg from '../../assets/paypal.png'
import MasterCard from '../../assets/mcd.png'
import Qui from '../../assets/quiwi.png'
import WebMoney from '../../assets/webmoney.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BarChart from '../BarChart/BarChart';
import { UserData } from '../../Data'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { useState } from "react"

export default function FeedPage() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Date",
            data: UserData.map((data) => data.userGain),

        }]
    })
    return (

        <div className='Data'>

            <div className="FeedHeading">
                <span className='balance'>Balance</span>
                <div className="ProfileInfo">

                    <NotificationsNoneIcon className='ProfilePicture1' />
                    <img className='ProfilePicture' src={Avatar} alt="" />
                    <br />
                    <hl />
                </div>


            </div>
            <hr />
            <div className="SalaryGraph">
                <div className="barchart">
                    <BarChart chartData={UserData} />
                </div>
            </div>

            <div className="CreditCompanies">
                <span className='PaymentsHeading'>Payment methods</span>
                <br /><br />
                <div className="compaines">
                    <div className="companyCard">
                        <div className="companyName">PayPal</div>
                        <br />

                        <div className="companyLogo">
                            <img src={PayPalImg} className='companyIcon' alt="" />
                        </div>
                    </div>
                    <div className="companyCard">
                        <div className="companyName">MasterCard</div>
                        <br />

                        <div className="companyLogo">
                            <img src={MasterCard} className='companyIcon' alt="" />
                        </div>
                    </div>
                    <div className="companyCard">
                        <div className="companyName">Quiwi</div>
                        <br />

                        <div className="companyLogo">
                            <img src={Qui} className='companyIcon' alt="" />
                        </div>
                    </div>
                    <div className="companyCard">
                        <div className="companyName">WebMoney</div>
                        <br />

                        <div className="companyLogo">
                            <img src={WebMoney} className='companyIcon' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="MainBottom">
                <div className="Transaction">
                    <br />



                    <table class="table">

                        <thead>
                            <th><h6>Transaction</h6></th>
                            <th></th><td></td>Today<td>This Week</td>
                            <td>This Month</td>

                        </thead>
                        <thead>
                            <tr>
                                <th scope="col">Date and time</th>
                                <th scope="col">Payment Method</th>
                                <th scope="col-2">Status</th>
                                <th></th>

                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">17 Feb 2020,16:30</td>
                                <td> <img className='tableImages' src={MasterCard} alt="" /> Mastercard</td>
                                <td>Pending</td>
                                <td></td><td></td>
                                <td>-400.00$</td>
                            </tr>
                            <tr>
                                <td scope="row">14 Feb 2020, 12:39</td>
                                <td> <img className='tableImages' src={PayPalImg} alt="" /> PayPal</td>
                                <td>Pending</td>
                                <td></td>
                                <td></td>
                                <td>-250.00$</td>
                            </tr>
                            <tr>
                                <td scope="row">12 Feb 2020, 09:45</td>
                                <td> <img className='tableImages' src={Qui} alt="" /> Qiwi</td>
                                <td>Done</td>
                                <td></td>
                                <td></td>
                                <td>+1000.00$</td>
                            </tr>
                            <tr>
                                <td scope="row">10 Feb 2020, 12:45</td>
                                <td> <img className='tableImages' src={WebMoney} alt="" /> WebMoney</td>
                                <td >Pending</td>
                                <td></td><td></td>
                                <td>-250.00$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="BottomRight">
                    <div className="TextBr">
                        <span className="Text">Income/Expense</span>
                    </div>
                    <div className="Box">
                        <div className="Box1">
                            <RedoIcon className='BoxIcon' />
                            <div className="BoxData">
                                <h4 className="BoxText">$22,578.00</h4>
                                <p className="BoxTextBottom">Total amount expense</p>

                            </div>

                        </div>
                    </div>
                    <div className="Box">
                        <div className="Box12">
                            <UndoIcon className='BoxIcon' />
                            <div className="BoxData">
                                <h4 className="BoxText">$5,978.00</h4>
                                <p className="BoxTextBottom">Total amount income</p>

                            </div>

                        </div>
                    </div>
                   
                </div>
            </div>

        </div>

    )
}
