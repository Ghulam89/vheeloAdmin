import React from 'react';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import { ACTIVITY_TAG } from '../../../utils/Constants';
import '../../../css/main.6120d571.css';
import Sidebar from "../../../components/sidebar/Sidebar";
import '../../../components/chatapp/chatapp.css';
import    '../../../components/chatapp/Chatapp';
class Home extends React.Component {
     

    render() {
      
        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"login-activity"}>
            <div className="">
                {/* <Chatapp/> */}
                <div id="main-wrapper" className="show">
                    
                   <Sidebar/>
                    <div className="header">
                    <div className="nav-header">
                        <a className="brand-logo" href="">
                            <img
                                className={"brand-title"}
                                alt={"image not found"}
                                src={require('../../../images/main_logo.png')}
                            />
                        </a>
                        <div className="nav-control"
                             onClick={()=>{
                                //  if( document.querySelector(".dlabnav").style.left === "-22%") {
                                //      document.querySelector(".dlabnav").style.left = "0%";
                                //  } else {
                                //      document.querySelector(".dlabnav").style.left = "-22%";
                                //  }
                              const   btn = document.querySelector(".dlabnav");
                             
                                btn.classList.toggle("active")
                                

                             }
                             }>
                            <div className="hamburger ">
                                <span className="line" />
                                <span className="line" />
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                        <div className="header-content">
                            <nav className="navbar navbar-expand">
                                <div className="collapse navbar-collapse justify-content-between">
                                    <div className="header-left">
                                        <div
                                            className="dashboard_bar"
                                            style={{ textTransform: "capitalize" }}
                                        >
                                            Dashboard
                                        </div>
                                    </div>
                                    <ul className="navbar-nav header-right">
                                        
                                        
                                        <li className="nav-item dropdown header-profile "
                                        onClick={()=>{
                                        document.querySelector(".dropdown-menu-right").style.display = "block"
                                        }
                                        }
                                            >
                                            <a
                                                className="nav-link"
                                                role="button"
                                                data-toggle="dropdown"
                                                href=""
                                            >
                                                <img
                                                    src={require('../../../images/male-02.jpg')}
                                                    width={20}
                                                    alt=""header-profile
                                                />
                                                <div className="header-info">
                                                    <span className="text-black">Admin</span>
                                                    <p className="fs-12 mb-0">Super Admin</p>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right  ">
                                                <a
                                                    className="dropdown-item ai-icon"
                                                    href=""
                                                >
                                                    <svg
                                                        id="icon-user1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-primary"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx={12} cy={7} r={4} />
                                                    </svg>
                                                    <span className="ml-2">Profile </span>
                                                </a>
                                                <a
                                                    className="dropdown-item ai-icon"
                                                    href=""
                                                >
                                                    <svg
                                                        id="icon-inbox"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-success"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                        <polyline points="22,6 12,13 2,6" />
                                                    </svg>
                                                    <span className="ml-2">Inbox </span>
                                                </a>
                                                <a
                                                    className="dropdown-item ai-icon"
                                                    href=""
                                                >
                                                    <svg
                                                        id="icon-logout"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-danger"
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                        <polyline points="16 17 21 12 16 7" />
                                                        <line x1={21} y1={12} x2={9} y2={12} />
                                                    </svg>
                                                    <span className="ml-2">Logout </span>
                                                </a>
                                            </div>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="chatbox ">
                        <div className="chatbox-close" />
                        <div className="custom-tab-1">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link " data-toggle="tab" href="">
                                        Notes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " data-toggle="tab" href="">
                                        Alerts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="">
                                        Chat
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade  active show" id="chat" role="tabpanel">
                                    <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box ">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect
                                                            fill="#000000"
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                        <rect
                                                            fill="#000000"
                                                            opacity="0.3"
                                                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Chat List</h6>
                                                <p className="mb-0">Show All</p>
                                            </div>
                                            <a href="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <circle fill="#000000" cx={5} cy={12} r={2} />
                                                        <circle fill="#000000" cx={12} cy={12} r={2} />
                                                        <circle fill="#000000" cx={19} cy={12} r={2} />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        <div
                                            id="DZ_W_Contacts_Body"
                                            className="scrollbar-container card-body contacts_body p-0 dz-scroll ps ps--active-y"
                                        >
                                            <ul className="contacts">
                                                <li className="name-first-letter">A</li>
                                                <li className="active dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            {/*<img*/}
                                                            {/*    src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"*/}
                                                            {/*    className="rounded-circle user_img"*/}
                                                            {/*    alt=""*/}
                                                            {/*/>*/}
                                                            <span className="online_icon" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Archie Parker</span>
                                                            <p>Kalid is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Alfie Mason</span>
                                                            <p>Taherah left 7 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="data:image/jpeg;base64,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"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>AharlieKane</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wgARCACWAJYDAREAAhEBAxEB/8QAHQAAAwEAAwEBAQAAAAAAAAAABgcIBQIECQMBAP/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/2gAMAwEAAhADEAAAAPQ6/ENJ/ej+7v7uH7Sg6l8wKSC1trVLpX7vgJQ+XouNUrrXvlRbGYAoIK/12nJ7bxZjWOUdy7uM8jpv40CN0qyQiZJaENOMuuAV9SyMPSdixcCLjZgKMhH6m66Pc+LNq0+1e5d3wtHkzBZEHLIR2Hlm77IWaI7DHirTbqYTwV6ysl0XoQMOBTXs9lHnL7nxzHgHbrb87se8eCgGPgFijPPeyc6z+zTi8q+2wtPDmWiWsv0nw9DJXMAsgVVrO1R/Q955CgGc/cFf5RyM4njikwcI67rw/WuRVgq6nfKAY08fWGSOXsi1s0rBz2120FUk5zJOdj2/l6Cdz9uvY1Cee6rMY048T02RlbxFajozNcqkUe+k8nRirc/RLoAOk8thcMBVB5bajlTe38gSHV59VZlt5E5WiE9B4jq9brO9dnDz9az6wJVgwbVk1lTPCK0MlkBOJSHqbCYtv1vl+bavO9ZaAfy1WLrjY31nXPgerdCTs+aOZYcV1BG1ThmB3KXNk/QTGcUdoU7ME1StjaQ6ZBGVhxiK0kOoFiznVvRr4fq6exN5G6OW6ohvd2cKyX0slaM5VvYGmtDDWDHFYSz81LepxdXpb081C6mWbJ6Aq5mnWV6KjsL0i00M7ov3fAzv3JDJOtiJtnP9Q/L7SeYGsiwSCJOrZGbbO+4zzvoKgDyW7Qoc5mdoLVCec9jrUu1gNPMoFg/jQLs4FBZb9z+f11UwJbsxrgmQHjaFSbQidNnNAX0PmcAo5m9gZXphepNQMtALJjYMBbvmcw4GyhoehaNgFimWEoek3H+lXdparjpKGwUUWdqhFZrYXard05Hoq0S0NWOUPWjXd8rytFaY2s0mFiBkDqbUHVD+XIXaBYUPpoqhFntoB1n6S30cr73k6zdO48zb0u6TzLzju+b+1YdmTsOcy7FMB5uqHpF/JFPRehwFdewQsRMwnsrvdUgcRhYiXatzF9EYDNGbSSn1cL5zU4zNavKjYuikeFWZZReX4WaIILRGVZiLLgzfXu43GIso9qC3BWbXmkV52nCr6HaoQ+T06IspQjyhxcW7IvP2p6HKElGVDjvEsTz65YEwy0n9etd9eqwgZjQ0POttXbEQ/S0aOZTd7ChIShkUMXUI2L1ZUwqhEipVsHtPGa9O4+M1vqJqAw5Pz34hJXPIA2T0aiMm3jrmBKG1xTjfvtFnJcYSMk1IvzVbssgPwlD5R30ZYUYxhRvmaMbHHgtLH+doU3cLVZA3mF9Po//EAC4QAAICAgAFAwMEAQUAAAAAAAMEAgUBBgAHERITFBUhIiMzCBAkMTIWICUmQf/aAAgBAQABBQGqzjwY/wBloTA1ty5rUPLam3Dfdn3t+Ae7gA4w4sYS7Ka6dQnRWK1oDXx/K0fsl/ys5dFq3oa0WWFgVCTvSj/XGOM8c0duT07Wbm5sNgs149+Vl4nyvQNT4Q1llgBahhA9S4asPqphOCDj7B/8rafRarx5rJYUohpOkFB/1j9pfGP1JbZO43WOMylTUMneKvWlluK+sAHgNdGcrzWMMDslWKI/LK1wq4PH8dr+7mf8eq7yWAcniPX2O9YefjH7WT0EEr98lteUy/nZoYxhBQY5BEP6UoY4mGOY8wafJuNMcaXsaw+Sotf3dy+xT5J64ZiwhrGyd3CVj3jw38Td6cc29i9s0iH1Yog4Dirn0zV/MYQ7YhaiHg/MNAzP/PshG4xp3MXSdnYtss/Ob/PQFLKeG4lkOGo62x0TryjhgE8Yf7wi557QUyUI90CeUWV1WohoLu+XdTuV2jO0wWKxi2s1ntSe2WZ+aCfg2vlaF5rghBk42P4BSEmNrDYh4pkxgXj04/8ANttI16O/2k7K5QH5G5QxKPtx2m9a1SQKZcnoNgWxh6tjroAFiPMxc8Aej41m/sIyX69mz/AaSWYlkSEOFGRYEJoeeJMY6c1rzCajx/UtVEeszH7Ba3BZiRBY9Ndz8FlozBWq2yaKm0qSBBc+AeSk5YVjdy16KNeptX4aSX1GjjqXdwKLobbKfEdn6i5rWxp8Z65nUD7VrMvZjVnuwqBImWu0fU2uhGdVQjXwItXBkGfO2H/UeVG0Yrk4Rzke2Y6BoO3M2gxLwrE5S1SxJwBDAic1D91vGHyKGRJXee2WvnwQdI7J5bYLCxq7Cv2baDA0vV7WxwBMSJedOwgdd5YgMXbcijDG3fioO3Mnu6eV7EcJ1t6GI2L8UJbAaVrsIh47xE6hsTYYPSvzSZpbPC5SmFYt6/VozxXL9Ic0eYgNKQp5mab0HCutWqzI2Ftu/HQxjxZTlmQ4cCxnHC2M9SpehtiglEjPcMJB9CePEMUAoMjJr5Ica36sQ7G8fqVdsfPdXaJMglDMhPaRXjhUWngveAabdVIrWcsyi3jHFaJ6zY13kvagFzLvaZviqZ80Co5MnL6iZ+VdDLhiCNZ5gCQ9LDdXpiTLP5WzmWNDpq1kX+o3NoVrgmzJRo72Ng5fM7PmtS9YTW23qjGT2VtjZdfivF3OFmaF7yisYQC5OCxVtOJNNqgdgUVkbI4b/Yfal+NCWBlp7aJUdUWYVqFmpOxPKNajUTIujXrQwStQwPivxJJ7cuikLDMzHV8yQrccZWGQlCOgtCKE1ppZsFu8v6Xb5zbajjuzCP3aVbLTNs8j7bo6GM5Wlm4tSH7M1Ae04FemdgTzOp3goX9YDMBHXGBMGbhCRSyKSKS/qOP0++fFmZZTOOcyUpLyPgZFgzMzTrTi8ovjK04+11lKCFchVS82EFs4DSh8qR1MzRLUuWWhF7xSWzKGDkHIAJQnKtlnz8i1ewE+mI8yfHinmvKOKo8gMBbzk/LePujSxPdrY7Hurqn8nK6nYtqBfJw1HsT1YMsa5zBoo1V0AX2JkyM2MYwUwjKF5GELKgjmROObxcjFOUYSmbw2Kf5NJxKt12uPNVAWIJxjP0IllMZFq08jsdgzkNJRRwvqfMlcbagJSgQ5cmWMTGWqtKLo6aoVoEBdcQ5pGkY7OOjRcd2aCflhUty9gWsJ1KGuoRr0V893H//EAD4QAAEDAgMGAwUFCAAHAAAAAAEAAgMEERIhMQUTIkFRYSMycRRCUoGREKGxwdEGFSAkM0NTYjRjcoKDovD/2gAIAQEABj8Bb6fwvPZB9T/N7UqW3paFjsz/ALvPutTq7b9e+b/HAMoYh0a3/wCKu+7vwCuMCZWt8tsLh07rwJLjmw6H5Iyw8Lm+dh1b/A5OY42F9UA2Qpju38NRterN3Dggj/ySHRqn2vtWczVNQ673H7gOwXpmVhYQ7vyXAy6ljniwscOicyVnA0/T5plVFnh81vfYmVNO7FHI27ftcnNBtmmtEvJRtHT+C6/cEM/8psZmDCNN+7zH5BWGZKEGDgHn/wBnLhYr2ustE4shxJ12OdCD4kfNo6hHZb34oJRvYHdeqv2+xydujY3QGK5TM1r9s9a88MDHPPyF1XbRmdifU1D5XHuXfoi+1w1C7VcLJZoozsiyHvBexQhz5qWUOiHUErxGFj25Ob8P2FO3PVDmVu76IG/JarVbVkD7EwboerlJKeijxZGQ5rAsN0c1vHuAaNT0XsOwqSbadQcvC8g+aL9pbDp2ROFiGz4n/RVD6cDwX8GIZYXqofXPDppn3cRlyyV0U7djmg7W63pagPse/oEzYmLV+J9imRjV7rKmbBa56oyn9qIKZ4biwujTYnVmz9pU9+PdygPA6p1Nez1LBV33ErCJLG3CvZtjTs2RREkRezQ7x9hoXHnmqrZtbtJm1Nn07QW1+6MeNx90NP06KmqGi3tEFvm0p1e+O1KyPjd1IPLujusWG+V0U4sFxdXedUzLkiipX/65KQudfO6hHw5lQknQgfcnB0RnbbgHIH05qtZXx0sD6i26nay8sWeLL8OyiwTPdHfCSeabzBFljdALA5WAyWBmi2LWN1bO9v3KGKGXBSb2Nzg3mSUOmaKeLarxCrXR4wjmpeMXspJSfMbqaX4RZMd/zAmPsLhWZ0TYfexYvRMbrYLdVMWEHRYmlUU3+Ks/EFfu2miL3Gz/APtBUUb5gZcI9EfRPbbMrxVYzjHbIXWLea91/U4k8PffeHCEXFSv5KnA03iaCUXOU9XDHvA4YQ2+ndGKulLWy+GzdG2adFI172Ri3ESSPmU+OJ+JnJPdzbPER9VPQ00IFbUSDdzjVg5hRPe7FdgJJ5o+icDrdDHlZXldiz6rIoB70ykHJt0b8yhGBmeIqCInNrC/6pjwcwn0IfZxUsMNIZGsyxYsvVPjhnbun8r2t6cwmVe3NoTPpsiWY3AP7d/VEU7AyN3ujRvZR/srSPxOpB7RV291x8rPzVJTM8skgv6L/pyATkfiVtLK91beD6rE14PzU8r7nA0N+5EnRqxOy3jvoE545cI9Fh9x+vqhOxyc97s00sp4i5vvYQrY8l7LRhsm1ahvgsOkQ+N35BVFTVSulmqnOe979XnqVHI7CZ5+ouMPbumTsddrxknIuHmQyt9mpVsy5PdWtLGTtLmE87tshEG5Y+JXHJgt+aI7pkndNy1W/gLmqz2g9DdOMe7a/qc7KWaeZ0ribve7UqN8eRxiypqyLNhdyT67a1UKfELwtdkL87+qdupNxc5XF0KuSJskbswWfouHr9go9nUU1TM7RkTblfvT9rtpU2zaZlnGJrw59u55I7E2Ps+EQUjvCqWkuc75lSwzm8sfEL8wnOY2+FuL1CdfqiOhW6d54zZYcOVkS1mikL38lI/m46pmH3TZOrtr1G7pmwe0wg+85ps5Sh0oFJQ+VrRbERzPyTa+NobDhuc/KUJp5XOaBw35JlXsB8UM4ymDvK4ciiXuwQx+d35DusOyrU3TBr9VgqqqR7XebE7Irfxt1/FNqYMiMnBSRuHDh4f0Uj4hlizCc+J+Y5dk1+eCTn3Quc7I4UWcyjfVDFo7L5plC6Tggkxtb0xZOUkErcLpHY79W6BU9HTuIabBzeV0ymHnIUeZBIUdJCDhac+56rBzHNMgm8smixzSWb7zk97I8DXm7QdbJgGT8Qd6WTnszbJZ31RFrXQhywF4OZ5jmvbaB5cwOwvFvK7oUfEAKyDi0c+Sl7FYOuaDBJgD7KCLZTiTgEbndwNfqvb6jSJvPmibndtKEUfuhMncMmvUb7XB+FOnib4tP4jFBWZkYQU+qqcyPKOSZHF2xen6pzmjKFlyfwC4tAjF9FtJg/4f2OHH0MmLI/RHe0kTv/G0oywMa1sPICyLmC7Xrw/7YzUERH9/JRRt4pHv/NQ7Oj/rTDE7s1b5+RIuU+rnya82YOyHDYg/eohq5ozUzLZFpCqWUjGufTB7MPxWOqe1wLSDomnVzinNtlYD1UrCPNoi0ajJ36ralT8RiZ888lc3+q2jPM/PDgb80Iu+Snj5le1REB0bsuybNMRgp2mT5oy2GE/+o5JuzKc/y8PFO8dOiLI8oohhatCR5in054nBSuNm5G6kxM8OZ8j/AL08xf0ZeJpW+txM0/Vbl2icweaM5dwmVsN8L+n4FVE7+Fks2JuXMCyLk6FnlPnHdNkcL4MrISDLEOL1Vh5ZNPzVdI8WdUYWNdzsTy+iipqNodW7Q0Hwt+JN2Ls/jndnPL3Tadli/VywE9W/RFrfecQqyQe7EUOEG0QW9flIPeCfHfJ7SfnZCf34nYPVRShvmsCnUsrvC3jGyW1sXWy75ql2bRtwwRjCGj8fVOc43yRadA66cTmGcdu6MnM5o4tAQD69QqOnkza6pd6ghN2lh3lVtHwYnHSFvIJ1W9+9nfxOeU+eTMuNl//EACYQAQACAgIDAQACAwADAAAAAAEAESExQVFhcYGRENGhscHh8PH/2gAIAQEAAT8QUQjQmn89kd6YihdygFx/9zK/8ueyqDa/RhboB7INbYayDEW2DeEap0xBh21KZu1ENx+cPJ2PDC80lS9R058dLXj913Ac6O4ybaiI0/jlFhSF8qXabx/2Z9CNLwXQYCOwUubaB5XQT4jNQ+qr7EqRuQLp+VEgqjeQ8VBatC2xA7ODF6dowGcj2kI0M/jk9jhleWFI6fhny8ulrvLQSC7uJFwGZ15og/hi5FX9XBM2Rxu5PZAcTRCK3FhTgTY+DQQGjCjtLhmdOOiuq6j+qdCHkuFle4DCdUyFzvUP30WDkECg0+2GY92UeYhwa78OYfnRmCBLONbBFiyKEHmJTrMP8kXI3+Vc59UI6ioSpjGdQQNvcf8AOV6FqENGGroA5WFxnrLQJ6dMF0kX8rzDnKp3lXDHQoWFxT3gl8tUQ2lGAUAVEV3k7aiK8PTyrUvBYvoTFqrhlKljUM4aISi+1aAbV4O2HnO0oJkpcaF8p6PaKf0mWqggopQ+KptlCXQZNT5KKV11ZU7AEsF0tkbjoCJL4iG7Rxu4Gs6/ouhjam4SccA5Uq2vZRB4AQApaxBrEDTeibwZSDk2BUsY2BtZbSZMS4TqFLLvKQGNDBsOlpLQhUWyXDp963mRg94dRDE6CM2ooZpS2Wg3jKysVOMAitBhICYYPSrUiBXYn+tEZkx/tZl/hv8Aq2ylSETkZ2/ygxKdBxpYAqu1gisZnHqOUtqawDXSJpllkDXCFqgJg4HNUBfogrEbPu0aOiPRTNnTRcKILVsZAtqpT1oJ8XuKV6YJBCqg+U33H0BAh1/4mIhq+ecKy9uP6WAdu2v0r8IacFLS5gNUQvBcMyzr35i91B61bh8wMBPEfo78NHeVuaMlfTDJ1g23I0j32TDNbBL7ZL53Mctalc8oprcrDcfMAV4JZvbhRBAt9hES4XfbqXyzo+QKni+mmILl742EUaBMhMBELFKIykucmh2y2drKMNnlR7MJL/7+ONNHNbGnORl1Xukna+bu49rTDDuqMBXhsNUu1B4VUZuClUq24m2u/TLrmgOkIGwX0HT7aYlwOfal8OoZU29RFfgd0BeBlIQ/ga7OFBZe6nwXh6kvDtSgr6aTVDgISQldbR8hYB9sfEMZhWHQxHYPU8EuIiLNfu5VhMnMuw30IoYBVFsx5BFd6ay6Yvf9kywpL6FqpqSfymH63ATtcB1wT+HrmqEzgYsEBWz8sjHr07oKh+2/NzD/ANy5cj2Zbl3UrwYCiPMeWkbzmZJKiKrec2exsir0S1hF+MHLIZ5GyaLqsuLppeYmF8bMYj1ZM4MzCsN1j8uAFwDBraKC7oV+4ePbcGs8YKVSl2kp2+AKsV+ipjvOaiwqp24t2+sAURwgU8gdJ5Lhxo9UXN244R4Lg0HE6kUJ5Ep17BjW1oJffHJtHbBgrkUSvcMbJj1exdyqYA5ViX2tDXTBDYvL0bKYpyEeoi1nyQ8yxDS5fxhKBy77u4hG8d+m24LzhUzAKExyIsZmSXAIzdt5B3sv0wnji9X4DsTDRBRqEla9GGyRRvF+A5EHlg1JFAI1isP2P1vRhsHzcRPqdqrjvXEHi4KwbiW7qm4mb4BGjFpaOeIqfsJ1lYSuJ98wmn9JVu43y2qyiRKtKsWxPNR0oQq5bm/IlepWlMAdJ2MrYQCo/h1Eq2KmfsLRkF/WHCcTethlf9fK1o9NDFMvfcSnuicWjvoxZ4dwTUMH03CIvZrf7DYi2W1d+fjGItsMUMtJB7ERb3/oLgabTzU24mbh5qXdL0uGoCy+9ddgnpblPP4rJjCYVexf6IlrGTQmi8phlANlO9yPDWRZcGk5Znm5efLhSLy1flYi4dlHshj6tXGViBBzwWs/gxeQXOIjmpfQMdlEIhdBRwQbLzXXNEDGuFDLWnOavuW0hGLWzYvVQON2LGKHWoVTBZ0Vgmv9UjKJyvaceCBRH8JSwPVkzBkz6cEFrgRPYz8upt7WLkb+hIauFW3IfllD6XwQoh/SPn7LWFTVsLf6jhhQhxjiZo2O9soPl3G3Upd0GXxa4idBJHDUDbyGMOZkjo9mTm4ZgWFMZyUwWVWvCNxicR7S37gTmDs3Y033mXxRvarC9QqdKu09YCYTx/uRtWME8A4H/YJDis8LMWD4ZoWWZeyw8xjg4eaLoiG2AjuiZlRdaOLIJ7THZVWAelfoVTXGMwqScRoDoPbtIhjUP3UNsUQPAA9F2Qa9D9Cu5kGVZtRcyMqFO1sSVuxuMap0r0QjY8fKu/pFxq/9qH5BpR0uRbvySug5HeIZQpQ5wjTV+yVN436425NHZFCoGjBPShXjSr3p70xMZitAi+xFfB8WRcp6jkXTmr4YYER05maELPdsnh5JgQCU2bu/dR59v3hjqqrvt5lMLdgQBNYnwuLTBG8U0+6lejGeHH+8x2xUsGaz4HKBHGwli5XaYMsgSsamw2U9XEWqUdrRrjI/VxQZn3ItdCQdkdEAHoR6zcBYIaU4Lmq3ElA5BWZ5aAHE/8QAKxEAAgICAgIBAwMEAwAAAAAAAAECEQMhBBIxQSIQE1EyYXEFICMzgZGx/9oACAECAQE/AJf2JCO307FWWSxKVmbC4b9FkvItEGS8CR5gP6r+xyVH3on3okcqejJjU4mSPRtD9/SBPURMxqo0xu/rFDaWjwrZmz9EyXIbtpn3X+SOVmPK09mHJ3WjmQvaK9loxu9GR6E0zB8okoUUURVJv6Z59FZmyOTZZZjYkcfL1ZkqSb9GTTaEYzKQ8s4TuLJQTOn4YoJ+WS6xVIi6s5T7RdE/wh1dS0LRjm3pI+xUbbGsaT6t2v4IVm423tHIx9Va2R9tmF2ZEurZjdtnF+CFLVfS/I526KZkacWjvG2upnxwUOzjscGQi1tHFwQyxucv/Tm4ceLWN/mzhv8AxOLZmkncR+aRhMnhmOG2Q1pEVSsS7DiowbYlbZJvrZkpRZg5OLEvkjmf1GE49URVwv2RXaDIpxeiPz8s4MVco+ieNK20S3LRx3umZGY1dmOYnaIPRny/GjCk02SdJonC4nJTi2i0Yt4zD7ROdOkY8hwZ/wCRozu20jLHozj7Mhi9kc6iLmxQ+eiOVZZUvQtIyu5GJWmjmR00SjRx51j2dt/FH2nJW0Y1T0cB3nOVCm2ZNtnHdGZ6MMvJ2KZG15OFGrk/Ghv4l3P9jjq7OXCm7VGWKRxcWPJCpNL9hYsMPCRkyYqcVQ9Suqs4OFwi5yVX4Od/q15O1N2YDM6RhXkURaLMM+uP+ST0khIxKonKwrJGzPivSIY5Y1pkuRNabIJyV2cXi/flT8InCMV9tejkKeSLf41/0TSTdnHTWzK7Xgxe/rIjK8dLyYp2ql6MbvZF3GkbppmVOMnZH9yeBSFjS0jiReKNryySvfsyNdWvRi4ePNbZH+mQW4sz8TJBa2jEmrOn4PtSekLgdo29GLBGLpGbG4LRx5tTpipbXgjtnMj1mIZiXaZjTUaJaizNJ9mjiqoNsi0vZFqS2jLwFkk5w8MxqyMKHFteTGqbI/OLszQ6NtejBK8W/ZHTOcr2QkS8aOFG5WyOlRJWmjJDq2/JjlUaMUb8l9VSINwjRjhQlX0lGv8AkhSjZJLI3Xo436P4EzkYe6ZLDKL2icJqPg4r6HhWeYs5Emk0jAvjswx0R+WhyogytD1tEkmkzI5qNRMKcIu/ZhdRpFJEptIiu+2PFCtonFqVIirhv0Tl0iTfYxq7Rj0qRFKO0KpEBKzJE6/F/sQSaJx81+CCpFDWmYx7TJJKVmOdxozLsjr10YIn7ECCWyqRiWzIvi2RXwZje2N7EejHPTsj9MzuWiOopCjcSZiVx0RWiKI6RLSMPkyKoMivgxeWLYkddDdMiRMn62Q8Mxr4sz/qZilUSO4mNDP/xAAvEQACAgEEAQMCBAcBAQAAAAAAAQIDEQQSITFBBRNRECIgMkKRFCNhcYGh0TPB/9oACAEDAQE/ADj8EeejY0KKIp+BIcWV2zXBTbvWH4+kPpLopaFHJJJP8Na5HIhyVVuXCRHSz8ohpJPhonRKDZXNwkQlvRHs8Ml0UiWEWLn8GStcZIxc3hGj0m8o0cK1yj2I/BKqKT4J6eMk2air22ad7Xtfki+fpLhFHkW7BqMxZGWfqmdcI0dW+Zo6IwiuPpgmOXg1dLnB47Km0sPtEHu5+kujTiNZAi2uxSMvwimG5vPBltZ/wenQ2z58lPXCf7CXHT/b6SgsNtkr90mqk2189f6ISt/XFZ+E2WQ2XuMuE+Sl9r+v0sWFwUeTLL2powJYK0kbVBZXkxhFDe5YFXNc+5jP9zT6i1WOKmmvPf8A9ZGcWTcZpxfRrNVfRJxoj/nj/qPT9RbZzb2a+H87chR28oim0W9FHk3Isl9N5W3OWPBPGMFb3cS6KElKJforNRJ4+eD070e3Ty3uWBPbLHglP255XRLbZHlC44XSPUrGlCS/yOXiJXxEtKPI8ItgSgKGUaevltlr5wVLkrnho0uJrc0bPc4i8YNQ9thY1tyyqClAdP3YPVIfyYv4f/SviCbKZ71gs4KfI1wSoU+h6FyWMC9PJUqiOfkfLKFwyyW1npli2kZcZNRBuxtEV9rb8EW1ySnlHqi2UGnn7mP2IIsWCpE0QqjBco9+MfAr4S4NbJSSS7IxyyKSg0+zUP4PS7E4YTyaeW6OC+yyubWG18lW/GeybxHojJSTXlHqV6tftJ5x2aNYnjwJc8Fnkq4Jsm8okmuUUVt8tFkN9jXwRhhtm/KyWvMmaHUumeDT34jkk1Y8srWyPBbPL6Nbrf4aDx2+jTTbzZZ5KHslt+ef3I8osKmiwisChF8iexNpFixNzfX+yyPbXTLFs4fwNZZGKg9xpZKdZkjeoxJWueWjXv354fSz/sXPHgrg0yzUzr4SJa2WOTT6uDLMSRC0/iowWX0Wep5yojvnOL3eejTT38SNTUpVtrsSb4Gntz8HptqnXj4GY+0sxXW2XSzJlX3Fa+3LLlmRtzlDTi+CrWyrWJjs2rgb39sW2Pg5xkU/anuKbPci0+i9e3PK5NynF54PSltyhxa5RWeoSxXhEk2sMpk4cYyU/fH4LF9/PBZwngis9sl98myU8oba5+lb4ZZGTnhFW6qKT7NRHMhw25NHqPaKdVTOPDK3FZeeDWr3IvayK5afgSwzSryy3G7gs+CT2orjuyPr6Q8or4bSKlHdmRa1OZYm+/By+ymJY3HhMhOSfDZCW6HLN22b/qUxVsuCC2RwiXeST3Ntkvv4Q8w6GxPBXI3vcSbT4K31n5Jdv6VPktXZFFf5ScOTTT9qWGRlu5L3tG0l/cx7fPyS3GeSZT+Ym8TGsorX2nT7IvMmmWVulpryMXDNNxBtn6skp7biuPJdxPDPkk+BITJ9FX5z9aP0i4JvA+TapR5GPyU/+ZL5JRTe99mlk5RLYp2D7ZL6f//Z"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Athan Jacoby</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">B</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/5.03dcbe0ecb20b16cd181.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Bashid Samim</span>
                                                            <p>Rashid left 50 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Breddie Ronan</span>
                                                            <p>Kalid is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Ceorge Carson</span>
                                                            <p>Taherah left 7 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">D</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="data:image/jpeg;base64,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"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Darry Parker</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="data:image/jpeg;base64,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"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Denry Hunter</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">J</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/5.03dcbe0ecb20b16cd181.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Jack Ronan</span>
                                                            <p>Rashid left 50 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Jacob Tucker</span>
                                                            <p>Kalid is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>James Logan</span>
                                                            <p>Taherah left 7 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="data:image/jpeg;base64,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"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Joshua Weston</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">O</li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="data:image/jpeg;base64,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"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Oliver Acker</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="dz-chat-user">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont">
                                                            <img
                                                                src="/react/demo/static/media/5.03dcbe0ecb20b16cd181.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
                                                            <span className="online_icon offline" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Oscar Weston</span>
                                                            <p>Rashid left 50 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                                <div
                                                    className="ps__thumb-x"
                                                    tabIndex={0}
                                                    style={{ left: 0, width: 0 }}
                                                />
                                            </div>
                                            <div
                                                className="ps__rail-y"
                                                style={{ top: 0, right: 0, height: 388 }}
                                            >
                                                <div
                                                    className="ps__thumb-y"
                                                    tabIndex={0}
                                                    style={{ top: 0, height: 152 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card chat dz-chat-history-box d-none">
                                        <div className="card-header chat-list-header text-center">
                                            <a className="dz-chat-history-back" href="/react/demo/">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                        <rect
                                                            fill="#000000"
                                                            opacity="0.3"
                                                            transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                                                            x={14}
                                                            y={7}
                                                            width={2}
                                                            height={10}
                                                            rx={1}
                                                        />
                                                        <path
                                                            d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                            transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Chat with Khelesh</h6>
                                                <p className="mb-0 text-success">Online</p>
                                            </div>
                                            <div className="dropdown">
                                                <a
                                                    data-toggle="dropdown"
                                                    aria-expanded="false"
                                                    href="/react/demo/"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width="18px"
                                                        height="18px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                    >
                                                        <g
                                                            stroke="none"
                                                            strokeWidth={1}
                                                            fill="none"
                                                            fillRule="evenodd"
                                                        >
                                                            <rect x={0} y={0} width={24} height={24} />
                                                            <circle fill="#000000" cx={5} cy={12} r={2} />
                                                            <circle fill="#000000" cx={12} cy={12} r={2} />
                                                            <circle fill="#000000" cx={19} cy={12} r={2} />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-right ">
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-user-circle text-primary mr-2" /> View
                                                        profile
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-users text-primary mr-2" /> Add to close
                                                        friends
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-plus text-primary mr-2" /> Add to group
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <i className="fa fa-ban text-primary mr-2" /> Block
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            id="DZ_W_Contacts_Body3"
                                            className="scrollbar-container card-body msg_card_body dz-scroll ps"
                                        >
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you samim?
                                                    <span className="msg_time">8:40 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Khalid i am good tnx how about you?
                                                    <span className="msg_time_send">8:55 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am good too, thank you for your chat template
                                                    <span className="msg_time">9:00 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    You are welcome
                                                    <span className="msg_time_send">9:05 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am looking for your next templates
                                                    <span className="msg_time">9:07 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Ok, thank you have a good day
                                                    <span className="msg_time_send">9:10 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Bye, see you<span className="msg_time">9:12 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Hi, how are you samim?
                                                    <span className="msg_time">8:40 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Hi Khalid i am good tnx how about you?
                                                    <span className="msg_time_send">8:55 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am good too, thank you for your chat template
                                                    <span className="msg_time">9:00 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    You are welcome
                                                    <span className="msg_time_send">9:05 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    I am looking for your next templates
                                                    <span className="msg_time">9:07 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4">
                                                <div className="msg_cotainer_send">
                                                    Ok, thank you have a good day
                                                    <span className="msg_time_send">9:10 AM, Today</span>
                                                </div>
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/2.aa64185e69384a2038c7.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mb-4">
                                                <div className="img_cont_msg">
                                                    <img
                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                        className="rounded-circle user_img_msg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="msg_cotainer">
                                                    Bye, see you<span className="msg_time">9:12 AM, Today</span>
                                                </div>
                                            </div>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                                <div
                                                    className="ps__thumb-x"
                                                    tabIndex={0}
                                                    style={{ left: 0, width: 0 }}
                                                />
                                            </div>
                                            <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                                                <div
                                                    className="ps__thumb-y"
                                                    tabIndex={0}
                                                    style={{ top: 0, height: 0 }}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-footer type_msg">
                                            <div className="input-group">
                <textarea
                    className="form-control"
                    placeholder="Type your message..."
                    defaultValue={""}
                />
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-primary">
                                                        <i className="fa fa-location-arrow" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade  " id="notes">
                                    <div className="card mb-sm-3 mb-md-0 note_card">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="/react/demo/">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect
                                                            fill="#000000"
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                        <rect
                                                            fill="#000000"
                                                            opacity="0.3"
                                                            transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                                                            x={4}
                                                            y={11}
                                                            width={16}
                                                            height={2}
                                                            rx={1}
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Notes</h6>
                                                <p className="mb-0">Add New Nots</p>
                                            </div>
                                            <a href="/react/demo/">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path
                                                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                            opacity="0.3"
                                                        />
                                                        <path
                                                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        <div
                                            id="DZ_W_Contacts_Body2"
                                            className="scrollbar-container card-body contacts_body p-0 dz-scroll ps"
                                        >
                                            <ul className="contacts">
                                                <li className="active">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>New order placed..</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a
                                                                className="btn btn-primary btn-xs sharp mr-1"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-trash" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>Youtube, a video-sharing website..</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a
                                                                className="btn btn-primary btn-xs sharp mr-1"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-trash" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>john just buy your product..</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a
                                                                className="btn btn-primary btn-xs sharp mr-1"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-trash" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="user_info">
                                                            <span>Athan Jacoby</span>
                                                            <p>10 Aug 2020</p>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <a
                                                                className="btn btn-primary btn-xs sharp mr-1"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/"
                                                            >
                                                                <i className="fa fa-trash" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                                <div
                                                    className="ps__thumb-x"
                                                    tabIndex={0}
                                                    style={{ left: 0, width: 0 }}
                                                />
                                            </div>
                                            <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                                                <div
                                                    className="ps__thumb-y"
                                                    tabIndex={0}
                                                    style={{ top: 0, height: 0 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade  " id="alerts" role="tabpanel">
                                    <div className="card mb-sm-3 mb-md-0 contacts_card">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="/react/demo/">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <circle fill="#000000" cx={5} cy={12} r={2} />
                                                        <circle fill="#000000" cx={12} cy={12} r={2} />
                                                        <circle fill="#000000" cx={19} cy={12} r={2} />
                                                    </g>
                                                </svg>
                                            </a>
                                            <div>
                                                <h6 className="mb-1">Notications</h6>
                                                <p className="mb-0">Show All</p>
                                            </div>
                                            <a href="/react/demo/">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    width="18px"
                                                    height="18px"
                                                    viewBox="0 0 24 24"
                                                    version="1.1"
                                                >
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <rect x={0} y={0} width={24} height={24} />
                                                        <path
                                                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                            opacity="0.3"
                                                        />
                                                        <path
                                                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                                            fill="#000000"
                                                            fillRule="nonzero"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                        <div
                                            id="DZ_W_Contacts_Body1"
                                            className="scrollbar-container card-body contacts_body p-0 dz-scroll ps"
                                        >
                                            <ul className="contacts">
                                                <li className="name-first-letter">SEVER STATUS</li>
                                                <li className="active">
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont primary">KK</div>
                                                        <div className="user_info">
                                                            <span>David Nester Birthday</span>
                                                            <p className="text-primary">Today</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">SOCIAL</li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont success">
                                                            RU
                                                            <i className="icon fa-birthday-cake" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Perfection Simplified</span>
                                                            <p>Jame Smith commented on your status</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="name-first-letter">SEVER STATUS</li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont primary">
                                                            AU
                                                            <i className="icon fa fa-user-plus" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>AharlieKane</span>
                                                            <p>Sami is online</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex bd-highlight">
                                                        <div className="img_cont info">
                                                            MO
                                                            <i className="icon fa fa-user-plus" />
                                                        </div>
                                                        <div className="user_info">
                                                            <span>Athan Jacoby</span>
                                                            <p>Nargis left 30 mins ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                                <div
                                                    className="ps__thumb-x"
                                                    tabIndex={0}
                                                    style={{ left: 0, width: 0 }}
                                                />
                                            </div>
                                            <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                                                <div
                                                    className="ps__thumb-y"
                                                    tabIndex={0}
                                                    style={{ top: 0, height: 0 }}
                                                />
                                            </div>
                                        </div>
                                        <div className="card-footer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" rightside-event content-body">
                        <div className="container-fluid">
                            <div className="modal fade" id="addOrderModalside">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Create Project</h5>
                                            <button type="button" className="close" data-dismiss="modal">
                                                <span>×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Project Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Deadline</label>
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="text-black font-w500">Client Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="btn btn-primary">
                                                        CREATE
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row   main_dashboard">
                                <div className="col-xl-12">
                                    <div className="row">
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning Point To Point</span>
                                                        </div>
                                                        
                                                        <i class="fa-solid fa-star" style={{color:'#00B106',fontSize:'36px'}} ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning for Hourly Rental</span>
                                                        </div>
                                                       
                                                        <i class="fa-solid fa-user-large" style={{color:'#00B106',fontSize:'36px'}}  ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">0</h2>
                                                            <span className="fs-14">Total Earning For City To City</span>
                                                        </div>
                                                        
                                                      <i class="fa fa-bars-progress"     
                                                        style={{color:'#00B106',fontSize:'36px'}}  ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 all_col">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center">
                                                        <div className="media-body mr-3">
                                                            <h2 className="num-text text-black font-w600">12</h2>
                                                            <span className="fs-14">Unread Messages</span>
                                                        </div>
                                                       
                                                        <i class="fa-solid fa-message"  
                                                        
                                                        style={{color:'#00B106',fontSize:'36px'}} 
                                                        ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 all_col">
                                            <div className="card">
                                                <div className="card-header mb-0 d-sm-flex flex-wrap d-block shadow-sm border-0 align-items-center">
                                                    <div className="mr-auto pr-3 mb-3">
                                                        <h4 className="text-black fs-20 mb-sm-0 mb-2">
                                                            Project Created
                                                        </h4>
                                                    </div>
                                                    <div className="card-action card-tabs  mt-sm-0 mb-3 mt-sm-0 ">
                                                        <ul className="nav nav-tabs  nav" role="tablist">
                                                            <li className="nav-item">
                                                                <a
                                                                    href="#"
                                                                    role="tab"
                                                                    data-rb-event-key="home"
                                                                    aria-selected="true"
                                                                    className="nav-link active"
                                                                >
                                                                    {" "}
                                                                    Daily
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    href="#"
                                                                    role="tab"
                                                                    data-rb-event-key="profile"
                                                                    aria-selected="false"
                                                                    className="nav-link"
                                                                >
                                                                    {" "}
                                                                    Weekly
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a
                                                                    href="#"
                                                                    role="tab"
                                                                    data-rb-event-key="contact"
                                                                    aria-selected="false"
                                                                    className="nav-link"
                                                                >
                                                                    {" "}
                                                                    Monthly
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="tab-content">
                                                        <div
                                                            role="tabpanel"
                                                            aria-hidden="false"
                                                            className="fade tab-pane active show"
                                                        >
                                                            <div className="d-flex align-items-center">
                        <span className="fs-36 text-black font-w600 mr-4">
                          0,45%
                        </span>
                                                                <div>
                                                                    <svg
                                                                        className="mr-2"
                                                                        width={27}
                                                                        height={14}
                                                                        viewBox="0 0 27 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                                                            fill="#2FCA51"
                                                                        />
                                                                    </svg>
                                                                    <span>last month $563,443</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div id="chart">
                                                                    <div style={{ minHeight: 335 }}>
                                                                        <div
                                                                            id="apexchartszrdg6uip"
                                                                            className="apexcharts-canvas apexchartszrdg6uip apexcharts-theme-light"
                                                                            style={{ width: 840, height: 320 }}
                                                                        >
                                                                            <svg
                                                                                id="SvgjsSvg1714"
                                                                                width={450}
                                                                                height={320}

                                                                                style={{ background: "transparent" }}
                                                                            >
                                                                                <g
                                                                                    id="SvgjsG1716"
                                                                                    className="apexcharts-inner apexcharts-graphical"
                                                                                    transform="translate(51.34375, 30)"
                                                                                >
                                                                                    <defs id="SvgjsDefs1715">
                                                                                        <clipPath id="gridRectMaskzrdg6uip">
                                                                                            <rect
                                                                                                id="SvgjsRect1720"
                                                                                                width="782.65625"
                                                                                                height="250.73000000000002"
                                                                                                x={-2}
                                                                                                y={0}
                                                                                                rx={0}
                                                                                                ry={0}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#fff"
                                                                                            />
                                                                                        </clipPath>
                                                                                        <clipPath id="forecastMaskzrdg6uip" />
                                                                                        <clipPath id="nonForecastMaskzrdg6uip" />
                                                                                        <clipPath id="gridRectMarkerMaskzrdg6uip">
                                                                                            <rect
                                                                                                id="SvgjsRect1721"
                                                                                                width="782.65625"
                                                                                                height="254.73000000000002"
                                                                                                x={-2}
                                                                                                y={-2}
                                                                                                rx={0}
                                                                                                ry={0}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#fff"
                                                                                            />
                                                                                        </clipPath>
                                                                                    </defs>
                                                                                    <g
                                                                                        id="SvgjsG1769"
                                                                                        className="apexcharts-xaxis"
                                                                                        transform="translate(0, 0)"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1770"
                                                                                            className="apexcharts-xaxis-texts-g"
                                                                                            transform="translate(0, -4)"
                                                                                        >
                                                                                            <text
                                                                                                id="SvgjsText1772"
                                                                                                fontFamily="Poppins"
                                                                                                x="27.809151785714285"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1773">01</tspan>
                                                                                                <title>01</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1775"
                                                                                                fontFamily="Poppins"
                                                                                                x="83.42745535714286"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1776">02</tspan>
                                                                                                <title>02</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1778"
                                                                                                fontFamily="Poppins"
                                                                                                x="139.04575892857144"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1779">03</tspan>
                                                                                                <title>03</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1781"
                                                                                                fontFamily="Poppins"
                                                                                                x="194.6640625"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1782">04</tspan>
                                                                                                <title>04</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1784"
                                                                                                fontFamily="Poppins"
                                                                                                x="250.28236607142856"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1785">05</tspan>
                                                                                                <title>05</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1787"
                                                                                                fontFamily="Poppins"
                                                                                                x="305.9006696428571"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1788">06</tspan>
                                                                                                <title>06</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1790"
                                                                                                fontFamily="Poppins"
                                                                                                x="361.51897321428567"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1791">07</tspan>
                                                                                                <title>07</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1793"
                                                                                                fontFamily="Poppins"
                                                                                                x="417.1372767857142"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1794">08</tspan>
                                                                                                <title>08</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1796"
                                                                                                fontFamily="Poppins"
                                                                                                x="472.7555803571428"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1797">09</tspan>
                                                                                                <title>09</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1799"
                                                                                                fontFamily="Poppins"
                                                                                                x="528.3738839285713"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1800">10</tspan>
                                                                                                <title>10</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1802"
                                                                                                fontFamily="Poppins"
                                                                                                x="583.9921874999999"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1803">11</tspan>
                                                                                                <title>11</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1805"
                                                                                                fontFamily="Poppins"
                                                                                                x="639.6104910714284"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1806">12</tspan>
                                                                                                <title>12</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1808"
                                                                                                fontFamily="Poppins"
                                                                                                x="695.228794642857"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1809">13</tspan>
                                                                                                <title>13</title>
                                                                                            </text>
                                                                                            <text
                                                                                                id="SvgjsText1811"
                                                                                                fontFamily="Poppins"
                                                                                                x="750.8470982142856"
                                                                                                y="279.73"
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="13px"
                                                                                                fontWeight={400}
                                                                                                fill="#787878"
                                                                                                className="apexcharts-text apexcharts-xaxis-label "
                                                                                                style={{ fontFamily: "Poppins" }}
                                                                                            >
                                                                                                <tspan id="SvgjsTspan1812">14</tspan>
                                                                                                <title>14</title>
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                    <g
                                                                                        id="SvgjsG1830"
                                                                                        className="apexcharts-grid"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1831"
                                                                                            className="apexcharts-gridlines-horizontal"
                                                                                        >
                                                                                            <line
                                                                                                id="SvgjsLine1848"
                                                                                                x1={0}
                                                                                                y1={0}
                                                                                                x2="778.65625"
                                                                                                y2={0}
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1849"
                                                                                                x1={0}
                                                                                                y1="62.682500000000005"
                                                                                                x2="778.65625"
                                                                                                y2="62.682500000000005"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1850"
                                                                                                x1={0}
                                                                                                y1="125.36500000000001"
                                                                                                x2="778.65625"
                                                                                                y2="125.36500000000001"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1851"
                                                                                                x1={0}
                                                                                                y1="188.0475"
                                                                                                x2="778.65625"
                                                                                                y2="188.0475"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                            <line
                                                                                                id="SvgjsLine1852"
                                                                                                x1={0}
                                                                                                y1="250.73000000000002"
                                                                                                x2="778.65625"
                                                                                                y2="250.73000000000002"
                                                                                                stroke="#e0e0e0"
                                                                                                strokeDasharray={0}
                                                                                                strokeLinecap="butt"
                                                                                                className="apexcharts-gridline"
                                                                                            />
                                                                                        </g>
                                                                                        <g
                                                                                            id="SvgjsG1832"
                                                                                            className="apexcharts-gridlines-vertical"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1833"
                                                                                            x1={0}
                                                                                            y1="251.73000000000002"
                                                                                            x2={0}
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1834"
                                                                                            x1="55.61830357142857"
                                                                                            y1="251.73000000000002"
                                                                                            x2="55.61830357142857"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1835"
                                                                                            x1="111.23660714285714"
                                                                                            y1="251.73000000000002"
                                                                                            x2="111.23660714285714"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1836"
                                                                                            x1="166.85491071428572"
                                                                                            y1="251.73000000000002"
                                                                                            x2="166.85491071428572"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1837"
                                                                                            x1="222.47321428571428"
                                                                                            y1="251.73000000000002"
                                                                                            x2="222.47321428571428"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1838"
                                                                                            x1="278.09151785714283"
                                                                                            y1="251.73000000000002"
                                                                                            x2="278.09151785714283"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1839"
                                                                                            x1="333.7098214285714"
                                                                                            y1="251.73000000000002"
                                                                                            x2="333.7098214285714"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1840"
                                                                                            x1="389.32812499999994"
                                                                                            y1="251.73000000000002"
                                                                                            x2="389.32812499999994"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1841"
                                                                                            x1="444.9464285714285"
                                                                                            y1="251.73000000000002"
                                                                                            x2="444.9464285714285"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1842"
                                                                                            x1="500.56473214285705"
                                                                                            y1="251.73000000000002"
                                                                                            x2="500.56473214285705"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1843"
                                                                                            x1="556.1830357142857"
                                                                                            y1="251.73000000000002"
                                                                                            x2="556.1830357142857"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1844"
                                                                                            x1="611.8013392857142"
                                                                                            y1="251.73000000000002"
                                                                                            x2="611.8013392857142"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1845"
                                                                                            x1="667.4196428571428"
                                                                                            y1="251.73000000000002"
                                                                                            x2="667.4196428571428"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1846"
                                                                                            x1="723.0379464285713"
                                                                                            y1="251.73000000000002"
                                                                                            x2="723.0379464285713"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1847"
                                                                                            x1="778.6562499999999"
                                                                                            y1="251.73000000000002"
                                                                                            x2="778.6562499999999"
                                                                                            y2="257.73"
                                                                                            stroke="#e0e0e0"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                            className="apexcharts-xaxis-tick"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1854"
                                                                                            x1={0}
                                                                                            y1="250.73000000000002"
                                                                                            x2="778.65625"
                                                                                            y2="250.73000000000002"
                                                                                            stroke="transparent"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                        />
                                                                                        <line
                                                                                            id="SvgjsLine1853"
                                                                                            x1={0}
                                                                                            y1={1}
                                                                                            x2={0}
                                                                                            y2="250.73000000000002"
                                                                                            stroke="transparent"
                                                                                            strokeDasharray={0}
                                                                                            strokeLinecap="butt"
                                                                                        />
                                                                                    </g>
                                                                                    <g
                                                                                        id="SvgjsG1722"
                                                                                        className="apexcharts-bar-series apexcharts-plot-series"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1723"
                                                                                            className="apexcharts-series"
                                                                                        >
                                                                                            <rect
                                                                                                id="SvgjsRect1725"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="19.46640625"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1726"
                                                                                                d="M 19.46640625 125.36500000000001L 19.46640625 15.670625000000001Q 19.46640625 15.670625000000001 19.46640625 15.670625000000001L 36.15189732142857 15.670625000000001Q 36.15189732142857 15.670625000000001 36.15189732142857 15.670625000000001L 36.15189732142857 15.670625000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 19.46640625 125.36500000000001L 19.46640625 15.670625000000001Q 19.46640625 15.670625000000001 19.46640625 15.670625000000001L 36.15189732142857 15.670625000000001Q 36.15189732142857 15.670625000000001 36.15189732142857 15.670625000000001L 36.15189732142857 15.670625000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                pathfrom="M 19.46640625 125.36500000000001L 19.46640625 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 19.46640625 125.36500000000001"
                                                                                                cy="15.670625000000001"
                                                                                                cx="75.08470982142856"
                                                                                                j={0}
                                                                                                val={70}
                                                                                                barheight="109.69437500000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1727"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="75.08470982142856"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1728"
                                                                                                d="M 75.08470982142856 125.36500000000001L 75.08470982142856 94.02375Q 75.08470982142856 94.02375 75.08470982142856 94.02375L 91.77020089285713 94.02375Q 91.77020089285713 94.02375 91.77020089285713 94.02375L 91.77020089285713 94.02375L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 75.08470982142856 125.36500000000001L 75.08470982142856 94.02375Q 75.08470982142856 94.02375 75.08470982142856 94.02375L 91.77020089285713 94.02375Q 91.77020089285713 94.02375 91.77020089285713 94.02375L 91.77020089285713 94.02375L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                pathfrom="M 75.08470982142856 125.36500000000001L 75.08470982142856 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 75.08470982142856 125.36500000000001"
                                                                                                cy="94.02375"
                                                                                                cx="130.70301339285714"
                                                                                                j={1}
                                                                                                val={20}
                                                                                                barheight="31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1729"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="130.70301339285714"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1730"
                                                                                                d="M 130.70301339285714 125.36500000000001L 130.70301339285714 7.835312500000001Q 130.70301339285714 7.835312500000001 130.70301339285714 7.835312500000001L 147.38850446428572 7.835312500000001Q 147.38850446428572 7.835312500000001 147.38850446428572 7.835312500000001L 147.38850446428572 7.835312500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 130.70301339285714 125.36500000000001L 130.70301339285714 7.835312500000001Q 130.70301339285714 7.835312500000001 130.70301339285714 7.835312500000001L 147.38850446428572 7.835312500000001Q 147.38850446428572 7.835312500000001 147.38850446428572 7.835312500000001L 147.38850446428572 7.835312500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                pathfrom="M 130.70301339285714 125.36500000000001L 130.70301339285714 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 130.70301339285714 125.36500000000001"
                                                                                                cy="7.835312500000001"
                                                                                                cx="186.3213169642857"
                                                                                                j={2}
                                                                                                val={75}
                                                                                                barheight="117.52968750000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1731"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="186.3213169642857"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1732"
                                                                                                d="M 186.3213169642857 125.36500000000001L 186.3213169642857 94.02375Q 186.3213169642857 94.02375 186.3213169642857 94.02375L 203.00680803571427 94.02375Q 203.00680803571427 94.02375 203.00680803571427 94.02375L 203.00680803571427 94.02375L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 186.3213169642857 125.36500000000001L 186.3213169642857 94.02375Q 186.3213169642857 94.02375 186.3213169642857 94.02375L 203.00680803571427 94.02375Q 203.00680803571427 94.02375 203.00680803571427 94.02375L 203.00680803571427 94.02375L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                pathfrom="M 186.3213169642857 125.36500000000001L 186.3213169642857 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 186.3213169642857 125.36500000000001"
                                                                                                cy="94.02375"
                                                                                                cx="241.93962053571425"
                                                                                                j={3}
                                                                                                val={20}
                                                                                                barheight="31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1733"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="241.93962053571425"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1734"
                                                                                                d="M 241.93962053571425 125.36500000000001L 241.93962053571425 47.011875Q 241.93962053571425 47.011875 241.93962053571425 47.011875L 258.6251116071428 47.011875Q 258.6251116071428 47.011875 258.6251116071428 47.011875L 258.6251116071428 47.011875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 241.93962053571425 125.36500000000001L 241.93962053571425 47.011875Q 241.93962053571425 47.011875 241.93962053571425 47.011875L 258.6251116071428 47.011875Q 258.6251116071428 47.011875 258.6251116071428 47.011875L 258.6251116071428 47.011875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                pathfrom="M 241.93962053571425 125.36500000000001L 241.93962053571425 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 241.93962053571425 125.36500000000001"
                                                                                                cy="47.011875"
                                                                                                cx="297.5579241071428"
                                                                                                j={4}
                                                                                                val={50}
                                                                                                barheight="78.353125"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1735"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="297.5579241071428"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1736"
                                                                                                d="M 297.5579241071428 125.36500000000001L 297.5579241071428 62.682500000000005Q 297.5579241071428 62.682500000000005 297.5579241071428 62.682500000000005L 314.24341517857135 62.682500000000005Q 314.24341517857135 62.682500000000005 314.24341517857135 62.682500000000005L 314.24341517857135 62.682500000000005L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 297.5579241071428 125.36500000000001L 297.5579241071428 62.682500000000005Q 297.5579241071428 62.682500000000005 297.5579241071428 62.682500000000005L 314.24341517857135 62.682500000000005Q 314.24341517857135 62.682500000000005 314.24341517857135 62.682500000000005L 314.24341517857135 62.682500000000005L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                pathfrom="M 297.5579241071428 125.36500000000001L 297.5579241071428 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 297.5579241071428 125.36500000000001"
                                                                                                cy="62.682500000000005"
                                                                                                cx="353.17622767857137"
                                                                                                j={5}
                                                                                                val={40}
                                                                                                barheight="62.682500000000005"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1737"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="353.17622767857137"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1738"
                                                                                                d="M 353.17622767857137 125.36500000000001L 353.17622767857137 23.5059375Q 353.17622767857137 23.5059375 353.17622767857137 23.5059375L 369.8617187499999 23.5059375Q 369.8617187499999 23.5059375 369.8617187499999 23.5059375L 369.8617187499999 23.5059375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 353.17622767857137 125.36500000000001L 353.17622767857137 23.5059375Q 353.17622767857137 23.5059375 353.17622767857137 23.5059375L 369.8617187499999 23.5059375Q 369.8617187499999 23.5059375 369.8617187499999 23.5059375L 369.8617187499999 23.5059375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                pathfrom="M 353.17622767857137 125.36500000000001L 353.17622767857137 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 353.17622767857137 125.36500000000001"
                                                                                                cy="23.5059375"
                                                                                                cx="408.7945312499999"
                                                                                                j={6}
                                                                                                val={65}
                                                                                                barheight="101.85906250000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1739"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="408.7945312499999"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1740"
                                                                                                d="M 408.7945312499999 125.36500000000001L 408.7945312499999 101.85906250000001Q 408.7945312499999 101.85906250000001 408.7945312499999 101.85906250000001L 425.48002232142846 101.85906250000001Q 425.48002232142846 101.85906250000001 425.48002232142846 101.85906250000001L 425.48002232142846 101.85906250000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 408.7945312499999 125.36500000000001L 408.7945312499999 101.85906250000001Q 408.7945312499999 101.85906250000001 408.7945312499999 101.85906250000001L 425.48002232142846 101.85906250000001Q 425.48002232142846 101.85906250000001 425.48002232142846 101.85906250000001L 425.48002232142846 101.85906250000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                pathfrom="M 408.7945312499999 125.36500000000001L 408.7945312499999 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 408.7945312499999 125.36500000000001"
                                                                                                cy="101.85906250000001"
                                                                                                cx="464.4128348214285"
                                                                                                j={7}
                                                                                                val={15}
                                                                                                barheight="23.5059375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1741"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="464.4128348214285"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1742"
                                                                                                d="M 464.4128348214285 125.36500000000001L 464.4128348214285 62.682500000000005Q 464.4128348214285 62.682500000000005 464.4128348214285 62.682500000000005L 481.098325892857 62.682500000000005Q 481.098325892857 62.682500000000005 481.098325892857 62.682500000000005L 481.098325892857 62.682500000000005L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 464.4128348214285 125.36500000000001L 464.4128348214285 62.682500000000005Q 464.4128348214285 62.682500000000005 464.4128348214285 62.682500000000005L 481.098325892857 62.682500000000005Q 481.098325892857 62.682500000000005 481.098325892857 62.682500000000005L 481.098325892857 62.682500000000005L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                pathfrom="M 464.4128348214285 125.36500000000001L 464.4128348214285 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 464.4128348214285 125.36500000000001"
                                                                                                cy="62.682500000000005"
                                                                                                cx="520.0311383928571"
                                                                                                j={8}
                                                                                                val={40}
                                                                                                barheight="62.682500000000005"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1743"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="520.0311383928571"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1744"
                                                                                                d="M 520.0311383928571 125.36500000000001L 520.0311383928571 39.1765625Q 520.0311383928571 39.1765625 520.0311383928571 39.1765625L 536.7166294642857 39.1765625Q 536.7166294642857 39.1765625 536.7166294642857 39.1765625L 536.7166294642857 39.1765625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 520.0311383928571 125.36500000000001L 520.0311383928571 39.1765625Q 520.0311383928571 39.1765625 520.0311383928571 39.1765625L 536.7166294642857 39.1765625Q 536.7166294642857 39.1765625 536.7166294642857 39.1765625L 536.7166294642857 39.1765625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                pathfrom="M 520.0311383928571 125.36500000000001L 520.0311383928571 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 520.0311383928571 125.36500000000001"
                                                                                                cy="39.1765625"
                                                                                                cx="575.6494419642856"
                                                                                                j={9}
                                                                                                val={55}
                                                                                                barheight="86.1884375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1745"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="575.6494419642856"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1746"
                                                                                                d="M 575.6494419642856 125.36500000000001L 575.6494419642856 31.341250000000002Q 575.6494419642856 31.341250000000002 575.6494419642856 31.341250000000002L 592.3349330357142 31.341250000000002Q 592.3349330357142 31.341250000000002 592.3349330357142 31.341250000000002L 592.3349330357142 31.341250000000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 575.6494419642856 125.36500000000001L 575.6494419642856 31.341250000000002Q 575.6494419642856 31.341250000000002 575.6494419642856 31.341250000000002L 592.3349330357142 31.341250000000002Q 592.3349330357142 31.341250000000002 592.3349330357142 31.341250000000002L 592.3349330357142 31.341250000000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                pathfrom="M 575.6494419642856 125.36500000000001L 575.6494419642856 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 575.6494419642856 125.36500000000001"
                                                                                                cy="31.341250000000002"
                                                                                                cx="631.2677455357142"
                                                                                                j={10}
                                                                                                val={60}
                                                                                                barheight="94.02375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1747"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="631.2677455357142"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1748"
                                                                                                d="M 631.2677455357142 125.36500000000001L 631.2677455357142 94.02375Q 631.2677455357142 94.02375 631.2677455357142 94.02375L 647.9532366071428 94.02375Q 647.9532366071428 94.02375 647.9532366071428 94.02375L 647.9532366071428 94.02375L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 631.2677455357142 125.36500000000001L 631.2677455357142 94.02375Q 631.2677455357142 94.02375 631.2677455357142 94.02375L 647.9532366071428 94.02375Q 647.9532366071428 94.02375 647.9532366071428 94.02375L 647.9532366071428 94.02375L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                pathfrom="M 631.2677455357142 125.36500000000001L 631.2677455357142 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 631.2677455357142 125.36500000000001"
                                                                                                cy="94.02375"
                                                                                                cx="686.8860491071428"
                                                                                                j={11}
                                                                                                val={20}
                                                                                                barheight="31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1749"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="686.8860491071428"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1750"
                                                                                                d="M 686.8860491071428 125.36500000000001L 686.8860491071428 7.835312500000001Q 686.8860491071428 7.835312500000001 686.8860491071428 7.835312500000001L 703.5715401785714 7.835312500000001Q 703.5715401785714 7.835312500000001 703.5715401785714 7.835312500000001L 703.5715401785714 7.835312500000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 686.8860491071428 125.36500000000001L 686.8860491071428 7.835312500000001Q 686.8860491071428 7.835312500000001 686.8860491071428 7.835312500000001L 703.5715401785714 7.835312500000001Q 703.5715401785714 7.835312500000001 703.5715401785714 7.835312500000001L 703.5715401785714 7.835312500000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                pathfrom="M 686.8860491071428 125.36500000000001L 686.8860491071428 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 686.8860491071428 125.36500000000001"
                                                                                                cy="7.835312500000001"
                                                                                                cx="742.5043526785713"
                                                                                                j={12}
                                                                                                val={75}
                                                                                                barheight="117.52968750000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <rect
                                                                                                id="SvgjsRect1751"
                                                                                                width="16.685491071428572"
                                                                                                height="250.73000000000002"
                                                                                                x="742.5043526785713"
                                                                                                y={0}
                                                                                                rx={5}
                                                                                                ry={5}
                                                                                                opacity={1}
                                                                                                strokeWidth={0}
                                                                                                stroke="none"
                                                                                                strokeDasharray={0}
                                                                                                fill="#F4F4F4"
                                                                                                className="apexcharts-backgroundBar"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1752"
                                                                                                d="M 742.5043526785713 125.36500000000001L 742.5043526785713 62.682500000000005Q 742.5043526785713 62.682500000000005 742.5043526785713 62.682500000000005L 759.1898437499999 62.682500000000005Q 759.1898437499999 62.682500000000005 759.1898437499999 62.682500000000005L 759.1898437499999 62.682500000000005L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                fill="rgba(41,83,232,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={0}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 742.5043526785713 125.36500000000001L 742.5043526785713 62.682500000000005Q 742.5043526785713 62.682500000000005 742.5043526785713 62.682500000000005L 759.1898437499999 62.682500000000005Q 759.1898437499999 62.682500000000005 759.1898437499999 62.682500000000005L 759.1898437499999 62.682500000000005L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                pathfrom="M 742.5043526785713 125.36500000000001L 742.5043526785713 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 742.5043526785713 125.36500000000001"
                                                                                                cy="62.682500000000005"
                                                                                                cx="798.1226562499999"
                                                                                                j={13}
                                                                                                val={40}
                                                                                                barheight="62.682500000000005"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                        </g>
                                                                                        <g
                                                                                            id="SvgjsG1753"
                                                                                            className="apexcharts-series"

                                                                                        >
                                                                                            <path
                                                                                                id="SvgjsPath1755"
                                                                                                d="M 19.46640625 125.36500000000001L 19.46640625 219.38875000000002Q 19.46640625 219.38875000000002 19.46640625 219.38875000000002L 36.15189732142857 219.38875000000002Q 36.15189732142857 219.38875000000002 36.15189732142857 219.38875000000002L 36.15189732142857 219.38875000000002L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 19.46640625 125.36500000000001L 19.46640625 219.38875000000002Q 19.46640625 219.38875000000002 19.46640625 219.38875000000002L 36.15189732142857 219.38875000000002Q 36.15189732142857 219.38875000000002 36.15189732142857 219.38875000000002L 36.15189732142857 219.38875000000002L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001z"
                                                                                                pathfrom="M 19.46640625 125.36500000000001L 19.46640625 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 36.15189732142857 125.36500000000001L 19.46640625 125.36500000000001"
                                                                                                cy="219.38875000000002"
                                                                                                cx="75.08470982142856"
                                                                                                j={0}
                                                                                                val={-60}
                                                                                                barheight="-94.02375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1756"
                                                                                                d="M 75.08470982142856 125.36500000000001L 75.08470982142856 141.035625Q 75.08470982142856 141.035625 75.08470982142856 141.035625L 91.77020089285713 141.035625Q 91.77020089285713 141.035625 91.77020089285713 141.035625L 91.77020089285713 141.035625L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 75.08470982142856 125.36500000000001L 75.08470982142856 141.035625Q 75.08470982142856 141.035625 75.08470982142856 141.035625L 91.77020089285713 141.035625Q 91.77020089285713 141.035625 91.77020089285713 141.035625L 91.77020089285713 141.035625L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001z"
                                                                                                pathfrom="M 75.08470982142856 125.36500000000001L 75.08470982142856 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 91.77020089285713 125.36500000000001L 75.08470982142856 125.36500000000001"
                                                                                                cy="141.035625"
                                                                                                cx="130.70301339285714"
                                                                                                j={1}
                                                                                                val={-10}
                                                                                                barheight="-15.670625000000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1757"
                                                                                                d="M 130.70301339285714 125.36500000000001L 130.70301339285714 203.71812500000001Q 130.70301339285714 203.71812500000001 130.70301339285714 203.71812500000001L 147.38850446428572 203.71812500000001Q 147.38850446428572 203.71812500000001 147.38850446428572 203.71812500000001L 147.38850446428572 203.71812500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 130.70301339285714 125.36500000000001L 130.70301339285714 203.71812500000001Q 130.70301339285714 203.71812500000001 130.70301339285714 203.71812500000001L 147.38850446428572 203.71812500000001Q 147.38850446428572 203.71812500000001 147.38850446428572 203.71812500000001L 147.38850446428572 203.71812500000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001z"
                                                                                                pathfrom="M 130.70301339285714 125.36500000000001L 130.70301339285714 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 147.38850446428572 125.36500000000001L 130.70301339285714 125.36500000000001"
                                                                                                cy="203.71812500000001"
                                                                                                cx="186.3213169642857"
                                                                                                j={2}
                                                                                                val={-50}
                                                                                                barheight="-78.353125"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1758"
                                                                                                d="M 186.3213169642857 125.36500000000001L 186.3213169642857 164.5415625Q 186.3213169642857 164.5415625 186.3213169642857 164.5415625L 203.00680803571427 164.5415625Q 203.00680803571427 164.5415625 203.00680803571427 164.5415625L 203.00680803571427 164.5415625L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 186.3213169642857 125.36500000000001L 186.3213169642857 164.5415625Q 186.3213169642857 164.5415625 186.3213169642857 164.5415625L 203.00680803571427 164.5415625Q 203.00680803571427 164.5415625 203.00680803571427 164.5415625L 203.00680803571427 164.5415625L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001z"
                                                                                                pathfrom="M 186.3213169642857 125.36500000000001L 186.3213169642857 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 203.00680803571427 125.36500000000001L 186.3213169642857 125.36500000000001"
                                                                                                cy="164.5415625"
                                                                                                cx="241.93962053571425"
                                                                                                j={3}
                                                                                                val={-25}
                                                                                                barheight="-39.1765625"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1759"
                                                                                                d="M 241.93962053571425 125.36500000000001L 241.93962053571425 172.376875Q 241.93962053571425 172.376875 241.93962053571425 172.376875L 258.6251116071428 172.376875Q 258.6251116071428 172.376875 258.6251116071428 172.376875L 258.6251116071428 172.376875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 241.93962053571425 125.36500000000001L 241.93962053571425 172.376875Q 241.93962053571425 172.376875 241.93962053571425 172.376875L 258.6251116071428 172.376875Q 258.6251116071428 172.376875 258.6251116071428 172.376875L 258.6251116071428 172.376875L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001z"
                                                                                                pathfrom="M 241.93962053571425 125.36500000000001L 241.93962053571425 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 258.6251116071428 125.36500000000001L 241.93962053571425 125.36500000000001"
                                                                                                cy="172.376875"
                                                                                                cx="297.5579241071428"
                                                                                                j={4}
                                                                                                val={-30}
                                                                                                barheight="-47.011875"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1760"
                                                                                                d="M 297.5579241071428 125.36500000000001L 297.5579241071428 227.2240625Q 297.5579241071428 227.2240625 297.5579241071428 227.2240625L 314.24341517857135 227.2240625Q 314.24341517857135 227.2240625 314.24341517857135 227.2240625L 314.24341517857135 227.2240625L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 297.5579241071428 125.36500000000001L 297.5579241071428 227.2240625Q 297.5579241071428 227.2240625 297.5579241071428 227.2240625L 314.24341517857135 227.2240625Q 314.24341517857135 227.2240625 314.24341517857135 227.2240625L 314.24341517857135 227.2240625L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001z"
                                                                                                pathfrom="M 297.5579241071428 125.36500000000001L 297.5579241071428 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 314.24341517857135 125.36500000000001L 297.5579241071428 125.36500000000001"
                                                                                                cy="227.2240625"
                                                                                                cx="353.17622767857137"
                                                                                                j={5}
                                                                                                val={-65}
                                                                                                barheight="-101.85906250000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1761"
                                                                                                d="M 353.17622767857137 125.36500000000001L 353.17622767857137 159.840375Q 353.17622767857137 159.840375 353.17622767857137 159.840375L 369.8617187499999 159.840375Q 369.8617187499999 159.840375 369.8617187499999 159.840375L 369.8617187499999 159.840375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 353.17622767857137 125.36500000000001L 353.17622767857137 159.840375Q 353.17622767857137 159.840375 353.17622767857137 159.840375L 369.8617187499999 159.840375Q 369.8617187499999 159.840375 369.8617187499999 159.840375L 369.8617187499999 159.840375L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001z"
                                                                                                pathfrom="M 353.17622767857137 125.36500000000001L 353.17622767857137 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 369.8617187499999 125.36500000000001L 353.17622767857137 125.36500000000001"
                                                                                                cy="159.840375"
                                                                                                cx="408.7945312499999"
                                                                                                j={6}
                                                                                                val={-22}
                                                                                                barheight="-34.475375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1762"
                                                                                                d="M 408.7945312499999 125.36500000000001L 408.7945312499999 141.035625Q 408.7945312499999 141.035625 408.7945312499999 141.035625L 425.48002232142846 141.035625Q 425.48002232142846 141.035625 425.48002232142846 141.035625L 425.48002232142846 141.035625L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 408.7945312499999 125.36500000000001L 408.7945312499999 141.035625Q 408.7945312499999 141.035625 408.7945312499999 141.035625L 425.48002232142846 141.035625Q 425.48002232142846 141.035625 425.48002232142846 141.035625L 425.48002232142846 141.035625L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001z"
                                                                                                pathfrom="M 408.7945312499999 125.36500000000001L 408.7945312499999 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 425.48002232142846 125.36500000000001L 408.7945312499999 125.36500000000001"
                                                                                                cy="141.035625"
                                                                                                cx="464.4128348214285"
                                                                                                j={7}
                                                                                                val={-10}
                                                                                                barheight="-15.670625000000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1763"
                                                                                                d="M 464.4128348214285 125.36500000000001L 464.4128348214285 203.71812500000001Q 464.4128348214285 203.71812500000001 464.4128348214285 203.71812500000001L 481.098325892857 203.71812500000001Q 481.098325892857 203.71812500000001 481.098325892857 203.71812500000001L 481.098325892857 203.71812500000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 464.4128348214285 125.36500000000001L 464.4128348214285 203.71812500000001Q 464.4128348214285 203.71812500000001 464.4128348214285 203.71812500000001L 481.098325892857 203.71812500000001Q 481.098325892857 203.71812500000001 481.098325892857 203.71812500000001L 481.098325892857 203.71812500000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001z"
                                                                                                pathfrom="M 464.4128348214285 125.36500000000001L 464.4128348214285 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 481.098325892857 125.36500000000001L 464.4128348214285 125.36500000000001"
                                                                                                cy="203.71812500000001"
                                                                                                cx="520.0311383928571"
                                                                                                j={8}
                                                                                                val={-50}
                                                                                                barheight="-78.353125"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1764"
                                                                                                d="M 520.0311383928571 125.36500000000001L 520.0311383928571 156.70625Q 520.0311383928571 156.70625 520.0311383928571 156.70625L 536.7166294642857 156.70625Q 536.7166294642857 156.70625 536.7166294642857 156.70625L 536.7166294642857 156.70625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 520.0311383928571 125.36500000000001L 520.0311383928571 156.70625Q 520.0311383928571 156.70625 520.0311383928571 156.70625L 536.7166294642857 156.70625Q 536.7166294642857 156.70625 536.7166294642857 156.70625L 536.7166294642857 156.70625L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001z"
                                                                                                pathfrom="M 520.0311383928571 125.36500000000001L 520.0311383928571 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 536.7166294642857 125.36500000000001L 520.0311383928571 125.36500000000001"
                                                                                                cy="156.70625"
                                                                                                cx="575.6494419642856"
                                                                                                j={9}
                                                                                                val={-20}
                                                                                                barheight="-31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1765"
                                                                                                d="M 575.6494419642856 125.36500000000001L 575.6494419642856 235.05937500000002Q 575.6494419642856 235.05937500000002 575.6494419642856 235.05937500000002L 592.3349330357142 235.05937500000002Q 592.3349330357142 235.05937500000002 592.3349330357142 235.05937500000002L 592.3349330357142 235.05937500000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 575.6494419642856 125.36500000000001L 575.6494419642856 235.05937500000002Q 575.6494419642856 235.05937500000002 575.6494419642856 235.05937500000002L 592.3349330357142 235.05937500000002Q 592.3349330357142 235.05937500000002 592.3349330357142 235.05937500000002L 592.3349330357142 235.05937500000002L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001z"
                                                                                                pathfrom="M 575.6494419642856 125.36500000000001L 575.6494419642856 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 592.3349330357142 125.36500000000001L 575.6494419642856 125.36500000000001"
                                                                                                cy="235.05937500000002"
                                                                                                cx="631.2677455357142"
                                                                                                j={10}
                                                                                                val={-70}
                                                                                                barheight="-109.69437500000001"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1766"
                                                                                                d="M 631.2677455357142 125.36500000000001L 631.2677455357142 180.21218750000003Q 631.2677455357142 180.21218750000003 631.2677455357142 180.21218750000003L 647.9532366071428 180.21218750000003Q 647.9532366071428 180.21218750000003 647.9532366071428 180.21218750000003L 647.9532366071428 180.21218750000003L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 631.2677455357142 125.36500000000001L 631.2677455357142 180.21218750000003Q 631.2677455357142 180.21218750000003 631.2677455357142 180.21218750000003L 647.9532366071428 180.21218750000003Q 647.9532366071428 180.21218750000003 647.9532366071428 180.21218750000003L 647.9532366071428 180.21218750000003L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001z"
                                                                                                pathfrom="M 631.2677455357142 125.36500000000001L 631.2677455357142 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 647.9532366071428 125.36500000000001L 631.2677455357142 125.36500000000001"
                                                                                                cy="180.21218750000003"
                                                                                                cx="686.8860491071428"
                                                                                                j={11}
                                                                                                val={-35}
                                                                                                barheight="-54.847187500000004"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1767"
                                                                                                d="M 686.8860491071428 125.36500000000001L 686.8860491071428 219.38875000000002Q 686.8860491071428 219.38875000000002 686.8860491071428 219.38875000000002L 703.5715401785714 219.38875000000002Q 703.5715401785714 219.38875000000002 703.5715401785714 219.38875000000002L 703.5715401785714 219.38875000000002L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 686.8860491071428 125.36500000000001L 686.8860491071428 219.38875000000002Q 686.8860491071428 219.38875000000002 686.8860491071428 219.38875000000002L 703.5715401785714 219.38875000000002Q 703.5715401785714 219.38875000000002 703.5715401785714 219.38875000000002L 703.5715401785714 219.38875000000002L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001z"
                                                                                                pathfrom="M 686.8860491071428 125.36500000000001L 686.8860491071428 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 703.5715401785714 125.36500000000001L 686.8860491071428 125.36500000000001"
                                                                                                cy="219.38875000000002"
                                                                                                cx="742.5043526785713"
                                                                                                j={12}
                                                                                                val={-60}
                                                                                                barheight="-94.02375"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                            <path
                                                                                                id="SvgjsPath1768"
                                                                                                d="M 742.5043526785713 125.36500000000001L 742.5043526785713 156.70625Q 742.5043526785713 156.70625 742.5043526785713 156.70625L 759.1898437499999 156.70625Q 759.1898437499999 156.70625 759.1898437499999 156.70625L 759.1898437499999 156.70625L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                fill="rgba(9,38,138,1)"
                                                                                                fillOpacity={1}
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="round"
                                                                                                strokeWidth={0}
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-bar-area"
                                                                                                index={1}
                                                                                                clipPath="url(#gridRectMaskzrdg6uip)"
                                                                                                pathto="M 742.5043526785713 125.36500000000001L 742.5043526785713 156.70625Q 742.5043526785713 156.70625 742.5043526785713 156.70625L 759.1898437499999 156.70625Q 759.1898437499999 156.70625 759.1898437499999 156.70625L 759.1898437499999 156.70625L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001z"
                                                                                                pathfrom="M 742.5043526785713 125.36500000000001L 742.5043526785713 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 759.1898437499999 125.36500000000001L 742.5043526785713 125.36500000000001"
                                                                                                cy="156.70625"
                                                                                                cx="798.1226562499999"
                                                                                                j={13}
                                                                                                val={-20}
                                                                                                barheight="-31.341250000000002"
                                                                                                barwidth="16.685491071428572"
                                                                                            />
                                                                                        </g>
                                                                                        <g
                                                                                            id="SvgjsG1724"
                                                                                            className="apexcharts-datalabels"
                                                                                        />
                                                                                        <g
                                                                                            id="SvgjsG1754"
                                                                                            className="apexcharts-datalabels"
                                                                                        />
                                                                                    </g>
                                                                                    <line
                                                                                        id="SvgjsLine1855"
                                                                                        x1={0}
                                                                                        y1={0}
                                                                                        x2="778.65625"
                                                                                        y2={0}
                                                                                        stroke="#b6b6b6"
                                                                                        strokeDasharray={0}
                                                                                        strokeWidth={1}
                                                                                        strokeLinecap="butt"
                                                                                        className="apexcharts-ycrosshairs"
                                                                                    />
                                                                                    <line
                                                                                        id="SvgjsLine1856"
                                                                                        x1={0}
                                                                                        y1={0}
                                                                                        x2="778.65625"
                                                                                        y2={0}
                                                                                        strokeDasharray={0}
                                                                                        strokeWidth={0}
                                                                                        strokeLinecap="butt"
                                                                                        className="apexcharts-ycrosshairs-hidden"
                                                                                    />
                                                                                    <g
                                                                                        id="SvgjsG1857"
                                                                                        className="apexcharts-yaxis-annotations"
                                                                                    />
                                                                                    <g
                                                                                        id="SvgjsG1858"
                                                                                        className="apexcharts-xaxis-annotations"
                                                                                    />
                                                                                    <g
                                                                                        id="SvgjsG1859"
                                                                                        className="apexcharts-point-annotations"
                                                                                    />
                                                                                </g>
                                                                                <g
                                                                                    id="SvgjsG1813"
                                                                                    className="apexcharts-yaxis"
                                                                                    rel={0}
                                                                                    transform="translate(6.34375, 0)"
                                                                                >
                                                                                    <g
                                                                                        id="SvgjsG1814"
                                                                                        className="apexcharts-yaxis-texts-g"
                                                                                    >
                                                                                        <text
                                                                                            id="SvgjsText1816"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="31.4"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1817">80</tspan>
                                                                                            <title>80</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1819"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="94.08250000000001"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1820">40</tspan>
                                                                                            <title>40</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1822"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="156.76500000000001"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1823">0</tspan>
                                                                                            <title>0</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1825"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="219.44750000000002"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1826">-40</tspan>
                                                                                            <title>-40</title>
                                                                                        </text>
                                                                                        <text
                                                                                            id="SvgjsText1828"
                                                                                            fontFamily="Poppins"
                                                                                            x={20}
                                                                                            y="282.13"
                                                                                            textAnchor="end"
                                                                                            dominantBaseline="auto"
                                                                                            fontSize="13px"
                                                                                            fontWeight={400}
                                                                                            fill="#787878"
                                                                                            className="apexcharts-text apexcharts-yaxis-label "
                                                                                            style={{ fontFamily: "Poppins" }}
                                                                                        >
                                                                                            <tspan id="SvgjsTspan1829">-80</tspan>
                                                                                            <title>-80</title>
                                                                                        </text>
                                                                                    </g>
                                                                                </g>
                                                                                <g
                                                                                    id="SvgjsG1717"
                                                                                    className="apexcharts-annotations"
                                                                                />
                                                                            </svg>
                                                                            <div
                                                                                className="apexcharts-legend"
                                                                                style={{ maxHeight: 160 }}
                                                                            />
                                                                            <div className="apexcharts-tooltip apexcharts-theme-light">
                                                                                <div
                                                                                    className="apexcharts-tooltip-title"
                                                                                    style={{
                                                                                        fontFamily: "Helvetica, Arial, sans-serif",
                                                                                        fontSize: 12
                                                                                    }}
                                                                                />
                                                                                <div
                                                                                    className="apexcharts-tooltip-series-group"
                                                                                    style={{ order: 1 }}
                                                                                >
                                  <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                          backgroundColor: "rgb(41, 83, 232)"
                                      }}
                                  />
                                                                                    <div
                                                                                        className="apexcharts-tooltip-text"
                                                                                        style={{
                                                                                            fontFamily:
                                                                                                "Helvetica, Arial, sans-serif",
                                                                                            fontSize: 12
                                                                                        }}
                                                                                    >
                                                                                        <div className="apexcharts-tooltip-y-group">
                                                                                            <span className="apexcharts-tooltip-text-y-label" />
                                                                                            <span className="apexcharts-tooltip-text-y-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-goals-group">
                                                                                            <span className="apexcharts-tooltip-text-goals-label" />
                                                                                            <span className="apexcharts-tooltip-text-goals-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-z-group">
                                                                                            <span className="apexcharts-tooltip-text-z-label" />
                                                                                            <span className="apexcharts-tooltip-text-z-value" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    className="apexcharts-tooltip-series-group"
                                                                                    style={{ order: 2 }}
                                                                                >
                                  <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                          backgroundColor: "rgb(9, 38, 138)"
                                      }}
                                  />
                                                                                    <div
                                                                                        className="apexcharts-tooltip-text"
                                                                                        style={{
                                                                                            fontFamily:
                                                                                                "Helvetica, Arial, sans-serif",
                                                                                            fontSize: 12
                                                                                        }}
                                                                                    >
                                                                                        <div className="apexcharts-tooltip-y-group">
                                                                                            <span className="apexcharts-tooltip-text-y-label" />
                                                                                            <span className="apexcharts-tooltip-text-y-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-goals-group">
                                                                                            <span className="apexcharts-tooltip-text-goals-label" />
                                                                                            <span className="apexcharts-tooltip-text-goals-value" />
                                                                                        </div>
                                                                                        <div className="apexcharts-tooltip-z-group">
                                                                                            <span className="apexcharts-tooltip-text-z-label" />
                                                                                            <span className="apexcharts-tooltip-text-z-value" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                                                <div className="apexcharts-yaxistooltip-text" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            className="fade tab-pane"
                                                        >
                                                            <div className="d-flex align-items-center">
                        <span className="fs-36 text-black font-w600 mr-4">
                          5,75%
                        </span>
                                                                <div>
                                                                    <svg
                                                                        className="mr-2"
                                                                        width={27}
                                                                        height={14}
                                                                        viewBox="0 0 27 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                                                            fill="#2FCA51"
                                                                        />
                                                                    </svg>
                                                                    <span>last month $563,443</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div id="chart">
                                                                    <div style={{ minHeight: 335 }}>
                                                                        <div
                                                                            id="apexchartsssr5z9sz"
                                                                            className="apexcharts-canvas apexchartsssr5z9sz"
                                                                            style={{ width: 0, height: 320 }}
                                                                        >
                                                                            <svg
                                                                                id="SvgjsSvg1706"
                                                                                width={0}
                                                                                height={320}
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                version="1.1"
                                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                className="apexcharts-svg"
                                                                                transform="translate(0, 0)"
                                                                                style={{ background: "transparent" }}
                                                                            >
                                                                                <g
                                                                                    id="SvgjsG1709"
                                                                                    className="apexcharts-annotations"
                                                                                />
                                                                                <g
                                                                                    id="SvgjsG1708"
                                                                                    className="apexcharts-inner apexcharts-graphical"
                                                                                >
                                                                                    <defs id="SvgjsDefs1707" />
                                                                                </g>
                                                                            </svg>
                                                                            <div className="apexcharts-legend" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            role="tabpanel"
                                                            aria-hidden="true"
                                                            className="fade tab-pane"
                                                        >
                                                            <div className="d-flex align-items-center">
                        <span className="fs-36 text-black font-w600 mr-4">
                          1,20%
                        </span>
                                                                <div>
                                                                    <svg
                                                                        className="mr-2"
                                                                        width={27}
                                                                        height={14}
                                                                        viewBox="0 0 27 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                                                            fill="#2FCA51"
                                                                        />
                                                                    </svg>
                                                                    <span>last month $563,443</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div id="chart">
                                                                    <div style={{ minHeight: 335 }}>
                                                                        <div
                                                                            id="apexcharts7t1zy4q"
                                                                            className="apexcharts-canvas apexcharts7t1zy4q"
                                                                            style={{ width: 0, height: 320 }}
                                                                        >
                                                                            <svg
                                                                                id="SvgjsSvg1710"
                                                                                width={0}
                                                                                height={320}
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                version="1.1"
                                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                className="apexcharts-svg"
                                                                                transform="translate(0, 0)"
                                                                                style={{ background: "transparent" }}
                                                                            >
                                                                                <g
                                                                                    id="SvgjsG1713"
                                                                                    className="apexcharts-annotations"
                                                                                />
                                                                                <g
                                                                                    id="SvgjsG1712"
                                                                                    className="apexcharts-inner apexcharts-graphical"
                                                                                >
                                                                                    <defs id="SvgjsDefs1711" />
                                                                                </g>
                                                                            </svg>
                                                                            <div className="apexcharts-legend" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-xxl- col-md-12 col-sm-12 all_col">
                                            <div className="card">
                                                <div className="card-header border-0 shadow-sm">
                                                    <h4 className="fs-20 text-black font-w600">Monthly Target</h4>
                                                    <div className="dropdown">
                                                        <button
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            type="button"
                                                            className="table-dropdown icon-false p-0 dropdown-toggle btn btn-true"
                                                        >
                                                            <a
                                                                data-toggle="dropdown"
                                                                aria-expanded="false"
                                                                href="/react/demo/"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                                        stroke="#575757"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                                                        stroke="#575757"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                                                        stroke="#575757"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-body text-center">
                                                    <div>
                                                        <div id="chart">
                                                            <div style={{ minHeight: "278.7px" }}>
                                                                <div
                                                                    id="apexchartsn2vsosws"
                                                                    className="apexcharts-canvas apexchartsn2vsosws apexcharts-theme-light"
                                                                    style={{ height: "278.7px" }}
                                                                >
                                                                    <svg
                                                                        id="SvgjsSvg1860"
                                                                        width={375}
                                                                        height="278.70000000000005"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        version="1.1"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        className="apexcharts-svg"
                                                                        transform="translate(0, 0)"
                                                                        style={{ background: "transparent" }}
                                                                    >
                                                                        <g
                                                                            id="SvgjsG1862"
                                                                            className="apexcharts-inner apexcharts-graphical"
                                                                            transform="translate(50.5, 0)"
                                                                        >
                                                                            <defs id="SvgjsDefs1861">
                                                                                <clipPath id="gridRectMaskn2vsosws">
                                                                                    <rect
                                                                                        id="SvgjsRect1864"
                                                                                        width={282}
                                                                                        height={300}
                                                                                        x={-3}
                                                                                        y={-1}
                                                                                        rx={0}
                                                                                        ry={0}
                                                                                        opacity={1}
                                                                                        strokeWidth={0}
                                                                                        stroke="none"
                                                                                        strokeDasharray={0}
                                                                                        fill="#fff"
                                                                                    />
                                                                                </clipPath>
                                                                                <clipPath id="forecastMaskn2vsosws" />
                                                                                <clipPath id="nonForecastMaskn2vsosws" />
                                                                                <clipPath id="gridRectMarkerMaskn2vsosws">
                                                                                    <rect
                                                                                        id="SvgjsRect1865"
                                                                                        width={280}
                                                                                        height={302}
                                                                                        x={-2}
                                                                                        y={-2}
                                                                                        rx={0}
                                                                                        ry={0}
                                                                                        opacity={1}
                                                                                        strokeWidth={0}
                                                                                        stroke="none"
                                                                                        strokeDasharray={0}
                                                                                        fill="#fff"
                                                                                    />
                                                                                </clipPath>
                                                                                <linearGradient
                                                                                    id="SvgjsLinearGradient1870"
                                                                                    x1={0}
                                                                                    y1={1}
                                                                                    x2={1}
                                                                                    y2={1}
                                                                                >
                                                                                    <stop
                                                                                        id="SvgjsStop1871"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(41,83,232,1)"
                                                                                        offset={0}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1872"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(248,248,248,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1873"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(248,248,248,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                </linearGradient>
                                                                                <linearGradient
                                                                                    id="SvgjsLinearGradient1881"
                                                                                    x1={0}
                                                                                    y1={1}
                                                                                    x2={1}
                                                                                    y2={1}
                                                                                >
                                                                                    <stop
                                                                                        id="SvgjsStop1882"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(41,83,232,1)"
                                                                                        offset={0}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1883"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(0,143,251,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                    <stop
                                                                                        id="SvgjsStop1884"
                                                                                        stopOpacity={1}
                                                                                        stopColor="rgba(0,143,251,1)"
                                                                                        offset={1}
                                                                                    />
                                                                                </linearGradient>
                                                                            </defs>
                                                                            <g
                                                                                id="SvgjsG1866"
                                                                                className="apexcharts-radialbar"
                                                                            >
                                                                                <g id="SvgjsG1867">
                                                                                    <g
                                                                                        id="SvgjsG1868"
                                                                                        className="apexcharts-tracks"
                                                                                    >
                                                                                        <g
                                                                                            id="SvgjsG1869"
                                                                                            className="apexcharts-radialbar-track apexcharts-track"
                                                                                            rel={1}
                                                                                        >
                                                                                            <path
                                                                                                id="apexcharts-radialbarTrack-0"
                                                                                                d="M 138 38.30853658536584 A 99.69146341463416 99.69146341463416 0 1 1 137.98260055736114 38.30853810375365"
                                                                                                fill="none"
                                                                                                fillOpacity={1}
                                                                                                stroke="rgba(248,248,248,0.85)"
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="butt"
                                                                                                strokeWidth="12.927731707317076"
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-radialbar-area"
                                                                                                 />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g id="SvgjsG1875">
                                                                                        <g
                                                                                            id="SvgjsG1880"
                                                                                            className="apexcharts-series apexcharts-radial-series"
                                                                                            >
                                                                                            <path
                                                                                                id="SvgjsPath1885"
                                                                                                d="M 138 38.30853658536584 A 99.69146341463416 99.69146341463416 0 1 1 38.30853658536584 138"
                                                                                                fill="none"
                                                                                                fillOpacity="0.85"
                                                                                                stroke="url(#SvgjsLinearGradient1881)"
                                                                                                strokeOpacity={1}
                                                                                                strokeLinecap="butt"
                                                                                                strokeWidth="19.295121951219514"
                                                                                                strokeDasharray={0}
                                                                                                className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                                              />
                                                                                        </g>
                                                                                        <circle
                                                                                            id="SvgjsCircle1876"
                                                                                            r="93.22759756097562"
                                                                                            cx={138}
                                                                                            cy={138}
                                                                                            className="apexcharts-radialbar-hollow"
                                                                                            fill="#ffffff"
                                                                                        />
                                                                                        <g
                                                                                            id="SvgjsG1877"
                                                                                            className="apexcharts-datalabels-group"
                                                                                            transform="translate(0, 0) scale(1)"
                                                                                            style={{ opacity: 1 }}
                                                                                        >
                                                                                            <text
                                                                                                id="SvgjsText1878"
                                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                                x={138}
                                                                                                y={138}
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="16px"
                                                                                                fontWeight={600}
                                                                                                fill="#008ffb"
                                                                                                className="apexcharts-text apexcharts-datalabel-label"
                                                                                                style={{
                                                                                                    fontFamily:
                                                                                                        "Helvetica, Arial, sans-serif"
                                                                                                }}
                                                                                            />
                                                                                            <text
                                                                                                id="SvgjsText1879"
                                                                                                fontFamily="Helvetica, Arial, sans-serif"
                                                                                                x={138}
                                                                                                y={147}
                                                                                                textAnchor="middle"
                                                                                                dominantBaseline="auto"
                                                                                                fontSize="20px"
                                                                                                fontWeight={400}
                                                                                                fill="#111111"
                                                                                                className="apexcharts-text apexcharts-datalabel-value"
                                                                                                style={{
                                                                                                    fontFamily:
                                                                                                        "Helvetica, Arial, sans-serif"
                                                                                                }}
                                                                                            >
                                                                                                75%
                                                                                            </text>
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                            <line
                                                                                id="SvgjsLine1886"
                                                                                x1={0}
                                                                                y1={0}
                                                                                x2={276}
                                                                                y2={0}
                                                                                stroke="#b6b6b6"
                                                                                strokeDasharray={0}
                                                                                strokeWidth={1}
                                                                                strokeLinecap="butt"
                                                                                className="apexcharts-ycrosshairs"
                                                                            />
                                                                            <line
                                                                                id="SvgjsLine1887"
                                                                                x1={0}
                                                                                y1={0}
                                                                                x2={276}
                                                                                y2={0}
                                                                                strokeDasharray={0}
                                                                                strokeWidth={0}
                                                                                strokeLinecap="butt"
                                                                                className="apexcharts-ycrosshairs-hidden"
                                                                            />
                                                                        </g>
                                                                        <g
                                                                            id="SvgjsG1863"
                                                                            className="apexcharts-annotations"
                                                                        />
                                                                    </svg>
                                                                    <div className="apexcharts-legend" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 all_col">
                                    <div className="row">
                                       
                                   
                                       
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="copyright">
                            <p>
                                Copyright © Designed &amp; Developed by{" "}
                                <a href="http://dexignlab.com/" target="_blank">
                                    WOlf Tech Solutions PVT LTD
                                </a>{" "}
                                2022
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default withRouter(Home);