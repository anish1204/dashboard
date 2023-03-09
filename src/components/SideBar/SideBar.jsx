import './SideBar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PaymentsIcon from '@mui/icons-material/Payments';
import LanguageIcon from '@mui/icons-material/Language';
import Image from '../../assets/human.png'
import CategoryIcon from '@mui/icons-material/Category';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DescriptionIcon from '@mui/icons-material/Description';
import CampaignIcon from '@mui/icons-material/Campaign';
import { blueGrey } from '@mui/material/colors';
let iconStyle = {border:"1px solid blue"}
export default function SideBar() {
    return (
        <div>

            <div className="sidebarWrapper">
                <div className="sidebarHeader">

                    <div className="head">
                        <h1>AirNow</h1>
                    </div>


                    <hr />
                </div>
                <div className="manageOptions">
                    <span className="heading">MANAGE</span>
                    {/* <ul>
                        <li>
                        <CategoryIcon /><span className='OptionsText'>Proxy</span>
                        </li>
                        <li>
                        <PaymentsIcon /><span className='OptionsText'> Balance</span>
                        </li>
                    </ul> */}
                    <div className="Options">
                        <CategoryIcon style={iconStyle} /><span className='OptionsText'>Proxy</span>
                    </div>
                    <div className="Options">
                        <PaymentsIcon /><span className='OptionsText'> Balance</span>
                    </div>
                    <div className="Options">
                        <LanguageIcon /><span className='OptionsText'> Online Check</span>
                    </div>
                    <div className="Options">
                        <AttachFileIcon /><span className='OptionsText'> Affiliate System</span>
                    </div>
                    {/* <ul class="list-group">
                        <div className="oneItem">
                        
                        <li className="list-group-item"><CategoryIcon /> An item</li>
                        </div>
                       
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul> */}



                    <span className="heading">SUPPORT</span>

                    <button className="Options"><DescriptionIcon />  Tickets</button>
                    <button className="Options"><CampaignIcon /> FAQ</button>
                </div>
                <div className="help">
                    <span className='HelpCenterHeading'>Help Center</span>
                    <br />

                    <span className='HelpCenterDesc'>Visit Our help Center</span>

                    <p></p>

                    <button className="Start">Start</button>
                    <br />
                    <img src={Image} className='human' alt="" />
                </div>

            </div>
        </div>
    )
}
