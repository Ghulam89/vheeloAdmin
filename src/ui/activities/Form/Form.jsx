import React from 'react';
import {withRouter} from "react-router-dom";
import UrlArgsBundle from "../../../core/url_args_bundle";
import '../../../css/main.6120d571.css';
import Navbar from "../../../components/navbar/Navbar";
class Form extends React.Component {


    render() {

        const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(this.props.location.search);
        return <div className={"login-activity"}>
            <div className="">
                <div id="main-wrapper" className="show">
                    <div className="nav-header">
                        <a className="brand-logo" href="/react/demo/">
                            <img
                                className="logo-abbr"
                                src="data:image/png;base64,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"
                                alt=""
                            />
                            <img
                                className="logo-compact"
                                src="data:image/png;base64,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"
                                alt=""
                            />
                            <img
                                className="brand-title"
                                src="data:image/png;base64,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"
                                alt=""
                            />
                        </a>
                        <div className="nav-control">
                            <div className="hamburger ">
                                <span className="line" />
                                <span className="line" />
                                <span className="line" />
                            </div>
                        </div>
                    </div>
                    <div className="dlabnav">
                        <div className="scrollbar-container dlabnav-scroll ps ps--active-y">
                            <div className="mm-wrapper">
                                <ul className="metismenu">
                                    <li className="">
                                        <a
                                            className="has-arrow ai-icon mm-collapsed"
                                            href="/react/demo/form-element"
                                            aria-expanded="false"
                                        >
                                            <i className="flaticon-381-networking" />
                                            <span className="nav-text">Dashboard</span>
                                        </a>
                                        <ul className="mm-collapse" style={{}}>
                                            <li>
                                                <a className="" href="/react/demo/">
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/projects">
                                                    Projects
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/contacts">
                                                    Contacts
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/kanban">
                                                    Kanban
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/calendar">
                                                    Calendar
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/messages">
                                                    Messages
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a
                                            className="has-arrow ai-icon"
                                            href="/react/demo/form-element"
                                            aria-expanded="false"
                                        >
                                            <i className="flaticon-381-television" />
                                            <span className="nav-text">Apps</span>
                                        </a>
                                        <ul className="mm-collapse">
                                            <li>
                                                <a className="" href="/react/demo/app-profile">
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/post-details">
                                                    Post Details
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="has-arrow"
                                                    href="/react/demo/form-element"
                                                    aria-expanded="false"
                                                >
                                                    {" "}
                                                    Email
                                                </a>
                                                <ul className="mm-collapse">
                                                    <li>
                                                        <a className="" href="/react/demo/email-compose">
                                                            Compose
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/email-inbox">
                                                            Inbox
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/email-read">
                                                            Read
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/app-calender">
                                                    Calendar
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="has-arrow"
                                                    href="/react/demo/form-element"
                                                    aria-expanded="false"
                                                >
                                                    Shop
                                                </a>
                                                <ul className="mm-collapse">
                                                    <li>
                                                        <a className="" href="/react/demo/ecom-product-grid">
                                                            Product Grid
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/ecom-product-list">
                                                            Product List
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/ecom-product-detail">
                                                            Product Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/ecom-product-order">
                                                            Order
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/ecom-checkout">
                                                            Checkout
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/ecom-invoice">
                                                            Invoice
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="" href="/react/demo/ecom-customers">
                                                            Customers
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a
                                            className="has-arrow ai-icon"
                                            href="/react/demo/form-element"
                                            aria-expanded="false"
                                        >
                                            <i className="flaticon-381-controls-3" />
                                            <span className="nav-text">Charts</span>
                                        </a>
                                        <ul className="mm-collapse">
                                            <li>
                                                <a className="" href="/react/demo/chart-rechart">
                                                    RechartJs
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/chart-float">
                                                    Chart Float
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/chart-chartjs">
                                                    Chartjs
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/chart-chartist">
                                                    Chartist
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/chart-sparkline">
                                                    Sparkline
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/chart-apexchart">
                                                    Apexchart
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a
                                            className="has-arrow ai-icon"
                                            href="/react/demo/form-element"
                                            aria-expanded="false"
                                        >
                                            <i className="flaticon-381-internet" />
                                            <span className="nav-text">Bootstrap</span>
                                        </a>
                                        <ul className="mm-collapse">
                                            <li>
                                                <a className="" href="/react/demo/ui-accordion">
                                                    Accordion
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-alert">
                                                    Alert
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-badge">
                                                    Badge
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-button">
                                                    Button
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-modal">
                                                    Modal
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-button-group">
                                                    Button Group
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-list-group">
                                                    List Group
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-media-object">
                                                    Media Object
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-card">
                                                    Cards
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-carousel">
                                                    Carousel
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-dropdown">
                                                    Dropdown
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-popover">
                                                    Popover
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-progressbar">
                                                    Progressbar
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-tab">
                                                    Tab
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-typography">
                                                    Typography
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-pagination">
                                                    Pagination
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/ui-grid">
                                                    Grid
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a
                                            className="has-arrow ai-icon"
                                            href="/react/demo/form-element"
                                            aria-expanded="false"
                                        >
                                            <i className="flaticon-381-heart" />
                                            <span className="nav-text">Plugins</span>
                                        </a>
                                        <ul className="mm-collapse">
                                            <li>
                                                <a className="" href="/react/demo/uc-select2">
                                                    Select 2
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/uc-noui-slider">
                                                    Noui Slider
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/uc-sweetalert">
                                                    Sweet Alert
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/uc-toastr">
                                                    Toastr
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/map-jqvmap">
                                                    Jqv Map
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/uc-lightgallery">
                                                    Light Gallery
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a className="ai-icon" href="/react/demo/widget-basic">
                                            <i className="flaticon-381-settings-2" />
                                            <span className="nav-text">Widget</span>
                                        </a>
                                    </li>
                                    <li className="mm-active">
                                        <a
                                            className="has-arrow ai-icon"
                                            href="/react/demo/form-element"
                                            aria-expanded="true"
                                        >
                                            <i className="flaticon-381-notepad" />
                                            <span className="nav-text forms">Forms</span>
                                        </a>
                                        <ul className="mm-collapse mm-show" style={{}}>
                                            <li>
                                                <a className="mm-active" href="/react/demo/form-element">
                                                    Form Elements
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/form-wizard">
                                                    Wizard
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/form-editor-summernote">
                                                    Summernote
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/form-pickers">
                                                    Pickers
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/form-validation-jquery">
                                                    Jquery Validate
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a
                                            className="has-arrow ai-icon mm-collapsed"
                                            href="/react/demo/form-element"
                                            aria-expanded="false"
                                        >
                                            <i className="flaticon-381-network" />
                                            <span className="nav-text">Table</span>
                                        </a>
                                        <ul className="mm-collapse" style={{}}>
                                            <li>
                                                <a className="" href="/react/demo/table-bootstrap-basic">
                                                    Bootstrap
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/table-datatable-basic">
                                                    Datatable
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/table-filtering">
                                                    Table Filtering
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/react/demo/table-sorting">
                                                    Table Sorting
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            className="has-arrow ai-icon"
                                            href="/react/demo/form-element"
                                            aria-expanded="false"
                                        >
                                            <i className="flaticon-381-layer-1" />
                                            <span className="nav-text">Pages</span>
                                        </a>
                                        <ul className="mm-collapse">
                                            <li>
                                                <a href="/react/demo/page-register">Register</a>
                                            </li>
                                            <li>
                                                <a href="/react/demo/page-login">Login</a>
                                            </li>
                                            <li>
                                                <a
                                                    className="has-arrow"
                                                    href="/react/demo/form-element"
                                                    aria-expanded="false"
                                                >
                                                    Error
                                                </a>
                                                <ul className="mm-collapse">
                                                    <li>
                                                        <a href="/react/demo/page-error-400">Error 400</a>
                                                    </li>
                                                    <li>
                                                        <a href="/react/demo/page-error-403">Error 403</a>
                                                    </li>
                                                    <li>
                                                        <a href="/react/demo/page-error-404">Error 404</a>
                                                    </li>
                                                    <li>
                                                        <a href="/react/demo/page-error-500">Error 500</a>
                                                    </li>
                                                    <li>
                                                        <a href="/react/demo/page-error-503">Error 503</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/react/demo/page-lock-screen">Lock Screen</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="plus-box">
                                <a
                                    className="add-menu-sidebar d-block"
                                    data-toggle="modal"
                                    data-target="#addOrderModalside"
                                    href="/react/demo/form-element"
                                >
                                    + New Project
                                </a>
                            </div>
                            <div className="copyright">
                                <p>
                                    <strong>Vora React Admin Dashboard</strong> © 2022 All Rights Reserved
                                </p>
                                <p>
                                    Made with <span className="heart" /> by DexignLab
                                </p>
                            </div>
                            <div
                                className="ps__rail-x"
                                style={{ left: 0, bottom: "-169px", width: 94 }}
                            >
                                <div
                                    className="ps__thumb-x"
                                    tabIndex={0}
                                    style={{ left: 0, width: 0 }}
                                />
                            </div>
                            <div className="ps__rail-y" style={{ top: 169, right: 0, height: 493 }}>
                                <div
                                    className="ps__thumb-y"
                                    tabIndex={0}
                                    style={{ top: 91, height: 265 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="header">
                        <div className="header-content">
                            <nav className="navbar navbar-expand">
                                <div className="collapse navbar-collapse justify-content-between">
                                    <div className="header-left">
                                        <div
                                            className="dashboard_bar"
                                            style={{ textTransform: "capitalize" }}
                                        >
                                            element
                                        </div>
                                    </div>
                                    <ul className="navbar-nav header-right">
                                        <li className="nav-item">
                                            <div className="input-group search-area d-lg-inline-flex d-none">
                                                <div className="input-group-append">
                  <span className="input-group-text">
                    <a href="">
                      <i className="flaticon-381-search-2" />
                    </a>
                  </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search here..."
                                                />
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown notification_dropdown">
                                            <a
                                                className="nav-link bell bell-link"
                                                href="/react/demo/form-element"
                                            >
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.23779 10.2492L4.66679 11.7064V8.30554L2.23779 10.2492Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M1.1665 12.327V23.3334C1.16852 23.8531 1.28817 24.3656 1.5165 24.8325L9.20134 17.15L1.1665 12.327Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M26.4832 24.8325C26.7115 24.3656 26.8311 23.8531 26.8332 23.3334V12.327L18.7983 17.15L26.4832 24.8325Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M23.3335 8.30554V11.7064L25.7625 10.2492L23.3335 8.30554Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M21.0492 13.0772C21.024 12.998 21.0076 12.9162 21.0002 12.8334V7.00004C21.0002 6.69062 20.8773 6.39388 20.6585 6.17508C20.4397 5.95629 20.1429 5.83337 19.8335 5.83337H8.16684C7.85742 5.83337 7.56067 5.95629 7.34188 6.17508C7.12309 6.39388 7.00017 6.69062 7.00017 7.00004V12.8334C6.99274 12.9162 6.97631 12.998 6.95117 13.0772L14.0002 17.3064L21.0492 13.0772Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M17.3262 3.50003L14.7292 1.4222C14.5222 1.25653 14.2651 1.16626 14 1.16626C13.7349 1.16626 13.4777 1.25653 13.2708 1.4222L10.6738 3.50003H17.3262Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M16.7358 18.3855L14.6008 19.6688C14.4194 19.7778 14.2117 19.8354 14 19.8354C13.7883 19.8354 13.5806 19.7778 13.3991 19.6688L11.2641 18.3855L3.16748 26.4833C3.63438 26.7117 4.14691 26.8313 4.66665 26.8333H23.3333C23.853 26.8313 24.3656 26.7117 24.8325 26.4833L16.7358 18.3855Z"
                                                        fill="#67636D"
                                                    />
                                                </svg>
                                                <span className="badge light text-white bg-primary rounded-circle">
                  6
                </span>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown notification_dropdown">
                                            <a
                                                className="nav-link  ai-icon"
                                                role="button"
                                                data-toggle="dropdown"
                                                href="/react/demo/form-element"
                                            >
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.3333 19.8333H23.1187C23.2568 19.4597 23.3295 19.065 23.3333 18.6666V12.8333C23.3294 10.7663 22.6402 8.75902 21.3735 7.12565C20.1068 5.49228 18.3343 4.32508 16.3333 3.80679V3.49996C16.3333 2.88112 16.0875 2.28763 15.6499 1.85004C15.2123 1.41246 14.6188 1.16663 14 1.16663C13.3812 1.16663 12.7877 1.41246 12.3501 1.85004C11.9125 2.28763 11.6667 2.88112 11.6667 3.49996V3.80679C9.66574 4.32508 7.89317 5.49228 6.6265 7.12565C5.35983 8.75902 4.67058 10.7663 4.66667 12.8333V18.6666C4.67053 19.065 4.74316 19.4597 4.88133 19.8333H4.66667C4.35725 19.8333 4.0605 19.9562 3.84171 20.175C3.62292 20.3938 3.5 20.6905 3.5 21C3.5 21.3094 3.62292 21.6061 3.84171 21.8249C4.0605 22.0437 4.35725 22.1666 4.66667 22.1666H23.3333C23.6428 22.1666 23.9395 22.0437 24.1583 21.8249C24.3771 21.6061 24.5 21.3094 24.5 21C24.5 20.6905 24.3771 20.3938 24.1583 20.175C23.9395 19.9562 23.6428 19.8333 23.3333 19.8333Z"
                                                        fill="#67636D"
                                                    />
                                                    <path
                                                        d="M9.98193 24.5C10.3863 25.2088 10.971 25.7981 11.6767 26.2079C12.3823 26.6178 13.1839 26.8337 13.9999 26.8337C14.816 26.8337 15.6175 26.6178 16.3232 26.2079C17.0289 25.7981 17.6136 25.2088 18.0179 24.5H9.98193Z"
                                                        fill="#67636D"
                                                    />
                                                </svg>
                                                <span className="badge light text-white bg-primary rounded-circle">
                  4
                </span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right ">
                                                <div
                                                    id="DZ_W_Notification1"
                                                    className="scrollbar-container widget-media dlab-scroll p-3 height380 ps"
                                                >
                                                    <ul className="timeline">
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2">
                                                                    <img
                                                                        alt="avatar"
                                                                        width={50}
                                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                    />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-info">KG</div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Resport created successfully</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-success">
                                                                    <i className="fa fa-home" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2">
                                                                    <img
                                                                        alt="avatar"
                                                                        width={50}
                                                                        src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                    />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-danger">KG</div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Resport created successfully</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="timeline-panel">
                                                                <div className="media mr-2 media-primary">
                                                                    <i className="fa fa-home" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                                    <small className="d-block">
                                                                        29 July 2020 - 02:26 PM
                                                                    </small>
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
                                                <a className="all-notification" href="/react/demo/form-element">
                                                    See all notifications <i className="ti-arrow-right" />
                                                </a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown header-profile ">
                                            <a
                                                className="nav-link"
                                                role="button"
                                                data-toggle="dropdown"
                                                href="/react/demo/form-element"
                                            >
                                                <img
                                                    src="/react/demo/static/media/17.a7b6b9cb820bffd162bf.jpg"
                                                    width={20}
                                                    alt=""
                                                />
                                                <div className="header-info">
                                                    <span className="text-black">Peter Parkur</span>
                                                    <p className="fs-12 mb-0">Super Admin</p>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right ">
                                                <a
                                                    className="dropdown-item ai-icon"
                                                    href="/react/demo/app-profile"
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
                                                    href="/react/demo/email-inbox"
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
                                                    href="/react/demo/page-login"
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
                                    <a className="nav-link " data-toggle="tab" href="#notes">
                                        Notes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " data-toggle="tab" href="#alerts">
                                        Alerts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#chat">
                                        Chat
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade  active show" id="chat" role="tabpanel">
                                    <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box ">
                                        <div className="card-header chat-list-header text-center">
                                            <a href="/react/demo/form-element">
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
                                            <a href="/react/demo/form-element">
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
                                                            <img
                                                                src="/react/demo/static/media/1.01c1b0d69b9e5f83c058.jpg"
                                                                className="rounded-circle user_img"
                                                                alt=""
                                                            />
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
                                                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wgARCACWAJYDAREAAhEBAxEB/8QAHQAAAgMAAwEBAAAAAAAAAAAABgcEBQgCAwkAAf/EABsBAAIDAQEBAAAAAAAAAAAAAAQFAgMGAQAH/9oADAMBAAIQAxAAAADx7XsqL0yxW/MlWgMlbtqKXLPDMZFciiURm6nkSNHvHxU9QrLSYsLZoqaqx+WGz/dO/FZIoUSw2Z0o00oRgSgMXEodscUtoVTIZRppRICReskTNpwmZ9HlVe8yVXMaz9c/rrnreX5/Llb7S6qkAcdQxJMIe5UzxijknsfXPfRueYJAtuQKjSqseukWd3+PHWKUr7MtlJ+kkJNR3QCnSZ7qnRd8YhMmupfsQNg0R7ieucjk2gSCSGAgk6sdGhZEeZhEaDDzJWOjxdv645WnndBeQCAOr3Ky4X6UXUk1epMpvXytY9By7MOhyIG4Qjdo3OkhZ3jKVlnvz0mn254EXx05rtDb5kGJELKZ0Jd/pDRa11odZtvMa7peZ1EFgdYx7CpvZULMts1ODtj8wh2Uk3bNU2MqRWT2LHufGmcryl30emlDEUqJLFr31Cw+90hH3m2/R5L1OGYxAleCz5CNVE5yQyeusI+0rYVPUNaRW8UR6mIWsvq73XSbma4LvFY+u+C+naBE95s63LJRmmebdMqFbQNlztlBCPMjYd8xeXlS1q30ulUI51dMe6pKIfWpZrnYnrfWrGb/AFgBZnc2hBFUzPQ5R7nN2hSbvLKB1lJXbH14xVrWOtk2jW6xw9kOiMqpJtiFl3V4whDP9Xs5qtcVUq4c1aW+E+Rgdii2QOHNp84WLbNWUZn0rwFYw06r0YjSU10Wk0ypbJFmvxJsvnOg8ztfRtK/3TqMd5y4vd/lnn6Wvgw9ixiu8+d78sGzFEiNpRGwJj5ggOmKrfX65zpNPoFMyX52d5Q9DZ7+y2w2A2S5wTu8s8t3NIas5DBL/PYO3fyjjKuyjf39kKyBnjmP3ObmwHYM5W8A7qU89y0G4Lc+O+kP0Ypti2KqULuuUCdXnXuvnmc9PhJsJVsvEvLw3oXP3Gwg2peA1mDMOVZAcUuNQ2W2ET/0M0WbsKuozO6NGClKtkuwD9D+SgjRLYcmJ9GOfFBfBe7nbIRsz0etKg2XKypVMl1Xac2Uu1L6WulR11gtXlCxkin+dxL9D+TDVopfy7jzgnKiB6FhG6plSw0myZ6jQ0V9CpcJWnnvr5eMycYjk2XrimnLrgwHL+y+dLJ/m6yVburPBI13FtSb8FZRl2SlXVdYiTYkwTckFNpbzjMHRNgGDnXjhna8ta7DZ51eAuvW0sqGXUz7O91heRgalLMl7h3tJ6n6FrGQ7dyotU3VTrVwpjlsDTYJXn5scBkrbfOLL0/33YPaj+o963Edw9+VLUl1yfCUK30B31cqJDlzm30jndmzBCiePsrP8vlHW/PqshfI9Zddslc4aQKYfC1lTV//xAAoEAACAwABBAICAgMBAQAAAAADBAECBQYAERITBxQVISMkFiIxM0L/2gAIAQEAAQUBciImkd+g06FH7VntKkdxoT3qvT9RTuEkfy/X72YSqXL38zxebBD+ASldTjq546yHaUTDLmDyJuhyLL29iaqhCzRb0xX9dKR/IjSfFWk9K94F27int7ggm6MD65MhPtfXkJilvnbjSv02liXBXJZW+osmGtc7z8c/NqDNNX+zQc9K0/kRiPUt49L1i14mYFSs911r2qXPn6+2n7EtNaYs/Yql6MCuvkluIpAr0czdihkMfKC6RxH62a+wBS4ttXzV0lSsqO1jpRqsnXP+u/thWY8w3rEVNS4tNQBRbqVAk5AGPKI7WAcq5VOTKuJ6SkxT49pX18tO4DKLlOXL+EemLoPL9LPuqzmcmtfrL0ommdf2r6TglE9j5E0Rvf5xy1ul9rk5yGBvu9attAAix2JE16xMauhGUtXKv8dX73M7T8dotVEb8/UUh5BQvVvoO9QmILWE9P0+M39ie/x3QMQnCgLMfh+PCsi1xkHVdPOqryi6TMMD9TkRPWcy4i//AJCo2j8eR/Hov3C3qse59HPYfNY7SrJgO0kjN/XjOzDHx8L305MzOblcl2GQw1pm+1nfmGQk1i5zzGjZxRtS1TUrMlBetL4urjXU+O+1lN9a1dQqVJuKGUHzCprOqUGtxBpGU3s3/Vr4s7SXlIve/wAt4xoPbb+IwdXiuqTEyeSZuvvbSmb6Y2l6Vy4r12rJR0ZzB/Hzfq5DvL19/wCPk3X4U3tFmeuYrFF9OJu8mLtf4njuxrrQQu/j2OK+QAkix5HDKHki0lZZvkJbfWm80raO6uC/3zsJv6vKdX+bNRL4sZ/pNS+OuQOqn9WGyxbRzl5Oz8WhgDT0R9lhoAVTogLWyR/GyF4pyFeg+uRW8zz/AMS7Tfjx60aBSfp5+j9riM96M5Dv7zywRblZIGhSpGtnFBAXeD29TDqUsZ3MtY+dyfL2bWhIIrLadKQDlN+w9U8l0qx3RUiZLl2oRoLFwxgPW+1bpC/Y2WeKo8pP9oWHT+2I9s/kHCtCl3NLm6Oc78qKK6XHcNuwX8ov9HXN2U5c32zz2kp71n0r3m9iBvII6SL6NQFvIQZmpo0PWq8z7aTc6WmVkultcBZn7vJfjC+q8txua5GnxeKHz2LLi0n4lbmT/tP4+K1Ij8WGe1CCu2H/AOzBuFjNY9yNCdWP/pIZ9JQxN8LDWZ5BynHLnnyGPscXOCkLaN/GzxYgusz4J7BYZ1Txa9RzSuTWZrRHwtH6tDlpuzmM+tgV+gL+cbrQM9S+t7In/wBMblTKeYnz59NzH+bNbpXnWho75DDvXkb1AJUP/T/19Cid75+knUOdSZFT/lCV9uZEdiIteyirPYWmKHOpF6GcgS7M2TTBs4f4lDjmTeG39FqherO3BTkuv9zT/gFjefqSmoEc5ittIBeKF/J2ntdQsUOypehQmkJVnImojRM/SAwH8N9UoMDZ1KpcL01yCx7CE/H1w7/IPRFINZluaWZ8pM0uxdh4OW5VhGllNIgK9LVNW9a+StxTSwiXFdNml+ku118hEJTZIEgLFssRLWbENbl3JvBq1yEKKfriFXvFLeNswBohn0nw0ds9sklptZP2ewhbeBVJGfoBbhLkaXnXN0Jr0rr3ixeUXGHk3M2pkszPXut3i1vQUMDgdlok9VvwqMFXPoApnsf/xAA7EAACAQIEAwUGBAYABwAAAAABAgADEQQSIUEiMVEFEyNhcRQyQmKBkRBSsfAkM0OhwdEGFSVj0uHx/9oACAEBAAY/ATlRVB3AmQfVogUWHxQwD8B+AO/nDbrLnW+0dQOQjgKCdr7z2cKWxVLVfm/Y0lXG3/6lgwPahbWrT5Cp6jk0yYhM6g6HcT2XtB2xPZlRcubLns3r1ttPZXAq4TGL4FVH8LEqdr7H1iPRRjRQ922HZyz0yOo+vMSor8RA4dplUcztNfe3/ATTT8P0j/ea8rzMDqPe2lRdbbGFwOUapTGvNv8A1KPauFUNQJIqLbRr+8h9RBXwh7zs+rrR3y/K3SCrhC7USLVaJF7efzfrO7WknaHYlZvFw2e70WPxJ/qGhiHLooBoYog2dNlNtQ3kYUtw+katl4zvCOfnOv4JBFHvG3KE6fLLDrtEUDh5+sY7226xwRxjeOMscDjpMOKmw0M7im3dKDdBU1APT0MdPZziltx01bjH/lGxnY1Q93oXoVLgrb9DM5rurrZSwbK31tPCuWSzVABoDEQcsvO0bO2o+EczLap5mJkca6QrnW4PWGzCWvpyMsPdUS567w3NiINfUCEBgGYWF4+qn0M1UqLbxh5wMrZSPdMOF7ZoZjtiE0ZT10lCphcU2MoZbLXoHI58jsZjbEPlazGFcImtT4udhC1UOzkalpcJea0XW3QTw6ra/WUErDiLasI4Y6Ec4bcWsdk/nBuFesrUMDQuG4SfPcwEY72XDBde7XKzQuMZiXqMcq00qWuNoTjaz1X5iwOrTuccnf2+MbRSOZGs4r26x9BVS2pTV6fnbceUrYfHVaeQcxUuwvsR9N52wvIDLaV0qKHI5Zo55bzgDP6TLUo1PXLeXVVv1XQiEo9gftDSqHjG85X2ngI3ERf7xzUrmgpHFxazizsB+Z9JZFw2b5nvOCjRy2+FZUyqtrdJUEJEp4nAOwqqfdHxTD49sOtejUTKy31p1BzU/wCPWdtuvDwpHUmwvDx6RxhBwJ77ypTFRh3bFeJbcoe9wpcphUxFSrSWzUw3K8F2DjZ15GDXiiD4SRCEHitoNJWN/E6vyX1jPjDUrnmFOgtOz1wvY1HEJjs6YYuNCRra+x6SrQqUqvY+NRrPhax0/fpHPx+WsRqlh31x6HrMo9/pFqC6tmsbGzKdiI9H/iTC13awKYrCJZn8ntv5ztxd8yx184c/PYzv8I+TqFPOHE1qbYasbd4y2yt5zFYDB4pBicWc+LxRpmo9ToL7SqneiqpN+UHrKIPI2iX90NaPV79KFALwBr3DSlRqOneqmRqmW4YbX9OsoNXwbdtYvBLkwFNaXc0aHVzbVjK/aPaVAIW1T4R9BAq3ZfmOqxDfVBeMOflvEdjdX4HI67NPFwf/ADHBnRbaGm35TMfh2072mDb0ML8gYckIKma8hDpcRza0EwnpK2l+LSCug1A2lqlLKwl6dW3qJUDeIbRtOcyknXQxXX3xv5iVsgsmjKOkHfYcV7ot1dyvLQH/AAfpMPivdytlqeYMzg3tLE6wCooJjWQXtHFtI484gA1mGz7aSvcbzu2K35axilidpwDMPKXcQsIVG5jdBFRtf3eYmliW5C/3N53lr3FtJSLG9TJkf1EP3EGbQznfSVTvMlPUnnKCHieU7ddIuKT4hZhB2fV4OG4PUTne43ge+nOOQLDpKg2EKg2A1mY83bKJVtc2pmVBVUB8nMjnrDkNvSYqg3utZx/mZhrtNPrOf0vHUfW0xth49wovKYqkCpzy31tEZSLc5guy6uMpU69RM3dFxmYdbdJ2T2hhGWpixXKhh+Ugn9YKFfhKnW8Fjp5yrrfSVLnVufpK9Rhcn9iUwDyfnHqroCwuBFphlpujsBmNgR+7QiU32vY/gSNNYUXfnD5QYvCP3dZfLQ+onteIprTxP5k0vKXe56ZH9NhYv6RO2Vo+04+swepXarY0/TylKjimOIFNLKT+sNamuSqPLnBTe4jAmGkH01Bhc88v/wAjkgk2BHXTnKtMjTQH1vErIO8q2CvpfNbkfUcob6Rqb6PoYjX1As05yw3jEmWlCni69PD02YXLtaYCp2MntVKgqZCnlMGzJmzUlzKPhNuUdRppCvO0LJKzX1tMYOeRP7kykgHJct76c4cjZmJbxPTYQt+Yf5hJc0w4zApt1EqE8VxvA5OpQQ0jor/r+Cm+l5Ssc+fnaKmHsjfmaL32IBfmTe89jxOPapTpn+HVqpyrfnFfs/G1kr3/AKbm0OF7W7Mq4v8A71JDm+omJGL7JrYDD/D3q2ML57+Ud3PCq5jczG4iqONnuF+trn7ziYlUzet5Q4SnA3MdT+/vM5ZUCsAQNSTaDuqlr/2hOxGkRxqyXzS4NtxPm3nOfvSZayW/zKYfLmNcZywuFS2swIy0smIR8zOOFDmZVv8AYStiquDz4ioiOlQEeE687dOX2MXGV0SjhB/KpAWNX/Sw8I6RlzWWDApVCXcd6SL+ghbjrs9Y2Y6Zsvl6ymb5Hqk5Ra5A6ynhyCSKOfEP8QJ4gsohnyMjWyHS9957L7XTplKQZ7qTxHYeky7bQ5r5d4cln6gHbqIW3385cHQzWFatMOp6y+AxLa/02XNaKgyF7+8EN4ntuasdsw4ftM+axjFzHo0TmxB5KNvOZmPi1Gtc89YmHpn+Gw6ZR5nc/WZr6AWv0AmLduNHpK9IHlsLmVM9KsXD27wjSp/ue20qi1mfB00bS5Xc3/WK18mbUjpMRRyZ7JfRbta+0bKud6B1A3UmODsOsuOW4gN5kveDvEu0uFAPSc0ud7axl0UxsHhGzYj4twnr5xnLMWJ1O5hqDjxLaL8ghLNkRR/eBsp7tdbesZaqs1KqctPa/T7ylh8Lc4TCr/EknxaL2zBmImrhsepysKgF2Ubnz849MtmA5XiUVIV8gdKm6az2mr4mfS/Jx11/3AjOG8LPmtqR+BZfrAcpmgtADm0mUU25R8NhgUqstzUb4fSXZszNqT1PWeQ2tzl782ufPSYdflQnzZtYlfG03rlwWSnTbIqAG330nZlbC4f2T2t1P81nI57n0mL7RpVPESnkrpfhqixFj9zKoW9VUYUxm58r3M//xAAiEAEBAAIDAAMAAwEBAAAAAAABEQAhMUFRYXGBkaHBsdH/2gAIAQEAAT8QkxTOW/Zy/fGMUB7+I2r4GaXdKEiq6v51jluNYamfdGIJdrscd1/H+cIg0NPDsTeWYQIqeYBSAUo59wv3AHm8SriniG0cKouTygQDuoUdIYuNS7z1zlp6EcSDfcPpenu45VYAISCLYE7c9YAIEXEvmPnqJMdTGybQ6QECREwyTCAq+lwcJgoeZdF5wI7SYscLHK+A7zUgCaXCykUT6cQF44o6DnCHIgJTkjE+LlisXShaOQkJmlAOl/44d2GtuJxJh24f8ubJ/g0k5flocbItJPQnER1/pgku2Ng3UbRwJyYd4l1l4poEvQy3bEZtV00kX1ZN0ClEy0qAgu6E2KZvvLNU3Ec4kW0cKABdYFyUwhhI+9mFobMKBoXDrTaMRTtwZooX99GLmN1REeJvDKDaUm1EcUG0G8QXAtp7w/kwTIYjF4x7P95MM2yvett58unY5WnoOh2IsM4dOiNweOginwQTTumTrxiRlSnu9adJOxaRzgUxBuEH1tXLFXfUcfX8ysOnRki4gfOAQBEQ7c2+Bm9DXWGyBQl3t9MBHGIOhCa83ilv0X0raH+YeBGV1clHKBO20PsmQF3drtHC+ooQ2FwoKo0bjxlF5IR93i4tsGI88mIyaSIOhO/9NxZHlAKtTh95E2ZWqFtlzwfpu1NXNnZirbxzxg24dHObj5KfqZRiHw6P8+ZJEgpimQymT2pT6wgkQbXTi6Ryg2udnDQnw4uJr2gaB+XNj8kwmkHl0cmEHO/QnINB++q4Ec4ggueOA0Hu3NOoCX02Irz3MBgQ/MRQv2Rz+oCbPs7MN+DKEOg9Pl5Bsw6AQPw9obG4toR4xtClT+i4h5SECjuOKRN3+2MH0cm6BpwjGV4c7M+jvG2J4vy2Thxb24HwGC4Q0XF3XijliQeyt7HwQ5w36i6W10dQXXrgesM2AgfnOD8wSR/LzixKpE9n2d40ykVFOckuwYdwuhwDgPrdbqO9HImvc3Vg6H9QiAI108XUDXfNwMU3XjjUNBPTHmjms0NmuXjHRrk9OSk8wlQ0VeSt2lLKZautu4fTpOzHtkOFyNI524S6mjZI84Ta5ugPV/nLkNCCbVsJwCWZJfzxSVARQSsNvFcuag9q7uIZQsmpfTNf3BVlFNMKzpQSApaD7p+8S1wRyNo5P/ecAutPzQDdh5G5y5viPXohHdyP7hpa8OT6Ji5l60B8TjEZ6EW/B7A37hUutmCI2ENQ4wx2UkC72GRsazzHxSe6/hwzH5XDoSlQ064uADge6ewHnaCMZjRqEgIgAvFBUAWZ5qHhNocgdNy69Wi/QdQ+rhjF5pIlNZvgp28EDWfIbwPd9aPb9NXjhzedNbF2w2Qr4iIuC7doe7NfTjykkP7wa1vEyUZ0zAr1Vo5t0RQNDgJZxNfa59uGAjqrDXWVjWvTH7echK49aeEw1geC9ZumFce7wUAUR0XnHICargT+xOcOU2ZsCpPxZg2Y6qNBSxAh8LNto1ry5f5RcU4v/GCbO0ezGYbIvOPhHohhT4Rj9ZTggzI305x40wdyB1pNe4FuVBym971hjodjlX64PnNdBeftj1weYv58avYg/iuQoFVa94D3mMeEr+IhgtI22t+j4xcGFvdN6197zn4lutF/TF8U0wQ6gObBsDfL7gnSaP1vjHJqqvDv6yNKt+izPjI43Gq9IZpwqVg94oJ8UTJK0FNByWig9dyOawjroYNwSq/zcgLq+nesJA3PchcEINo5H4cDLypEJol+3FtByPK3K6QQfNiwutTa7edJm+bpiOz6yOWBtMBLEf8ApicUn6zoyJUQvINtyu8GihdpaZBPTbWC2gBuNF3HN1f1aD6AHDmYKLvr+8BUainYwZrf+sM+7T4Gri7Jl8FYPoJgV1cfDLb+YnhraALsny84rjkChY90qOo4AUNyZf2O/wBHSYe7cIfId5qQIcvJIBcR7yKa8Kcq3K4CI7AdJyZw1X3DtP8AMNHDq0PFOkXnCKv+z8DOCQAw/mk1BTf+LgWtoSO0cP1Ag905x8Ghtb7kWxIfCq/zDCGoGxZWxfnOTq0DSQiPZQyXWhOymzx4wKWwZ7hJsDa4sceD7w59QT52Y/ouenOGrKQpjt6qq/OPppx94jwIvcmBflz6v1uqqjI5eYMhVaUdTJJhW/DswX4RP44zRLWp8+5XDwn+ZQSpjCDL+zRhLgq0CQ3vm4N2UxFuocAz7cLVaK+Ow/jjJ2dUqov6DgInPvRXb+YlZ+n0T/BzgwKL40/yYSznBb2FfjeF5hQvY/WF7La0wLcWq6GzeDm7Ugnt74OjCHcpOr6cLlnwZWdB3RdUdjPnJ9U05YQkXoLzDOfCe5WDvAChyuamSDWqNv5y5t+jjwsigKgTqrg+i5zggJTW6HbtzWBHDp22eIwaYNqPE9o9/GBe8FORaJ8f8MYrEI++/WCasGj84ESJg26qA/PezD07Sakj0nuXKHArqg9FJjxMCfwxe0+LmgbfQpAk0UM3VHC/mtclm3hfeesM3UALzMNCPY8zN6dk++gP5cRHqJg4GUrfXAXEDrtUiSvsheduU/P9d2HrSLzVDCUGo4TqpxtCuc0H5AqshsSprYYRjRlcH5hUVYo3BY67fvnZiWwOGQexOxOuuHA46aHQP9wtaX6ZJ8tGAcRuNH08n5gG3aM5PiRn2XFaZZOK75mBwuETPj0sO8fNRBUdphFlG75cmq+8QevDwxiCdOLVvXJ8vRh+wHgiqPalYbTWQdUt8WHHULDFRdqkbD2A1OanRl+hMqA0g7QzjnxmPxG0oiC9WCcnLTDkYAnVGnX4aPcuqQLrdVHWJaAG/cEQ3pbk+6CsLHZjveJ8+Gj2BvJ945QiIOFBYXUiDA6sv9YkBzCRAGr6YbZeQdKdn3jlJu2go79dgxzTrqp6vNzVkDGI5tX14HoyGmxQGQ6Dt7vmT9HE+4RPtOsdrvbL0geRUNcOFOk1gfNhBUEJNjSYMDG7hMCxCgiURmPUgZj9Pw6jOTJtwOu5Gn6AThMIYFMtVJB5NaA/eDwWIhVlOn3aYukKIbfcUv4HTkuM4RTAN8Anf+4AGw4THS23KT/uarNCI2aC7wIYq/lHa9cBgQfgAXr7+5ZABBnAqPx8ZdFFjvcL8RkwUqo2SuFVHgGVbMUtElXSRsDFWbgQuQOSBvqPJiUo8t6rO3YfQZ//xAArEQACAgEEAgEDBAIDAAAAAAAAAQIRAwQSIUEQMRMFFCIVIEJRMjNhcbH/2gAIAQIBAT8AiSaSMk22ycm0SH49FIRFiNLlaMU+LQknC14i0+H4/IpInNLsnK2MyEqTZ0NeE6IeMDpGCe1cswzuFeP+UQSaNqJOosyNtkm2Nsn6Jp2UxJlPxFMSdcGFtMxzNNNS8IjaHJJGSTSokiOKWT0h6SaRLTZEqZPBJN8EsTSNj8UkQRCN+xY5RdpGO0uUaKfhcCdjM3ukQilzI+eC9ULVY+yOfDNPlHxY5+kZ9EoxdcmTG42d0YcG8w/T4N2yOkwR6s24UuaN2DmqMMccn+PmMSONmf2i1TNkmR0k2h6aUfTIfLDsjmck0zVQTfBJVM0uWGKFyP1Jekfd6mXKN2qE8vfBo8k0+WY3cfEWPIu2ahl22YIKmLgWNSJ4K5R8RqoVBsmry0T5ntRpdMpO/wCjHpoVSPsk1yiek6aI4Vjl6MM7QmnGykY1CTe41Ho30zFl4PkRLULH6PuyGXcajnGLnVUZJVqWjR50sXPZj1Siz9ThQ9f+Xv2fJv5RhvfXmkZv9ZPo+Wj7tI+dS5Qpp9mnk0jLO0/+jCt2so1MNmeRjyyXoWaXZ8oslGnzKjTrdPzbMy/CjqjJF8mRNdkMrMOSU+GYYtQszT2ps0dffKTNdDbnkmQmqOrTFaLZpW7o0a7O78IycyaGqY4ppmbEkjZTNLDmxVDGamTcGaZ1qLNfpFkxfMj42myDIq0VyaWNyNLGo+H4ljUvZqMSUeD+BkXA1yzT8I1D4i30SgsuFyRseKTsya3L8VJNxRKeN/knd9Dg6tEWJps0OLfMiqRfQykXxRlgpY2jnlMmrQ8aMacTG1khTFGOLE0naNY4ctEZ6tYqj/i+ujHpmotvgtwE6I8tH03ElUvHrxS8VZmioyY1aNqSYuCLcVwZ801BpWdfkaVJ4UmZ4pRMjEaeO6Ro4KEL8deehGpx742U0iUmkaTAsrdi01ezhKorjsz6JTluilZ9nKHNpE8E5Kvksy6bZG1IjBmixOUkv7IpwqK68r9jVxaMmNxRKJp5fE7Re+Dpmd5cV9WY55JQtPklkndP/wBMk5RVLsxp/wAnZGFn07TbVuYu7Oi74Iqjn+vDXiUVOLJ4aNtWRyzg+CWohkjUz58OPgnmg/ROcWYVus0ejeT8+iKUY0hd+O/EHwWxeZQ3RZkxNWZEzJJo3MtUVcuD6b9P3fnP9io4sSHKikXX7JQTRm0/dmTGLGiODd2aTQwUt0uSEUlS8rxKJdKjcm/R/8QALREAAgICAQQBAgYBBQAAAAAAAQIAAwQRIQUSMUFREBMUFSIyYXHBICRCkdH/2gAIAQMBAT8A8DiINmY9exKVAlJiRSYfoRCODD8TLqDTIqPII/qAEAytifMB3xKyQ0EHiY9ZYeJTXocxBKPcrHEQQ/RhGHBmjLl/iZVXsCWKFfmdvxEOjO8RD3CVDfBmNWFEr5iiU8SsDX+k8D6OoIMsTgzLqCAmKQRxF5E0ZXsDzMWoOST6lfCw5NVGyxlfU6G88SrPpc8GU5SMNAxXBi8fQjUYRiQP5n3QRyYxT5meP0nicjxFdlESwHzNAzC/aZYXI0BBhWvsnc/Lsj43/UfEyaudESrIyK25MwuqPY36uJTarruDWpZeKgSTMjq7gkKIc/IcH1A+UTwYteYw8+JdbeqacQ63F0OCYirBMEkqYqwXJUOYeo1r4G4mej/8dCdmNaN61PwoqOwZ0+0ldH1Ae5ZmVWWtpYnSCT3MYuBiIOSNxUwx41ClHrRmVVT28iXoUsM1vmJxK1BWdPB7WnaANzLc70IA7E9vBn3bV8nxKsssNHU+8xBO5020PxFJFW5SAULGZWWa048ncuzbF2W3PzEjgASnPI5HEa8W18GZVJ3s/RSIjkCYAAVoF2ktxQSSYMdlbuEXCN/J4idOCCHFNO1JnTh2WgfMs0uLuUr/ALYH5mXiva57TwP8y3AssTRg6RaD8z8sLJojxK8ZKRqZSqaiZoQDUQHUwyUdh8ykHWoMb7on4A7gxtT7QCzJT9UxK+1gf5EvPbhE/wBTFYNUJ9oEncNQ9QIBCoKkS7H1szNbtpIm+BNyrRWYjBrNmISDzMezUr0wM+0uiZYigbl7L3kTErDnRmYCMEgfxMFgagIyHe5yBowgTtEyFASdS4HbCYnKyk6JmOpFQccyp+9dyptGY1u+CYGBmU3apMXduQR8TBQBgJcO6hlM6bkmq5qm9QMDCoM3qKeDMp9JM60veR6ij9BMq8GIOTKMp6RoTAye9mB9ys+f7lBG4rAiZX6lmAmrLAvJMpvFN/Yx5netq8SnAxTcxJ5lasi9jDWvcXiETXE6haFqlj9zGeVG5VGDTxMV/t3gxNDn0ZSxBiWgLqWN3CWh6LC9XG/U7nuvDEaP8e5gg9kRsM2kHgj3GyVbgRWDTUPA1OsXaUgTWgTP3LuVkgTYM43PBGphubccH4lZMDmDxsxk7jzMPDU2AnXEpW3bEDxMqt68liNyhyeJUp7Z4EubSEzqFoe0iHxF/ZBxuV8ieTGHqdPvCt2mJyJUhmZetSxMtH4XiKzqwJbXxOm9Ux6qyMhu5vXBn5rg5KBCnf8A2p/zLkwR+qusgj1oj/EqvLvyOP5gcDczrlRGY+oXLlnPuaOpWh7Y6kCAkQDUJ71441FJQ7HrmYl4sTfuVvsS5BcNGVImO5+6OBOj4uJk1hgAQR751PwWIlpP2xv50OJRgIB3gAKPYGplZNQ2tXPzvmOS2/8AyG3W51bNFhNS+QeYOKoPEUBBqEB+PE+0Bxv6L8RhxKbzQ2z4lGSHAIlZDHmfh0YcjYMwWvwnJqOx8R8zIvr2RqNl5Tr9tjoStCBwd7lpKDc6l1MVIVXyYNu/c3k+Y3HEB41F/V/1EE7RNCDgfTUotal9jxMW9bRsHmUFSOJUnG4ygjiKjHmAdqHZnVeplN11wszRF7ZowSkGNKSRv6a4+nbBxKrXpbgzAzvujgESm8BfcF417jZIQe51HqTovao8y1ydluYSYh2Ofqv7QYF3GVgfM//Z"
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
                                                                src="data:image/jpeg;base64,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"
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
                                                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wgARCACWAJYDAREAAhEBAxEB/8QAHQAAAwEAAwEBAQAAAAAAAAAABgcIBQIECQMBAP/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/2gAMAwEAAhADEAAAAPQ6/ENJ/ej+7v7uH7Sg6l8wKSC1trVLpX7vgJQ+XouNUrrXvlRbGYAoIK/12nJ7bxZjWOUdy7uM8jpv40CN0qyQiZJaENOMuuAV9SyMPSdixcCLjZgKMhH6m66Pc+LNq0+1e5d3wtHkzBZEHLIR2Hlm77IWaI7DHirTbqYTwV6ysl0XoQMOBTXs9lHnL7nxzHgHbrb87se8eCgGPgFijPPeyc6z+zTi8q+2wtPDmWiWsv0nw9DJXMAsgVVrO1R/Q955CgGc/cFf5RyM4njikwcI67rw/WuRVgq6nfKAY08fWGSOXsi1s0rBz2120FUk5zJOdj2/l6Cdz9uvY1Cee6rMY048T02RlbxFajozNcqkUe+k8nRirc/RLoAOk8thcMBVB5bajlTe38gSHV59VZlt5E5WiE9B4jq9brO9dnDz9az6wJVgwbVk1lTPCK0MlkBOJSHqbCYtv1vl+bavO9ZaAfy1WLrjY31nXPgerdCTs+aOZYcV1BG1ThmB3KXNk/QTGcUdoU7ME1StjaQ6ZBGVhxiK0kOoFiznVvRr4fq6exN5G6OW6ohvd2cKyX0slaM5VvYGmtDDWDHFYSz81LepxdXpb081C6mWbJ6Aq5mnWV6KjsL0i00M7ov3fAzv3JDJOtiJtnP9Q/L7SeYGsiwSCJOrZGbbO+4zzvoKgDyW7Qoc5mdoLVCec9jrUu1gNPMoFg/jQLs4FBZb9z+f11UwJbsxrgmQHjaFSbQidNnNAX0PmcAo5m9gZXphepNQMtALJjYMBbvmcw4GyhoehaNgFimWEoek3H+lXdparjpKGwUUWdqhFZrYXard05Hoq0S0NWOUPWjXd8rytFaY2s0mFiBkDqbUHVD+XIXaBYUPpoqhFntoB1n6S30cr73k6zdO48zb0u6TzLzju+b+1YdmTsOcy7FMB5uqHpF/JFPRehwFdewQsRMwnsrvdUgcRhYiXatzF9EYDNGbSSn1cL5zU4zNavKjYuikeFWZZReX4WaIILRGVZiLLgzfXu43GIso9qC3BWbXmkV52nCr6HaoQ+T06IspQjyhxcW7IvP2p6HKElGVDjvEsTz65YEwy0n9etd9eqwgZjQ0POttXbEQ/S0aOZTd7ChIShkUMXUI2L1ZUwqhEipVsHtPGa9O4+M1vqJqAw5Pz34hJXPIA2T0aiMm3jrmBKG1xTjfvtFnJcYSMk1IvzVbssgPwlD5R30ZYUYxhRvmaMbHHgtLH+doU3cLVZA3mF9Po//EAC4QAAICAgAFAwMEAQUAAAAAAAMEAgUBBgAHERITFBUhIiMzCBAkMTIWICUmQf/aAAgBAQABBQGqzjwY/wBloTA1ty5rUPLam3Dfdn3t+Ae7gA4w4sYS7Ka6dQnRWK1oDXx/K0fsl/ys5dFq3oa0WWFgVCTvSj/XGOM8c0duT07Wbm5sNgs149+Vl4nyvQNT4Q1llgBahhA9S4asPqphOCDj7B/8rafRarx5rJYUohpOkFB/1j9pfGP1JbZO43WOMylTUMneKvWlluK+sAHgNdGcrzWMMDslWKI/LK1wq4PH8dr+7mf8eq7yWAcniPX2O9YefjH7WT0EEr98lteUy/nZoYxhBQY5BEP6UoY4mGOY8wafJuNMcaXsaw+Sotf3dy+xT5J64ZiwhrGyd3CVj3jw38Td6cc29i9s0iH1Yog4Dirn0zV/MYQ7YhaiHg/MNAzP/PshG4xp3MXSdnYtss/Ob/PQFLKeG4lkOGo62x0TryjhgE8Yf7wi557QUyUI90CeUWV1WohoLu+XdTuV2jO0wWKxi2s1ntSe2WZ+aCfg2vlaF5rghBk42P4BSEmNrDYh4pkxgXj04/8ANttI16O/2k7K5QH5G5QxKPtx2m9a1SQKZcnoNgWxh6tjroAFiPMxc8Aej41m/sIyX69mz/AaSWYlkSEOFGRYEJoeeJMY6c1rzCajx/UtVEeszH7Ba3BZiRBY9Ndz8FlozBWq2yaKm0qSBBc+AeSk5YVjdy16KNeptX4aSX1GjjqXdwKLobbKfEdn6i5rWxp8Z65nUD7VrMvZjVnuwqBImWu0fU2uhGdVQjXwItXBkGfO2H/UeVG0Yrk4Rzke2Y6BoO3M2gxLwrE5S1SxJwBDAic1D91vGHyKGRJXee2WvnwQdI7J5bYLCxq7Cv2baDA0vV7WxwBMSJedOwgdd5YgMXbcijDG3fioO3Mnu6eV7EcJ1t6GI2L8UJbAaVrsIh47xE6hsTYYPSvzSZpbPC5SmFYt6/VozxXL9Ic0eYgNKQp5mab0HCutWqzI2Ftu/HQxjxZTlmQ4cCxnHC2M9SpehtiglEjPcMJB9CePEMUAoMjJr5Ica36sQ7G8fqVdsfPdXaJMglDMhPaRXjhUWngveAabdVIrWcsyi3jHFaJ6zY13kvagFzLvaZviqZ80Co5MnL6iZ+VdDLhiCNZ5gCQ9LDdXpiTLP5WzmWNDpq1kX+o3NoVrgmzJRo72Ng5fM7PmtS9YTW23qjGT2VtjZdfivF3OFmaF7yisYQC5OCxVtOJNNqgdgUVkbI4b/Yfal+NCWBlp7aJUdUWYVqFmpOxPKNajUTIujXrQwStQwPivxJJ7cuikLDMzHV8yQrccZWGQlCOgtCKE1ppZsFu8v6Xb5zbajjuzCP3aVbLTNs8j7bo6GM5Wlm4tSH7M1Ae04FemdgTzOp3goX9YDMBHXGBMGbhCRSyKSKS/qOP0++fFmZZTOOcyUpLyPgZFgzMzTrTi8ovjK04+11lKCFchVS82EFs4DSh8qR1MzRLUuWWhF7xSWzKGDkHIAJQnKtlnz8i1ewE+mI8yfHinmvKOKo8gMBbzk/LePujSxPdrY7Hurqn8nK6nYtqBfJw1HsT1YMsa5zBoo1V0AX2JkyM2MYwUwjKF5GELKgjmROObxcjFOUYSmbw2Kf5NJxKt12uPNVAWIJxjP0IllMZFq08jsdgzkNJRRwvqfMlcbagJSgQ5cmWMTGWqtKLo6aoVoEBdcQ5pGkY7OOjRcd2aCflhUty9gWsJ1KGuoRr0V893H//EAD4QAAEDAgMGAwUFCAAHAAAAAAEAAgMEERIhMQUTIkFRYSMycRRCUoGREKGxwdEGFSAkM0NTYjRjcoKDovD/2gAIAQEABj8Bb6fwvPZB9T/N7UqW3paFjsz/ALvPutTq7b9e+b/HAMoYh0a3/wCKu+7vwCuMCZWt8tsLh07rwJLjmw6H5Iyw8Lm+dh1b/A5OY42F9UA2Qpju38NRterN3Dggj/ySHRqn2vtWczVNQ673H7gOwXpmVhYQ7vyXAy6ljniwscOicyVnA0/T5plVFnh81vfYmVNO7FHI27ftcnNBtmmtEvJRtHT+C6/cEM/8psZmDCNN+7zH5BWGZKEGDgHn/wBnLhYr2ustE4shxJ12OdCD4kfNo6hHZb34oJRvYHdeqv2+xydujY3QGK5TM1r9s9a88MDHPPyF1XbRmdifU1D5XHuXfoi+1w1C7VcLJZoozsiyHvBexQhz5qWUOiHUErxGFj25Ob8P2FO3PVDmVu76IG/JarVbVkD7EwboerlJKeijxZGQ5rAsN0c1vHuAaNT0XsOwqSbadQcvC8g+aL9pbDp2ROFiGz4n/RVD6cDwX8GIZYXqofXPDppn3cRlyyV0U7djmg7W63pagPse/oEzYmLV+J9imRjV7rKmbBa56oyn9qIKZ4biwujTYnVmz9pU9+PdygPA6p1Nez1LBV33ErCJLG3CvZtjTs2RREkRezQ7x9hoXHnmqrZtbtJm1Nn07QW1+6MeNx90NP06KmqGi3tEFvm0p1e+O1KyPjd1IPLujusWG+V0U4sFxdXedUzLkiipX/65KQudfO6hHw5lQknQgfcnB0RnbbgHIH05qtZXx0sD6i26nay8sWeLL8OyiwTPdHfCSeabzBFljdALA5WAyWBmi2LWN1bO9v3KGKGXBSb2Nzg3mSUOmaKeLarxCrXR4wjmpeMXspJSfMbqaX4RZMd/zAmPsLhWZ0TYfexYvRMbrYLdVMWEHRYmlUU3+Ks/EFfu2miL3Gz/APtBUUb5gZcI9EfRPbbMrxVYzjHbIXWLea91/U4k8PffeHCEXFSv5KnA03iaCUXOU9XDHvA4YQ2+ndGKulLWy+GzdG2adFI172Ri3ESSPmU+OJ+JnJPdzbPER9VPQ00IFbUSDdzjVg5hRPe7FdgJJ5o+icDrdDHlZXldiz6rIoB70ykHJt0b8yhGBmeIqCInNrC/6pjwcwn0IfZxUsMNIZGsyxYsvVPjhnbun8r2t6cwmVe3NoTPpsiWY3AP7d/VEU7AyN3ujRvZR/srSPxOpB7RV291x8rPzVJTM8skgv6L/pyATkfiVtLK91beD6rE14PzU8r7nA0N+5EnRqxOy3jvoE545cI9Fh9x+vqhOxyc97s00sp4i5vvYQrY8l7LRhsm1ahvgsOkQ+N35BVFTVSulmqnOe979XnqVHI7CZ5+ouMPbumTsddrxknIuHmQyt9mpVsy5PdWtLGTtLmE87tshEG5Y+JXHJgt+aI7pkndNy1W/gLmqz2g9DdOMe7a/qc7KWaeZ0ribve7UqN8eRxiypqyLNhdyT67a1UKfELwtdkL87+qdupNxc5XF0KuSJskbswWfouHr9go9nUU1TM7RkTblfvT9rtpU2zaZlnGJrw59u55I7E2Ps+EQUjvCqWkuc75lSwzm8sfEL8wnOY2+FuL1CdfqiOhW6d54zZYcOVkS1mikL38lI/m46pmH3TZOrtr1G7pmwe0wg+85ps5Sh0oFJQ+VrRbERzPyTa+NobDhuc/KUJp5XOaBw35JlXsB8UM4ymDvK4ciiXuwQx+d35DusOyrU3TBr9VgqqqR7XebE7Irfxt1/FNqYMiMnBSRuHDh4f0Uj4hlizCc+J+Y5dk1+eCTn3Quc7I4UWcyjfVDFo7L5plC6Tggkxtb0xZOUkErcLpHY79W6BU9HTuIabBzeV0ymHnIUeZBIUdJCDhac+56rBzHNMgm8smixzSWb7zk97I8DXm7QdbJgGT8Qd6WTnszbJZ31RFrXQhywF4OZ5jmvbaB5cwOwvFvK7oUfEAKyDi0c+Sl7FYOuaDBJgD7KCLZTiTgEbndwNfqvb6jSJvPmibndtKEUfuhMncMmvUb7XB+FOnib4tP4jFBWZkYQU+qqcyPKOSZHF2xen6pzmjKFlyfwC4tAjF9FtJg/4f2OHH0MmLI/RHe0kTv/G0oywMa1sPICyLmC7Xrw/7YzUERH9/JRRt4pHv/NQ7Oj/rTDE7s1b5+RIuU+rnya82YOyHDYg/eohq5ozUzLZFpCqWUjGufTB7MPxWOqe1wLSDomnVzinNtlYD1UrCPNoi0ajJ36ralT8RiZ888lc3+q2jPM/PDgb80Iu+Snj5le1REB0bsuybNMRgp2mT5oy2GE/+o5JuzKc/y8PFO8dOiLI8oohhatCR5in054nBSuNm5G6kxM8OZ8j/AL08xf0ZeJpW+txM0/Vbl2icweaM5dwmVsN8L+n4FVE7+Fks2JuXMCyLk6FnlPnHdNkcL4MrISDLEOL1Vh5ZNPzVdI8WdUYWNdzsTy+iipqNodW7Q0Hwt+JN2Ls/jndnPL3Tadli/VywE9W/RFrfecQqyQe7EUOEG0QW9flIPeCfHfJ7SfnZCf34nYPVRShvmsCnUsrvC3jGyW1sXWy75ql2bRtwwRjCGj8fVOc43yRadA66cTmGcdu6MnM5o4tAQD69QqOnkza6pd6ghN2lh3lVtHwYnHSFvIJ1W9+9nfxOeU+eTMuNl//EACYQAQACAgIDAQACAwADAAAAAAEAESExQVFhcYGRENGhscHh8PH/2gAIAQEAAT8QUQjQmn89kd6YihdygFx/9zK/8ueyqDa/RhboB7INbYayDEW2DeEap0xBh21KZu1ENx+cPJ2PDC80lS9R058dLXj913Ac6O4ybaiI0/jlFhSF8qXabx/2Z9CNLwXQYCOwUubaB5XQT4jNQ+qr7EqRuQLp+VEgqjeQ8VBatC2xA7ODF6dowGcj2kI0M/jk9jhleWFI6fhny8ulrvLQSC7uJFwGZ15og/hi5FX9XBM2Rxu5PZAcTRCK3FhTgTY+DQQGjCjtLhmdOOiuq6j+qdCHkuFle4DCdUyFzvUP30WDkECg0+2GY92UeYhwa78OYfnRmCBLONbBFiyKEHmJTrMP8kXI3+Vc59UI6ioSpjGdQQNvcf8AOV6FqENGGroA5WFxnrLQJ6dMF0kX8rzDnKp3lXDHQoWFxT3gl8tUQ2lGAUAVEV3k7aiK8PTyrUvBYvoTFqrhlKljUM4aISi+1aAbV4O2HnO0oJkpcaF8p6PaKf0mWqggopQ+KptlCXQZNT5KKV11ZU7AEsF0tkbjoCJL4iG7Rxu4Gs6/ouhjam4SccA5Uq2vZRB4AQApaxBrEDTeibwZSDk2BUsY2BtZbSZMS4TqFLLvKQGNDBsOlpLQhUWyXDp963mRg94dRDE6CM2ooZpS2Wg3jKysVOMAitBhICYYPSrUiBXYn+tEZkx/tZl/hv8Aq2ylSETkZ2/ygxKdBxpYAqu1gisZnHqOUtqawDXSJpllkDXCFqgJg4HNUBfogrEbPu0aOiPRTNnTRcKILVsZAtqpT1oJ8XuKV6YJBCqg+U33H0BAh1/4mIhq+ecKy9uP6WAdu2v0r8IacFLS5gNUQvBcMyzr35i91B61bh8wMBPEfo78NHeVuaMlfTDJ1g23I0j32TDNbBL7ZL53Mctalc8oprcrDcfMAV4JZvbhRBAt9hES4XfbqXyzo+QKni+mmILl742EUaBMhMBELFKIykucmh2y2drKMNnlR7MJL/7+ONNHNbGnORl1Xukna+bu49rTDDuqMBXhsNUu1B4VUZuClUq24m2u/TLrmgOkIGwX0HT7aYlwOfal8OoZU29RFfgd0BeBlIQ/ga7OFBZe6nwXh6kvDtSgr6aTVDgISQldbR8hYB9sfEMZhWHQxHYPU8EuIiLNfu5VhMnMuw30IoYBVFsx5BFd6ay6Yvf9kywpL6FqpqSfymH63ATtcB1wT+HrmqEzgYsEBWz8sjHr07oKh+2/NzD/ANy5cj2Zbl3UrwYCiPMeWkbzmZJKiKrec2exsir0S1hF+MHLIZ5GyaLqsuLppeYmF8bMYj1ZM4MzCsN1j8uAFwDBraKC7oV+4ePbcGs8YKVSl2kp2+AKsV+ipjvOaiwqp24t2+sAURwgU8gdJ5Lhxo9UXN244R4Lg0HE6kUJ5Ep17BjW1oJffHJtHbBgrkUSvcMbJj1exdyqYA5ViX2tDXTBDYvL0bKYpyEeoi1nyQ8yxDS5fxhKBy77u4hG8d+m24LzhUzAKExyIsZmSXAIzdt5B3sv0wnji9X4DsTDRBRqEla9GGyRRvF+A5EHlg1JFAI1isP2P1vRhsHzcRPqdqrjvXEHi4KwbiW7qm4mb4BGjFpaOeIqfsJ1lYSuJ98wmn9JVu43y2qyiRKtKsWxPNR0oQq5bm/IlepWlMAdJ2MrYQCo/h1Eq2KmfsLRkF/WHCcTethlf9fK1o9NDFMvfcSnuicWjvoxZ4dwTUMH03CIvZrf7DYi2W1d+fjGItsMUMtJB7ERb3/oLgabTzU24mbh5qXdL0uGoCy+9ddgnpblPP4rJjCYVexf6IlrGTQmi8phlANlO9yPDWRZcGk5Znm5efLhSLy1flYi4dlHshj6tXGViBBzwWs/gxeQXOIjmpfQMdlEIhdBRwQbLzXXNEDGuFDLWnOavuW0hGLWzYvVQON2LGKHWoVTBZ0Vgmv9UjKJyvaceCBRH8JSwPVkzBkz6cEFrgRPYz8upt7WLkb+hIauFW3IfllD6XwQoh/SPn7LWFTVsLf6jhhQhxjiZo2O9soPl3G3Upd0GXxa4idBJHDUDbyGMOZkjo9mTm4ZgWFMZyUwWVWvCNxicR7S37gTmDs3Y033mXxRvarC9QqdKu09YCYTx/uRtWME8A4H/YJDis8LMWD4ZoWWZeyw8xjg4eaLoiG2AjuiZlRdaOLIJ7THZVWAelfoVTXGMwqScRoDoPbtIhjUP3UNsUQPAA9F2Qa9D9Cu5kGVZtRcyMqFO1sSVuxuMap0r0QjY8fKu/pFxq/9qH5BpR0uRbvySug5HeIZQpQ5wjTV+yVN436425NHZFCoGjBPShXjSr3p70xMZitAi+xFfB8WRcp6jkXTmr4YYER05maELPdsnh5JgQCU2bu/dR59v3hjqqrvt5lMLdgQBNYnwuLTBG8U0+6lejGeHH+8x2xUsGaz4HKBHGwli5XaYMsgSsamw2U9XEWqUdrRrjI/VxQZn3ItdCQdkdEAHoR6zcBYIaU4Lmq3ElA5BWZ5aAHE/8QAKxEAAgICAgIBAwMEAwAAAAAAAAECEQMhBBIxQSIQE1EyYXEFICMzgZGx/9oACAECAQE/AJf2JCO307FWWSxKVmbC4b9FkvItEGS8CR5gP6r+xyVH3on3okcqejJjU4mSPRtD9/SBPURMxqo0xu/rFDaWjwrZmz9EyXIbtpn3X+SOVmPK09mHJ3WjmQvaK9loxu9GR6E0zB8okoUUURVJv6Z59FZmyOTZZZjYkcfL1ZkqSb9GTTaEYzKQ8s4TuLJQTOn4YoJ+WS6xVIi6s5T7RdE/wh1dS0LRjm3pI+xUbbGsaT6t2v4IVm423tHIx9Va2R9tmF2ZEurZjdtnF+CFLVfS/I526KZkacWjvG2upnxwUOzjscGQi1tHFwQyxucv/Tm4ceLWN/mzhv8AxOLZmkncR+aRhMnhmOG2Q1pEVSsS7DiowbYlbZJvrZkpRZg5OLEvkjmf1GE49URVwv2RXaDIpxeiPz8s4MVco+ieNK20S3LRx3umZGY1dmOYnaIPRny/GjCk02SdJonC4nJTi2i0Yt4zD7ROdOkY8hwZ/wCRozu20jLHozj7Mhi9kc6iLmxQ+eiOVZZUvQtIyu5GJWmjmR00SjRx51j2dt/FH2nJW0Y1T0cB3nOVCm2ZNtnHdGZ6MMvJ2KZG15OFGrk/Ghv4l3P9jjq7OXCm7VGWKRxcWPJCpNL9hYsMPCRkyYqcVQ9Suqs4OFwi5yVX4Od/q15O1N2YDM6RhXkURaLMM+uP+ST0khIxKonKwrJGzPivSIY5Y1pkuRNabIJyV2cXi/flT8InCMV9tejkKeSLf41/0TSTdnHTWzK7Xgxe/rIjK8dLyYp2ql6MbvZF3GkbppmVOMnZH9yeBSFjS0jiReKNryySvfsyNdWvRi4ePNbZH+mQW4sz8TJBa2jEmrOn4PtSekLgdo29GLBGLpGbG4LRx5tTpipbXgjtnMj1mIZiXaZjTUaJaizNJ9mjiqoNsi0vZFqS2jLwFkk5w8MxqyMKHFteTGqbI/OLszQ6NtejBK8W/ZHTOcr2QkS8aOFG5WyOlRJWmjJDq2/JjlUaMUb8l9VSINwjRjhQlX0lGv8AkhSjZJLI3Xo436P4EzkYe6ZLDKL2icJqPg4r6HhWeYs5Emk0jAvjswx0R+WhyogytD1tEkmkzI5qNRMKcIu/ZhdRpFJEptIiu+2PFCtonFqVIirhv0Tl0iTfYxq7Rj0qRFKO0KpEBKzJE6/F/sQSaJx81+CCpFDWmYx7TJJKVmOdxozLsjr10YIn7ECCWyqRiWzIvi2RXwZje2N7EejHPTsj9MzuWiOopCjcSZiVx0RWiKI6RLSMPkyKoMivgxeWLYkddDdMiRMn62Q8Mxr4sz/qZilUSO4mNDP/xAAvEQACAgEEAQMCBAcBAQAAAAAAAQIDEQQSITFBBRNRECIgMkKRFCNhcYGh0TPB/9oACAEDAQE/ADj8EeejY0KKIp+BIcWV2zXBTbvWH4+kPpLopaFHJJJP8Na5HIhyVVuXCRHSz8ohpJPhonRKDZXNwkQlvRHs8Ml0UiWEWLn8GStcZIxc3hGj0m8o0cK1yj2I/BKqKT4J6eMk2air22ad7Xtfki+fpLhFHkW7BqMxZGWfqmdcI0dW+Zo6IwiuPpgmOXg1dLnB47Km0sPtEHu5+kujTiNZAi2uxSMvwimG5vPBltZ/wenQ2z58lPXCf7CXHT/b6SgsNtkr90mqk2189f6ISt/XFZ+E2WQ2XuMuE+Sl9r+v0sWFwUeTLL2powJYK0kbVBZXkxhFDe5YFXNc+5jP9zT6i1WOKmmvPf8A9ZGcWTcZpxfRrNVfRJxoj/nj/qPT9RbZzb2a+H87chR28oim0W9FHk3Isl9N5W3OWPBPGMFb3cS6KElKJforNRJ4+eD070e3Ty3uWBPbLHglP255XRLbZHlC44XSPUrGlCS/yOXiJXxEtKPI8ItgSgKGUaevltlr5wVLkrnho0uJrc0bPc4i8YNQ9thY1tyyqClAdP3YPVIfyYv4f/SviCbKZ71gs4KfI1wSoU+h6FyWMC9PJUqiOfkfLKFwyyW1npli2kZcZNRBuxtEV9rb8EW1ySnlHqi2UGnn7mP2IIsWCpE0QqjBco9+MfAr4S4NbJSSS7IxyyKSg0+zUP4PS7E4YTyaeW6OC+yyubWG18lW/GeybxHojJSTXlHqV6tftJ5x2aNYnjwJc8Fnkq4Jsm8okmuUUVt8tFkN9jXwRhhtm/KyWvMmaHUumeDT34jkk1Y8srWyPBbPL6Nbrf4aDx2+jTTbzZZ5KHslt+ef3I8osKmiwisChF8iexNpFixNzfX+yyPbXTLFs4fwNZZGKg9xpZKdZkjeoxJWueWjXv354fSz/sXPHgrg0yzUzr4SJa2WOTT6uDLMSRC0/iowWX0Wep5yojvnOL3eejTT38SNTUpVtrsSb4Gntz8HptqnXj4GY+0sxXW2XSzJlX3Fa+3LLlmRtzlDTi+CrWyrWJjs2rgb39sW2Pg5xkU/anuKbPci0+i9e3PK5NynF54PSltyhxa5RWeoSxXhEk2sMpk4cYyU/fH4LF9/PBZwngis9sl98myU8oba5+lb4ZZGTnhFW6qKT7NRHMhw25NHqPaKdVTOPDK3FZeeDWr3IvayK5afgSwzSryy3G7gs+CT2orjuyPr6Q8or4bSKlHdmRa1OZYm+/By+ymJY3HhMhOSfDZCW6HLN22b/qUxVsuCC2RwiXeST3Ntkvv4Q8w6GxPBXI3vcSbT4K31n5Jdv6VPktXZFFf5ScOTTT9qWGRlu5L3tG0l/cx7fPyS3GeSZT+Ym8TGsorX2nT7IvMmmWVulpryMXDNNxBtn6skp7biuPJdxPDPkk+BITJ9FX5z9aP0i4JvA+TapR5GPyU/+ZL5JRTe99mlk5RLYp2D7ZL6f//Z"
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
                                                style={{ top: 0, right: 0, height: 389 }}
                                            >
                                                <div
                                                    className="ps__thumb-y"
                                                    tabIndex={0}
                                                    style={{ top: 0, height: 153 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card chat dz-chat-history-box d-none">
                                        <div className="card-header chat-list-header text-center">
                                            <a
                                                className="dz-chat-history-back"
                                                href="/react/demo/form-element"
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
                                                    href="/react/demo/form-element"
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
                                            <a href="/react/demo/form-element">
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
                                            <a href="/react/demo/form-element">
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
                                                                href="/react/demo/form-element"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/form-element"
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
                                                                href="/react/demo/form-element"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/form-element"
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
                                                                href="/react/demo/form-element"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/form-element"
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
                                                                href="/react/demo/form-element"
                                                            >
                                                                <i className="fa fa-pencil" />
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-xs sharp"
                                                                href="/react/demo/form-element"
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
                                            <a href="/react/demo/form-element">
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
                                            <a href="/react/demo/form-element">
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
                    <div className="  content-body">
                        <div className="container-fluid">
                            <div className="page-titles">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/react/demo/form-element">Form</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <a href="/react/demo/form-element">Element</a>
                                    </li>
                                </ol>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Input Style</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control input-default "
                                                            placeholder="input-default"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control input-rounded"
                                                            placeholder="input-rounded"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Checkbox</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6 col-sm-4">
                                                    <div className="custom-control custom-checkbox mb-3">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox1"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox1"
                                                        >
                                                            Checkbox 1
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <div className="custom-control custom-checkbox mb-3 checkbox-info">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox2"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox2"
                                                        >
                                                            Checkbox 2
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <div className="custom-control custom-checkbox mb-3 checkbox-success">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox3"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox3"
                                                        >
                                                            Checkbox 3
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <div className="custom-control custom-checkbox mb-3 checkbox-warning">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox4"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox4"
                                                        >
                                                            Checkbox 4
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-4">
                                                    <div className="custom-control custom-checkbox mb-3 checkbox-danger">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox5"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox5"
                                                        >
                                                            Checkbox 5
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="custom-control custom-checkbox mb-3 check-xs">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox6"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="custom-control custom-checkbox mb-3 checkbox-info">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox7"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox7"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="custom-control custom-checkbox mb-3 checkbox-success check-lg">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox8"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox8"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="custom-control custom-checkbox mb-3 checkbox-warning check-xl">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheckBox9"
                                                            required=""
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckBox9"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Textarea</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                    <textarea
                        className="form-control"
                        rows={4}
                        id="comment"
                        defaultValue={""}
                    />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Input Size</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control form-control-lg"
                                                            type="text"
                                                            placeholder="form-control-lg"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Default input"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control form-control-sm"
                                                            type="text"
                                                            placeholder="form-control-sm"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Select Size</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                                                        <select className="form-control form-control-lg">
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
                                                            <option>Option 3</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control">
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
                                                            <option>Option 3</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control form-control-sm">
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
                                                            <option>Option 3</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Select List</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Select list (select one):</label>
                                                        <select className="form-control" id="sel1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>
                                                            Mutiple select list (hold shift to select more than one):
                                                        </label>
                                                        <select multiple="" className="form-control" id="sel2">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Horizontal Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label>First Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="1234 Main St"
                                                            />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Email</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>Password</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Password"
                                                            />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label>City</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-4">
                                                            <label>State</label>
                                                            <select id="inputState" className="form-control">
                                                                <option>Choose...</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-2">
                                                            <label>Zip</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <label className="form-check-label">Check me out</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">
                                                        Sign in
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Vertical Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Email</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Password</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Password"
                                                            />
                                                        </div>
                                                    </div>
                                                    <fieldset className="form-group">
                                                        <div className="row">
                                                            <label className="col-form-label col-sm-3 pt-0">
                                                                Radios
                                                            </label>
                                                            <div className="col-sm-9">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="gridRadios"
                                                                        defaultValue="option1"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label className="form-check-label">
                                                                        First radio
                                                                    </label>
                                                                </div>
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="gridRadios"
                                                                        defaultValue="option2"
                                                                    />
                                                                    <label className="form-check-label">
                                                                        Second radio
                                                                    </label>
                                                                </div>
                                                                <div className="form-check disabled">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="gridRadios"
                                                                        disabled=""
                                                                        defaultValue="option3"
                                                                    />
                                                                    <label className="form-check-label">
                                                                        Third disabled radio
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <div className="form-group row">
                                                        <div className="col-sm-3">Checkbox</div>
                                                        <div className="col-sm-9">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" />
                                                                <label className="form-check-label">
                                                                    Example checkbox
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-sm-10">
                                                            <button type="submit" className="btn btn-primary">
                                                                Sign in
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Checkboxes</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                                                        <div className="form-check mb-2">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="check1"
                                                                defaultChecked=""
                                                            />
                                                            <label className="form-check-label" htmlFor="check1">
                                                                Option 1
                                                            </label>
                                                        </div>
                                                        <div className="form-check mb-2">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="check2"
                                                            />
                                                            <label className="form-check-label" htmlFor="check2">
                                                                Option 2
                                                            </label>
                                                        </div>
                                                        <div className="form-check disabled">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="check3"
                                                                disabled=""
                                                            />
                                                            <label className="form-check-label" htmlFor="check3">
                                                                Disabled
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Inline Checkboxes</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                                                        <div className="form-check form-check-inline">
                                                            <label className="form-check-label">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                    defaultChecked=""
                                                                />
                                                                Option 1
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <label className="form-check-label">
                                                                <input type="checkbox" className="form-check-input" />
                                                                Option 2
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline disabled">
                                                            <label className="form-check-label">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                    disabled=""
                                                                />
                                                                Disabled
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Radio Buttons</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group mb-0">
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="optradio" /> Option 1
                                                            </label>
                                                        </div>
                                                        <div className="radio">
                                                            <label>
                                                                <input type="radio" name="optradio" /> Option 2
                                                            </label>
                                                        </div>
                                                        <div className="radio disabled">
                                                            <label>
                                                                <input type="radio" name="optradio" disabled="" />{" "}
                                                                Option 3
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Inline Radio </h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group mb-0">
                                                        <label className="radio-inline mr-3">
                                                            <input type="radio" name="optradio" /> Option 1
                                                        </label>
                                                        <label className="radio-inline mr-3">
                                                            <input type="radio" name="optradio" /> Option 2
                                                        </label>
                                                        <label className="radio-inline mr-3">
                                                            <input type="radio" name="optradio" /> Option 3
                                                        </label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Readonly</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Readonly input here…"
                                                            readOnly=""
                                                        />
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Email</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="text"
                                                                readOnly=""
                                                                className="form-control-plaintext"
                                                                defaultValue="email@example.com"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Password</label>
                                                        <div className="col-sm-9">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Password"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Inline Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form className="form-inline">
                                                    <div className="form-group mb-2">
                                                        <label className="sr-only">Email</label>
                                                        <input
                                                            type="text"
                                                            readOnly=""
                                                            className="form-control-plaintext"
                                                            defaultValue="email@example.com"
                                                        />
                                                    </div>
                                                    <div className="form-group mx-sm-3 mb-2">
                                                        <label className="sr-only">Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mb-2">
                                                        Confirm identity
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Form grid</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                            />
                                                        </div>
                                                        <div className="col-sm-6 mt-2 mt-sm-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last name"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Form Row</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="col-sm-6">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                            />
                                                        </div>
                                                        <div className="col-sm-6 mt-2 mt-sm-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last name"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Form Label Size</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label col-form-label-sm">
                                                            Email
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="email"
                                                                className="form-control form-control-sm"
                                                                placeholder="col-form-label-sm"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label">Email</label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="col-form-label"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-2 col-form-label col-form-label-lg">
                                                            Email
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="email"
                                                                className="form-control form-control-lg"
                                                                placeholder="col-form-label-lg"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Column size</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-row">
                                                        <div className="col-sm-7">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="City"
                                                            />
                                                        </div>
                                                        <div className="col mt-2 mt-sm-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="State"
                                                            />
                                                        </div>
                                                        <div className="col mt-2 mt-sm-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Zip"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Auto-sizing</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-row align-items-center">
                                                        <div className="col-auto">
                                                            <label className="sr-only">Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-2"
                                                                placeholder="Jane Doe"
                                                            />
                                                        </div>
                                                        <div className="col-auto">
                                                            <label className="sr-only">Username</label>
                                                            <div className="input-group mb-2">
                                                                <div className="input-group-prepend">
                                                                    <div className="input-group-text">@</div>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Username"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="form-check mb-2">
                                                                <input className="form-check-input" type="checkbox" />
                                                                <label className="form-check-label">Remember me</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <button type="submit" className="btn btn-primary mb-2">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Custom Select</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <div className="form-row align-items-center">
                                                        <div className="col-auto my-1">
                                                            <div className="form-group d-flex align-items-center">
                                                                <label className="mr-sm-2">Preference</label>
                                                                <select
                                                                    className="form-control form-control-lg"
                                                                    id="inlineFormCustomSelect"
                                                                >
                                                                    <option>Choose...</option>
                                                                    <option>One</option>
                                                                    <option>Two</option>
                                                                    <option>Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Disabled forms</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form>
                                                    <fieldset disabled="">
                                                        <div className="form-group">
                                                            <label>Disabled input</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Disabled input"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Disabled select menu</label>
                                                            <select className="form-control">
                                                                <option>Disabled select</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                disabled=""
                                                            />
                                                            <label className="form-check-label">
                                                                Can't check this
                                                            </label>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary mt-3">
                                                            Submit
                                                        </button>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Input Group</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group mb-3 input-warning-o">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">@</span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Username"
                                                        />
                                                    </div>
                                                    <div className="input-group mb-3 input-success-o">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">@</span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Username"
                                                        />
                                                    </div>
                                                    <div className="input-group mb-3 input-primary">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Recipient's username"
                                                        />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">@example.com</span>
                                                        </div>
                                                    </div>
                                                    <label>Your vanity URL</label>
                                                    <div className="input-group mb-3  input-success">
                                                        <div className="input-group-prepend">
                      <span className="input-group-text">
                        https://example.com
                      </span>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group mb-3  input-info">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group   input-danger">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">With textarea</span>
                                                        </div>
                                                        <textarea className="form-control" defaultValue={""} />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Input Group Size</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group input-group-sm mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Small</span>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Default</span>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group input-group-lg">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Large</span>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Checkboxes and radios</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                <input type="checkbox" />
                                                            </div>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">
                                                                <input type="radio" />
                                                            </div>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Multiple inputs</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                      <span className="input-group-text">
                        First and last name
                      </span>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Multiple addons</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                            <span className="input-group-text">0.00</span>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">$</span>
                                                            <span className="input-group-text">0.00</span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Button addons</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Buttons with dropdowns</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <button
                                                                className="btn btn-primary dropdown-toggle"
                                                                type="button"
                                                                data-toggle="dropdown"
                                                            >
                                                                Dropdown
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Action
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Another action
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Something else here
                                                                </a>
                                                                <div role="separator" className="dropdown-divider" />
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Separated link
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <div className="input-group-append">
                                                            <button
                                                                className="btn btn-primary dropdown-toggle"
                                                                type="button"
                                                                data-toggle="dropdown"
                                                            >
                                                                Dropdown
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Action
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Another action
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Something else here
                                                                </a>
                                                                <div role="separator" className="dropdown-divider" />
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="/react/demo/form-element"
                                                                >
                                                                    Separated link
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Segmented buttons</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group mb-3">
                                                        <div
                                                            role="group"
                                                            className="input-group-prepend ml-1 btn-group"
                                                        >
                                                            <button type="button" className="btn btn-primary">
                                                                Action
                                                            </button>
                                                            <button
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                id="dropdown-button-drop-dwon"
                                                                type="button"
                                                                className="dropdown-toggle dropdown-toggle-split btn btn-primary"
                                                            >
                                                                <span className="sr-only">Toggle dropdown</span>
                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <div
                                                            role="group"
                                                            className="input-group-prepend ml-1 btn-group"
                                                        >
                                                            <button type="button" className="btn btn-primary">
                                                                Action
                                                            </button>
                                                            <button
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                id="dropdown-button-drop-dwon2"
                                                                type="button"
                                                                className="dropdown-toggle dropdown-toggle-split btn btn-primary"
                                                            >
                                                                <span className="sr-only">Toggle dropdown</span>
                                                            </button>
                                                        </div>{" "}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Custom select</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form">
                                                <form action="#">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <label className="input-group-text">Options</label>
                                                        </div>
                                                        <select className="form-control form-control-lg">
                                                            <option>Choose...</option>
                                                            <option>One</option>
                                                            <option>Two</option>
                                                            <option>Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <select className="form-control form-control-lg">
                                                            <option>Choose...</option>
                                                            <option>One</option>
                                                            <option>Two</option>
                                                            <option>Three</option>
                                                        </select>
                                                        <div className="input-group-append">
                                                            <label className="input-group-text">Options</label>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                        </div>
                                                        <select className="form-control form-control-lg">
                                                            <option>Choose...</option>
                                                            <option>One</option>
                                                            <option>Two</option>
                                                            <option>Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-group">
                                                        <select className="form-control form-control-lg">
                                                            <option>Choose...</option>
                                                            <option>One</option>
                                                            <option>Two</option>
                                                            <option>Three</option>
                                                        </select>
                                                        <div className="input-group-append">
                                                            <button className="btn btn-primary" type="button">
                                                                Button
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Custom file input</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="basic-form custom_file_input">
                                                <form action="#">
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Upload</span>
                                                        </div>
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" />
                                                            <label className="custom-file-label">Choose file</label>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" />
                                                            <label className="custom-file-label">Choose file</label>
                                                        </div>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">Upload</span>
                                                        </div>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-primary btn-sm" type="button">
                                                                Button
                                                            </button>
                                                        </div>
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" />
                                                            <label className="custom-file-label">Choose file</label>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" />
                                                            <label className="custom-file-label">Choose file</label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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
                                    DexignLab
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

export default withRouter(Form);