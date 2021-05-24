import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  bodyBg: "#ffffff",
  bodyColor: "#010415",
  headerBorderBtm: "#e8e8e8",
  navBg: "#ffffff",
  navBoxShadow: "0px 1px 10px 0px rgba(255, 255, 255, 0.5);",
  navAColor: "#010415",
  linknavBorderLeft: "#e8e8e8",
  buttonSecondaryColor: "#010415",
  buttonSecondaryBorder: "#e8e8e8",
  buttonSecondaryHoverBg: "#f1f1f1",
  herosectionH5Color: "#00afff;",
  blendBg: "rgba(242, 242, 242, .7)",
  aboutsmallColor: "#707070",
  singleLinkColor: "#010415",
  upcomingCardBorder: "#e8e8e8",
  upcomingSquareBoxBg: "#f1f1f1",
  upcomingSquareBoxBorder: "#ffffff",
  upcomingBlockLiBg: "#f1f1f1",
  upcomingBlockLiSpanBg: "#ffffff",
  featuredCardBg: "#ffffff",
  featuredCardBorder: "#ffffff",
  featuredSquareBg: "#f1f1f1",
  featuredSquareColor: "#010415",
  featuredTotalTextH3Color: "#010415",
  featuredProgressBarBg: "#f1f1f1",
  featuredBlockLiBg: "#f1f1f1",
  featuredBlockLiSpanBg: "#ffffff",
  featuredBlockLiSmallColor: "#010415",
  tieredHeadingH5Color: "#707070",
  tieredCardBg: "#f1f1f1",
  tieredSquareBoxBg: "#ffffff",
  tieredBlockLiBg: "#ffffff",
  tieredBlockLiSpanBg: "#f1f1f1",
  tieredWhitelistSpanBg: "#f1f1f1",
  tieredRoundTwoLiColor: "#707070",
  tieredRoundTwoSmallColor: "#707070",
  circleAnimationBeforeBorder: "rgba(242, 242, 242, .7)",
  footerBordertop: "#f1f1f1",
  footerBg: "#ffffff",
  footerBoxShadow: "0px -1px 10px 0px rgba(255, 255, 255, 0.5);",
  footerColor: "#010415",
  footerLiBorder: "#f1f1f1",
  featuredpoolnextInvestmentSpanBg: "#f1f1f1",
  featuredpoolnextAuditAColor: "#010415",
}

export const darkTheme = {
  bodyBg: "#010415",
  bodyColor: "#ffffff",
  headerBorderBtm: "#15192A",
  navBg: "#010415",
  navBoxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.5);",
  navAColor: "#ffffff",
  linknavBorderLeft: "#262C43",
  buttonSecondaryColor: "#ffffff",
  buttonSecondaryBorder: "#262C43",
  buttonSecondaryHoverBg: "#262C43",
  herosectionH5Color: "#00afff;",
  blendBg: "rgba(38, 44, 67, 0.4)",
  aboutsmallColor: "#ffffff",
  upcomingCardBorder: "#262c43",
  upcomingSquareBoxBg: "#262c43",
  upcomingSquareBoxBorder: "#010415",
  upcomingBlockLiBg: "#262c43",
  upcomingBlockLiSpanBg: "#010415",
  featuredCardBg: "#010415",
  featuredCardBorder: "#010415",
  featuredSquareBg: "#262c43",
  featuredSquareColor: "#ffffff",
  featuredTotalTextH3Color: "#ffffff",
  featuredProgressBarBg: "#ffffff",
  featuredBlockLiBg: "#262c43",
  featuredBlockLiSpanBg: "#010415",
  featuredBlockLiSmallColor: "#ffffff",
  singleLinkColor: "#ffffff",
  tieredHeadingH5Color: "#262c43",
  tieredCardBg: "#262c43",
  tieredSquareBoxBg: "#010415",
  tieredBlockLiBg: "#010415",
  tieredBlockLiSpanBg: "#262c43",
  tieredWhitelistSpanBg: "#010415",
  tieredRoundTwoLiColor: "#262c43",
  tieredRoundTwoSmallColor: "#262c43",
  circleAnimationBeforeBorder: "rgba(255, 255, 255, 0.1)",
  footerBordertop: "#15192A",
  footerBg: "#010415",
  footerBoxShadow: "0px -1px 10px 0px rgba(0, 0, 0, 0.5);",
  footerColor: "#ffffff",
  footerLiBorder: "#262C43",
  featuredpoolnextInvestmentSpanBg: "#262c43",
  featuredpoolnextAuditAColor: "#ffffff",
}

export const GlobalStyle = createGlobalStyle`



        body {
            background-color: ${(props) => props.theme.bodyBg};
            color: ${(props) => props.theme.bodyColor};
        }
        header{
          border-color: ${(props) => props.theme.headerBorderBtm};
        }
        header nav{
          background-color: ${(props) => props.theme.navBg};
          box-shadow: ${(props) => props.theme.navBoxShadow};
        }
        header nav .container a{
          color: ${(props) => props.theme.navAColor};
        }
        .link-nav{
          border-color: ${(props) => props.theme.linknavBorderLeft};
        } 
        .button-secondary {
          color: ${(props) => props.theme.buttonSecondaryColor};
          border-color: ${(props) => props.theme.buttonSecondaryBorder};
        }
        .button-secondary:hover {
          background-color: ${(props) => props.theme.buttonSecondaryHoverBg};
          color: ${(props) => props.theme.buttonSecondaryColor};
        }
        .hero-section h5{
          color: ${(props) => props.theme.herosectionH5Color};
        }
        .about-us {
          background-color: ${(props) => props.theme.blendBg};
        }
        .about-us .content div small{
          color: ${(props) => props.theme.aboutsmallColor};
        }
        .upcoming-pools .card{
          border-color: ${(props) => props.theme.upcomingCardBorder};
        }
        .upcoming-pools .card .square-box{
          background-color: ${(props) => props.theme.upcomingSquareBoxBg};
        }
        .upcoming-pools .card .square-box img{
          border-color: ${(props) => props.theme.upcomingSquareBoxBorder};
        }
        .upcoming-pools .card .block ul li{
          background-color: ${(props) => props.theme.upcomingBlockLiBg};
        }
        .upcoming-pools .card .block ul li span{
          background-color: ${(props) => props.theme.upcomingBlockLiSpanBg};
        }
        .featured-pools {
          background-color: ${(props) => props.theme.blendBg};
        }
        .featured-pools .card{
          background-color: ${(props) => props.theme.featuredCardBg};
          border-color: ${(props) => props.theme.featuredCardBorder};
        }
        .featured-pools .single-link{
          color: ${(props) => props.theme.singleLinkColor};
        }
        .featured-pools .card .square-box{
          background-color: ${(props) => props.theme.featuredSquareBg};
          color: ${(props) => props.theme.featuredSquareColor};
        }
        .featured-pools .card .total-text h3{
          color: ${(props) => props.theme.featuredTotalTextH3Color};
        }
        .featured-pools .card .total-text .progress .progress-bar{
          background-color: ${(props) => props.theme.featuredProgressBarBg};
        }
        .featured-pools .card .block ul li{
          background-color: ${(props) => props.theme.featuredBlockLiBg};
        }
        .featured-pools .card .block ul li span{
          background-color: ${(props) => props.theme.featuredBlockLiSpanBg};
        }
        .featured-pools .card .block ul li small{
          color: ${(props) => props.theme.featuredBlockLiSmallColor};
        }
        .tiered-system .main-heading h5{
          color: ${(props) => props.theme.herosectionH5Color};
        }
        .tiered-system .carousel .cards .card, 
        .litepaper .cards .card{
          background-color: ${(props) => props.theme.tieredCardBg};
        }
        .tiered-system .carousel .card-carousel .square-box{
          background-color: ${(props) => props.theme.tieredSquareBoxBg};
        }
        .tiered-system .carousel .card-carousel .whitelist-req span{
          background-color: ${(props) => props.theme.tieredSquareBoxBg};
        }
        .tiered-system .round-two{
          background-color: ${(props) => props.theme.blendBg};
        }
        .tiered-system .card .block ul li{
          background-color: ${(props) => props.theme.tieredBlockLiBg};
        }
        .tiered-system .card .block ul li span{
          background-color: ${(props) => props.theme.tieredBlockLiSpanBg};
        }
        .tiered-system .round-two .content div ul li{
          color: ${(props) => props.theme.tieredRoundTwoLiColor};
        }
        .homepage .tiered-system .round-two .content-full div small{
          color: ${(props) => props.theme.tieredRoundTwoSmallColor};
        }
        .circle-animation::before{
          border-color: ${(props) => props.theme.circleAnimationBeforeBorder} !important;
        }
        footer{
          border-color: ${(props) => props.theme.footerBordertop};
          background-color: ${(props) => props.theme.footerBg};
          box-shadow: ${(props) => props.theme.footerBoxShadow};
        }
        footer .container ul li{
          border-color: ${(props) => props.theme.footerLiBorder};
        }
        footer .container ul li a{
          color: ${(props) => props.theme.footerColor};
        }
        .featuredpoolnext .your-investment .investment-blocks span{
          background-color: ${(props) => props.theme.featuredpoolnextInvestmentSpanBg};
        }
        .featuredpoolnext .imp-links{
          background-color: ${(props) => props.theme.blendBg};
        }
        .featuredpoolnext .audit{
          background-color: ${(props) => props.theme.blendBg};
        }
        .featuredpoolnext .audit a{
          color: ${(props) => props.theme.featuredpoolnextAuditAColor};
        }
        .featuredpoolnext .disclaimer{
          background-color: ${(props) => props.theme.blendBg};
        }
        .homepage .featured-pools .card .total-text .counts small{
          color: ${(props) => props.theme.herosectionH5Color};
        }
        .homepage .contact .circle-animation-wrap .circle-animation svg{
          color: ${(props) => props.theme.bodyColor};
        }

        @media only screen and (min-width: 1710px) {
        }

        @media only screen and (max-width: 1350px){
          .homepage .upcoming-pools .card{ width: 361px; }
          .homepage .featured-pools .card{ width: 349px; }
        }

        @media only screen and (max-width: 1300px){
          .homepage .hero-section .container h2{
            line-height: 40px;
            font-size: 21px;
          }
          .homepage .upcoming-pools .card{ width: 320px; }
          .homepage .featured-pools .card{ width: 308px; }
          .homepage .tiered-system .main-heading{ margin-bottom: 15px; }
          .homepage .tiered-system .carousel .cards .card{ width: 362px; }
        }

        @media only screen and (max-width: 1170px){
          .homepage .hero-section .container h2{
            line-height: 38px;
            font-size: 19px;
          }
          .homepage .upcoming-pools .card{ width: 273px; }
          .homepage .featured-pools .card{ width: 261px; }
          .homepage .tiered-system .carousel .cards .card{ width: 316px; }
          .homepage .upcoming-pools .card .block ul li small, 
          .homepage .upcoming-pools .card .block ul li span, 
          .homepage .featured-pools .card .block ul li small, 
          .homepage .tiered-system .carousel .card-carousel .block ul li small{ font-size: 11px; }
          .homepage .featured-pools .card .block ul li span{
            min-width: 100px;
            font-size: 11px;
          }
        }

        @media only screen and (max-width: 1024px){
          .homepage .hero-section{ height: auto; }
          .homepage .hero-section .container{ flex-direction: column; }
          .homepage .hero-section .container h2{
            line-height: 40px;
            font-size: 21px;
          }
          .homepage .hero-section .container .wrap-content{
            width: 100%;
            padding-right: 0;
          } 
          .homepage .hero-section .container .wrap-img{ 
            width: 100%; 
            margin-top: 3rem;
          }
          .homepage .about-us .d-flex{ flex-direction: column-reverse; }
          .homepage .about-us .circle-animation{ 
            width: 100%;
            height: auto;
            margin-bottom: 2rem;
            justify-content: center;
            display: flex;
            margin-top: 3rem;
          } 
          .homepage .about-us .content{ 
            width: 100%; 
            padding-left: 0;
            padding-top: 80px;
          }
          .homepage .upcoming-pools{ padding-bottom: 0; }
          .homepage .upcoming-pools .d-flex, 
          .homepage .featured-pools .d-flex{ justify-content: center; }
          .homepage .upcoming-pools .card, 
          .homepage .featured-pools .card, 
          .homepage .tiered-system .carousel .cards .card{
            width: 45%;
            margin-right: 0;
            margin: 0 20px 70px;
          }
          .homepage .upcoming-pools .card:nth-last-child(2), 
          .homepage .upcoming-pools .card:last-child{ margin-bottom: 5rem; }
          .homepage .upcoming-pools .card:nth-child(3n), 
          .homepage .upcoming-pools .card:last-child, 
          .homepage .featured-pools .card:nth-child(3n), 
          .homepage .featured-pools .card:last-child, 
          .homepage .tiered-system .carousel .cards .card:nth-child(3n), 
          .homepage .tiered-system .carousel .cards .card:last-child{ margin-right: 20px; }
          .homepage .featured-pools .single-link{ 
            margin-top: 0; 
            padding-top: 0;
          }
          .homepage .featured-pools .single-link span{ top: -3px; }
          .homepage .featured-pools .card:nth-last-child(2), 
          .homepage .featured-pools .card:last-child,  
          .homepage .featured-pools .card:nth-last-child(3){ margin-bottom: 3rem; }
          .homepage .tiered-system .carousel .cards .card:nth-child(1), 
          .homepage .tiered-system .carousel .cards .card:nth-child(3), 
          .homepage .tiered-system .carousel .cards .card:nth-child(4), 
          .homepage .tiered-system .carousel .cards .card:nth-child(6), 
          .homepage .tiered-system .carousel .cards .card:last-child{ transform: scale(1); }
          .homepage .tiered-system .carousel .cards .card:nth-last-child(3), 
          .homepage .tiered-system .carousel .cards .card:nth-last-child(2), 
          .homepage .tiered-system .carousel .cards .card:last-child, 
          .homepage .tiered-system .carousel .cards .card:nth-last-child(3){ margin-bottom: 70px; }
          .homepage .about-us .heading, 
          .homepage .featured-pools .heading, 
          .homepage .contact .heading{ left: -40px; }
          .homepage .upcoming-pools .heading, 
          .homepage .tiered-system .heading{ right: -40px; }
        }

        @media only screen and (max-width: 991px){
          .navbar-nav-buttons{ flex-direction: row; }
          header nav .container .navbar-collapse{
            position: absolute;
            top: 75px;
            width: 100%;
            left: 0;
          }
          header nav .container .navbar-collapse ul{
            margin: 0;
            padding: 0;
            padding-left: .75rem;
            padding-right: .75rem;
          }
          header nav .container .navbar-collapse ul li{
            padding: 0;
            border: none;
            max-width: 95%;
            margin: 0 auto;
            background-color: #00AFFF;
            display: flex;
            width: 100%;
            padding-left: 15px;
            padding-right: 15px;
            margin-bottom: 3px;
          }
          header nav .container .navbar-collapse ul li a{ 
            padding: 15px 0; 
            color: #ffffff;
          }
          .homepage .about-us .content div h4{ line-height: 28px; }
          .homepage .upcoming-pools .card, 
          .homepage .featured-pools .card, 
          .homepage .tiered-system .carousel .cards .card{ width: 43%; }
          .homepage .featured-pools{ padding: 50px 15px; }
          .homepage .about-us{ padding: 50px 35px; }
          .homepage .featured-pools .card .time-limit{ right: -15px; }
          .homepage .featured-pools .single-link{ padding: 0 35px; }
          footer{
            height: auto;
            min-height: 75px;
            padding: 20px 0;
          }
          footer .container{ 
            flex-direction: column; 
            justify-content: center;
            text-align: center;
          }
          footer .container ul{
            padding: 0;
            margin-top: 15px;
          }
          header nav .container .navbar-nav li:first-child button{ margin-left: 0; }
          .homepage .contact .circle-animation-wrap{ margin-top: 80px; }
          .homepage .about-us .heading, 
          .homepage .featured-pools .heading, 
          .homepage .contact .heading{ left: -35px; }
          .homepage .upcoming-pools .heading, 
          .homepage .tiered-system .heading{ right: -35px; }
          .homepage .tiered-system .carousel .card-carousel .time-limit{
            width: 100%;
            left: 0;
          }
          footer .container ul li:first-child{ 
            margin-left: 0; 
            padding-left: 0; 
          }
          header nav .container .link-nav li a::after{ display: none; }
        }

        @media only screen and (max-width: 767px){
          .homepage .upcoming-pools .card .block ul li small, 
          .homepage .upcoming-pools .card .block ul li span, 
          .homepage .featured-pools .card .block ul li small, 
          .homepage .featured-pools .card .block ul li span, 
          .homepage .tiered-system .carousel .card-carousel .block ul li small{ font-size: 12px; }
          .litepaper .cards .card{ width: 100%; }
          .litepaper .cards .card:nth-last-child(2){ margin-bottom: 2rem; }
        }

        @media only screen and (max-width: 726px){
          .homepage .upcoming-pools .card, 
          .homepage .featured-pools .card, 
          .homepage .tiered-system .carousel .cards .card{ width: 100%; }
          .homepage .tiered-system .carousel .cards .card:last-child{ margin-bottom: 50px; }
          .homepage .featured-pools .single-link{ padding: 25px 23px 0; }
          .homepage .featured-pools .single-link span{ top: 21px; }
          .homepage .about-us .heading, 
          .homepage .featured-pools .heading, 
          .homepage .contact .heading{ left: -30px; }
          .homepage .upcoming-pools .heading, 
          .homepage .tiered-system .heading{ right: -30px; }
        }

        @media only screen and (max-width: 650px){
          header{
            height: 142px;
            padding: 15px 0 20px;
          }
          header nav, 
          header nav .container .navbar-brand{ padding: 0; }
          header nav .container{ flex-direction: column; }
          .navbar-nav-buttons{ margin-top: 20px; }
          header nav .container .navbar-toggler{
            position: absolute;
            right: 25px;
            top: 4px;
          }
          header nav .container .navbar-collapse{ top: 126px; }
          .homepage .hero-section .container button{
            min-width: 10px;
            width: 50%;
          }
        }

        @media only screen and (max-width: 590px){
          .homepage .contact .circle-animation-wrap .circle-animation{
            height: 70px;
            width: 70px;
          }
          .homepage .contact .circle-animation-wrap{
            margin-right: 10px;
            margin-left: 10px;
          }
        }

        @media only screen and (max-width: 500px){
          .homepage .about-us .heading, 
          .homepage .featured-pools .heading, 
          .homepage .contact .heading{ left: -25px; }
          .homepage .upcoming-pools .heading, 
          .homepage .tiered-system .heading{ right: -25px; }
          .homepage .contact .d-flex{
            flex-wrap: wrap;
            margin-top: 80px;
          }
          .homepage .contact .circle-animation-wrap{
            margin-top: 0;
            margin-bottom: 25px;
          }
          .homepage .contact .circle-animation-wrap:nth-child(4), 
          .homepage .contact .circle-animation-wrap:last-child{ margin-bottom: 0; }
          header nav .container .navbar-nav li button svg{ display: none; }
          header nav .container .navbar-nav li button.button-round svg{ display: block; }
        }

        @media only screen and (max-width: 400px){
          .homepage .upcoming-pools .card, 
          .homepage .featured-pools .card, 
          .homepage .tiered-system .carousel .cards .card{ 
            padding: 30px 15px; 
            position: relative;
          }
          .homepage .tiered-system .carousel .card-carousel{ 
            padding: 15px 0;
            position: initial; 
          }
          footer .container{ line-height: 26px; }
          footer .container ul{ margin-top: 10px; }
          .homepage .hero-section .container img{ max-width: 100%; }
        }

        @media only screen and (max-width: 375px){
          .homepage .upcoming-pools .card .block ul li, 
          .homepage .featured-pools .card .block ul li, 
          .homepage .tiered-system .carousel .card-carousel .block ul li{
            height: auto;
            flex-wrap: wrap;
            justify-content: center;
            padding: 12px 20px;
            border-radius: 15px;
            text-align: center;
          }
          .homepage .upcoming-pools .card .block ul li span, 
          .homepage .featured-pools .card .block ul li span, 
          .homepage .tiered-system .carousel .card-carousel .block ul li span{
            height: auto;
            min-height: 35px;
            width: 100%;
            margin-top: 10px;
          }
          .homepage .tiered-system .carousel .cards .card{ height: auto; }
          .homepage .tiered-system .carousel .card-carousel .time-limit{ bottom: -45px; }
        }

        @media only screen and (max-width: 320px){
          header{ height: 192px; }
          .navbar-nav-buttons{ 
            flex-wrap: wrap; 
            justify-content: space-between;
          }
          .navbar-nav-buttons li{ width: 48%; }
          header nav .container .navbar-nav-buttons li button{ 
            width: 100%; 
            margin-left: 0;
          }
          .navbar-nav-buttons li:last-child{ 
            width: 100%; 
            margin-top: 10px;
          }
          header nav .container .navbar-collapse{ top: 177px; }
          .homepage .hero-section .container .wrap-content .d-flex{ flex-wrap: wrap; }
          .homepage .hero-section .container button{ 
            width: 100%; 
            margin-bottom: 10px;
            margin-left: 0;
          }
          .homepage .hero-section .container button:last-child{ margin-bottom: 0; }
          .homepage .about-us .heading, 
          .homepage .featured-pools .heading, 
          .homepage .contact .heading{ left: -20px; }
          .homepage .upcoming-pools .heading, 
          .homepage .tiered-system .heading{ right: -20px; }
        }

        @media only screen and (max-width: 280px){
          header nav .container .navbar-toggler{ padding: 5px; }
          .homepage .tiered-system .carousel .card-carousel .square-box span{ text-align: center; }
          .homepage .contact .circle-animation-wrap .circle-animation{
            height: 60px;
            width: 60px;
          }
          footer .container ul{ flex-direction: column; }
          footer .container ul li{
            margin-left: 0;
            padding-left: 0;
            border-left: none;
            margin-bottom: 5px;
          }
          footer .container ul li:last-child{ margin-bottom: 0; }
          .litepaper .cards .card b{ line-height: 26px; }
        }

`
