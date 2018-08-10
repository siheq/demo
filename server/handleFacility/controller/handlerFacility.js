const axios = require('axios');
const _ = require('lodash');

const data = [{
  "bookingNumber": "T6166804880",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166745280",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166804140",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166804870",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166806010",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166786430",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166788040",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166788030",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166788050",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166788060",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166745350",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166802340",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166802360",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166805290",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166806460",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166802320",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166795300",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166795290",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166795280",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166795270",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166791580",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166791560",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166791550",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166791540",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166791530",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166802330",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166789480",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166783920",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166789470",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166783910",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166802350",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166802140",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166804130",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166802150",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166803500",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166802130",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166788790",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "ShanghaiPort Ctn Waigaoqiao Tml Brh",
  "fND": "ShanghaiPort Ctn Waigaoqiao Tml Brh"
}, {
  "bookingNumber": "T6166806000",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166758030",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Dongbu Pusan Container Terminal Ltd",
  "fND": "Dongbu Pusan Container Terminal Ltd"
}, {
  "bookingNumber": "T6166805280",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166758390",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Dongbu Pusan Container Terminal Ltd",
  "fND": "Dongbu Pusan Container Terminal Ltd"
}, {
  "bookingNumber": "T6166798800",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166805300",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Euromax Terminal",
  "fND": "Euromax Terminal"
}, {
  "bookingNumber": "T6166804170",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166804210",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166804200",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166804190",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166804160",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166804180",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166802120",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166745270",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166784720",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166786200",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166801310",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166797420",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166794830",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166797440",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166797430",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166801290",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166801300",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166797460",
  "pOR": "Victoria Int'l Container Terminal",
  "firstPOL": "Victoria Int'l Container Terminal",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166798740",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166787770",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166800990",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166745360",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166801010",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166800980",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166800970",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166801000",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166800340",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166800330",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166800950",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166800320",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166800960",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166800940",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166800370",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166800360",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166800350",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166798810",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166784860",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166775410",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166796610",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166770270",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166762180",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166754000",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166775420",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166789450",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166785190",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166789460",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166745290",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166791570",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166795250",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166783930",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166744770",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166795240",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166795260",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166764280",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166774770",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Int'l Container Tml Services, Inc",
  "fND": "Int'l Container Tml Services, Inc"
}, {
  "bookingNumber": "T6166785730",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Terminal Peti Kemas Koja (UTC 3)",
  "fND": "Terminal Peti Kemas Koja (UTC 3)"
}, {
  "bookingNumber": "T6166785720",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Terminal Peti Kemas Koja (UTC 3)",
  "fND": "Terminal Peti Kemas Koja (UTC 3)"
}, {
  "bookingNumber": "T6166795310",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166787720",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166787750",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166787740",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166784130",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166788810",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166786440",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166777090",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166784140",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166784320",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166775440",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166767390",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166767410",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166751190",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166786450",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166775450",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166783940",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166793790",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166785710",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Terminal Peti Kemas Koja (UTC 3)",
  "fND": "Terminal Peti Kemas Koja (UTC 3)"
}, {
  "bookingNumber": "T6166791520",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166766890",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166763020",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Yinkou COSCO Int'l Ctn Tml Co.,Ltd.",
  "fND": "Yinkou COSCO Int'l Ctn Tml Co.,Ltd."
}, {
  "bookingNumber": "T6166788800",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166745300",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166786400",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166786390",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166786410",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166786370",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166786380",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166787880",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166744780",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166787870",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166787900",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166771470",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166734390",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Dalian Container Terminal  Co.,ltd.",
  "fND": "Dalian Container Terminal  Co.,ltd."
}, {
  "bookingNumber": "T6166787860",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166787890",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166747630",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Int'l Container Tml Services, Inc",
  "fND": "Int'l Container Tml Services, Inc"
}, {
  "bookingNumber": "T6166771510",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166771490",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166787000",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166771500",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166771480",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166769380",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166787010",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166758420",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166784830",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166785420",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166784820",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166784090",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166784070",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166784080",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166784840",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166784310",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166783950",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166784260",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166767400",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166745310",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166772400",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166772420",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166783240",
  "pOR": "Victoria Int'l Container Terminal",
  "firstPOL": "Victoria Int'l Container Terminal",
  "lastPOD": "Tianjin Port Pacific Int'l Ctn Tml",
  "fND": "Tianjin Port Pacific Int'l Ctn Tml"
}, {
  "bookingNumber": "T6166757870",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166758400",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166758410",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166757890",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166713940",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166744790",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166777020",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166777010",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166778960",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166777000",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166780780",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166780790",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166780770",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166775400",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166778950",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166780620",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166779650",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166776980",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166776990",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166779270",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166778940",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166763030",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Yinkou COSCO Int'l Ctn Tml Co.,Ltd.",
  "fND": "Yinkou COSCO Int'l Ctn Tml Co.,Ltd."
}, {
  "bookingNumber": "T6166766910",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Int'l Container Tml Services, Inc",
  "fND": "Int'l Container Tml Services, Inc"
}, {
  "bookingNumber": "T6166763050",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166778170",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166775390",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166764310",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166775590",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166766900",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166775430",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166764180",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166777080",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166777070",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166777110",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166777100",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166718110",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166769350",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166775160",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Int'l Container Tml Services, Inc",
  "fND": "Int'l Container Tml Services, Inc"
}, {
  "bookingNumber": "T6166751170",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166770860",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Int'l Container Tml Services, Inc",
  "fND": "Int'l Container Tml Services, Inc"
}, {
  "bookingNumber": "T6166764270",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166766380",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Int'l Container Tml Services, Inc",
  "fND": "Int'l Container Tml Services, Inc"
}, {
  "bookingNumber": "T6166767030",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166767040",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166767060",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166713960",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166765180",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166765190",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166754270",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Nanko C-2 Container Terminal",
  "fND": "Nanko C-2 Container Terminal"
}, {
  "bookingNumber": "T6166748280",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166748270",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166714990",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "Victoria Int'l Container Terminal",
  "lastPOD": "Tianjin Port Pacific Int'l Ctn Tml",
  "fND": "Tianjin Port Pacific Int'l Ctn Tml"
}, {
  "bookingNumber": "T6166760940",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166749460",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166760330",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166760320",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166760310",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166760340",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166763040",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Yinkou COSCO Int'l Ctn Tml Co.,Ltd.",
  "fND": "Yinkou COSCO Int'l Ctn Tml Co.,Ltd."
}, {
  "bookingNumber": "T6166763320",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166763330",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166743110",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166763360",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166752470",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166763060",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166748300",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166741400",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166705880",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166732470",
  "pOR": "Patrick Stevedores Operations Pty.",
  "firstPOL": "Patrick Stevedores Operations Pty.",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166741420",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166751180",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166751200",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166751220",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166751210",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166751230",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166700400",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166757310",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166757300",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166757340",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166757350",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166756140",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166714980",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Pacific Int'l Ctn Tml",
  "fND": "Tianjin Port Pacific Int'l Ctn Tml"
}, {
  "bookingNumber": "T6166748310",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166747040",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166743100",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166743090",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166743140",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Int'l Container Terminal Co.",
  "fND": "Dalian Int'l Container Terminal Co."
}, {
  "bookingNumber": "T6166727740",
  "pOR": "Brisbane Container Terminals PtyLtd",
  "firstPOL": "Brisbane Container Terminals PtyLtd",
  "lastPOD": "Int'l Container Tml Services, Inc",
  "fND": "Int'l Container Tml Services, Inc"
}, {
  "bookingNumber": "T6166748290",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166745630",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166744850",
  "pOR": "Patrick Stevedores Operations Pty.",
  "firstPOL": "Patrick Stevedores Operations Pty.",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166735220",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Dalian Port Container Terminal Co.",
  "fND": "Dalian Port Container Terminal Co."
}, {
  "bookingNumber": "T6166700420",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166716420",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166733260",
  "pOR": "Patrick Stevedores Operations Pty.",
  "firstPOL": "Patrick Stevedores Operations Pty.",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166731760",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166720090",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}, {
  "bookingNumber": "T6166684570",
  "pOR": "Flinders Adelaide ContainerTerminal",
  "firstPOL": "Flinders Adelaide ContainerTerminal",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166702970",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166680550",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166665850",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166656790",
  "pOR": "DP World Brisbane",
  "firstPOL": "DP World Brisbane",
  "lastPOD": "Yumeshima Container Terminal",
  "fND": "Yumeshima Container Terminal"
}];

const data2 = [{
  "bookingNumber": "T6166802840",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166802570",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166802560",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166802580",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166794050",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166788890",
  "pOR": "Victoria Int'l Container Terminal",
  "firstPOL": "Victoria Int'l Container Terminal",
  "lastPOD": "Pasir Panjang Terminal",
  "fND": "Pasir Panjang Terminal"
}, {
  "bookingNumber": "T6166795710",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166786920",
  "pOR": "Victoria Int'l Container Terminal",
  "firstPOL": "Victoria Int'l Container Terminal",
  "lastPOD": "OOCL (Taiwan) Co., Ltd.",
  "fND": "OOCL (Taiwan) Co., Ltd."
}, {
  "bookingNumber": "T6166778880",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku D-4 Container Terminal",
  "fND": "Honmoku D-4 Container Terminal"
}, {
  "bookingNumber": "T6166791660",
  "pOR": "Victoria Int'l Container Terminal",
  "firstPOL": "Victoria Int'l Container Terminal",
  "lastPOD": "Pasir Panjang Terminal",
  "fND": "Pasir Panjang Terminal"
}, {
  "bookingNumber": "T6166769720",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166779980",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166746311",
  "pOR": "Patrick Stevedores Operations Pty.",
  "firstPOL": "Patrick Stevedores Operations Pty.",
  "lastPOD": "Kepple/Tanjong Pagar Terminal",
  "fND": "Kepple/Tanjong Pagar Terminal"
}, {
  "bookingNumber": "T6166746310",
  "pOR": "Patrick Stevedores Operations Pty.",
  "firstPOL": "Patrick Stevedores Operations Pty.",
  "lastPOD": "Kepple/Tanjong Pagar Terminal",
  "fND": "Kepple/Tanjong Pagar Terminal"
}, {
  "bookingNumber": "T6166746320",
  "pOR": "Patrick Stevedores Operations Pty.",
  "firstPOL": "Patrick Stevedores Operations Pty.",
  "lastPOD": "Kepple/Tanjong Pagar Terminal",
  "fND": "Kepple/Tanjong Pagar Terminal"
}, {
  "bookingNumber": "T6166776580",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166782660",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "PC14 Container Terminal",
  "fND": "PC14 Container Terminal"
}, {
  "bookingNumber": "T6166778870",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "PC14 Container Terminal",
  "fND": "PC14 Container Terminal"
}, {
  "bookingNumber": "T6166779680",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166780840",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166780830",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166780860",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166779970",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Honmoku BC-2 Container Terminal",
  "fND": "Honmoku BC-2 Container Terminal"
}, {
  "bookingNumber": "T6166769740",
  "pOR": "Victoria Int'l Container Terminal",
  "firstPOL": "Victoria Int'l Container Terminal",
  "lastPOD": "Westports Malaysia",
  "fND": "Westports Malaysia"
}, {
  "bookingNumber": "T6166643630",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Daikoku C-3 Terminal",
  "fND": "Daikoku C-3 Terminal"
}, {
  "bookingNumber": "T6166622190",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Dongbu Pusan Container Terminal Ltd",
  "fND": "Dongbu Pusan Container Terminal Ltd"
}];

const data3 = [{
  "bookingNumber": "T6166801840",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166796400",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166804790",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166798050",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166798850",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Shekou  Container  Terminal  LTD",
  "fND": "Shekou  Container  Terminal  LTD"
}, {
  "bookingNumber": "T6166799490",
  "pOR": "Patrick Stevedores Operations Pty.",
  "firstPOL": "Patrick Stevedores Operations Pty.",
  "lastPOD": "Port of Felixstowe",
  "fND": "Port of Felixstowe"
}, {
  "bookingNumber": "T6166794730",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166787040",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166787090",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166795000",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Shekou  Container  Terminal  LTD",
  "fND": "Shekou  Container  Terminal  LTD"
}, {
  "bookingNumber": "T6166782180",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Shekou  Container  Terminal  LTD",
  "fND": "Shekou  Container  Terminal  LTD"
}, {
  "bookingNumber": "T6166790840",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166759080",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166779500",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166759090",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166766800",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Shekou  Container  Terminal  LTD",
  "fND": "Shekou  Container  Terminal  LTD"
}, {
  "bookingNumber": "T6166778000",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Qingdao Qianwan Container Tml Co.",
  "fND": "Qingdao Qianwan Container Tml Co."
}, {
  "bookingNumber": "T6166781810",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166759091",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Sha Port Ctn Waigaoqiao Phase V Tml",
  "fND": "Sha Port Ctn Waigaoqiao Phase V Tml"
}, {
  "bookingNumber": "T6166773920",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166780520",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Tianjin Port Container Terminal Co",
  "fND": "Tianjin Port Container Terminal Co"
}, {
  "bookingNumber": "T6166772880",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Shekou  Container  Terminal  LTD",
  "fND": "Shekou  Container  Terminal  LTD"
}, {
  "bookingNumber": "T6166776200",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}, {
  "bookingNumber": "T6166730380",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Shekou  Container  Terminal  LTD",
  "fND": "Shekou  Container  Terminal  LTD"
}, {
  "bookingNumber": "T6166755330",
  "pOR": "DP World Australia Limited.",
  "firstPOL": "DP World Australia Limited.",
  "lastPOD": "Cosco-Hit Terminals (Hong Kong) Ltd",
  "fND": "Cosco-Hit Terminals (Hong Kong) Ltd"
}];

exports.get = async (url, params) => await axios.get(url);

exports.call = async dataTmp => {
  let filterData = [];
  dataTmp.forEach(item => {
    if (filterData.indexOf(item.pOR) === -1) {
      filterData.push(item.pOR);
    }
    if (filterData.indexOf(item.firstPOL) === -1) {
      filterData.push(item.firstPOL);
    }
    if (filterData.indexOf(item.lastPOD) === -1) {
      filterData.push(item.lastPOD);
    }
    if (filterData.indexOf(item.fND) === -1) {
      filterData.push(item.fND);
    }
  });
  console.log('whole length', filterData.length);
  let emptyArray = [];
  let wholeLength = filterData.length;
  let emptyCount = 0;
  for (let i = 0; i < filterData.length; i++) {
    let item = filterData[i];
    let result = await exports.get(`https://nominatim.openstreetmap.org/search?format=json&q=${item}`);
    if (i === 0) {
      console.log(result.data, 'success');
    }
    if (_.isEmpty(result)) {
      emptyCount++;
      emptyArray.push(item);
    }
    else {
      if (_.isEmpty(result.data)) {
        emptyCount++;
        emptyArray.push(item);
      }
    }
    console.log(i, 'success');
  }
  return {
    wholeLength,
    emptyCount,
    emptyArray,
  };
}

exports.con = async function (req, res) {
  try {
    let result = await exports.call(data3);
    res.json(result);
  }
  catch (e) {
    console.log(e);
  }
}
