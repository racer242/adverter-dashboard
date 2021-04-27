import { isMobile,isLocal } from '../core/helpers';

let assetsUrl = "."
// if (!isLocal()) {
//   assetsUrl = document.location.toString();
// }
// console.log("------- assetsUrl",assetsUrl);

const settings = {
  ...window.settings,

  store:{ },
  localStoreName:"appState_01062020",

  developerTitle:"mediasmit.ru",
  developerUrl:"http://www.mediasmit.ru/",
  developerHead:null,
  developerTexts:[
    "Мы создаем digital-продукты, направленные на решение бизнес-задач клиентов",
    "mediasmit.ru",
  ],

  assetsUrl: assetsUrl,

  reportUrl: assetsUrl+"/report.json",
  reportUrlJs: assetsUrl+"/report.js",

  excelFileNameTemplate:"report_$campName$.xlsx",

  defaultState:{
    viewStatus:{
      mode:"frames",
      currentFrame:"0",
      format:"all",
      section:"all",
      publisher:"all",
      platform:"all",
      feed:"all",
      status:"all",
      passedView:"all",
      sortMode:"format",
    },
    passStatus:{},
    windowIsVisible:true,

    feedsEditorisActive:false,

    modifyFeeds: [],//{src: 'abc', sheet: 'default'}
    // feedsContent: [
    //                 {
    //                   id: 'default',
    //                   content: [
    //                     {feedOne: ['Поле 1','Поле 2']},
    //                     {feedTwo: ['Поле 3','Поле 4']},
    //                     {feedThree: ['Поле 5']},
    //                     {feedFour: ['Поле 6']},
    //                     ]
    //                 },
    //               ],
  },

  isMobile:isMobile(),
  isLocal:isLocal(),
  isDev:(document.location.toString().indexOf("localhost")>0),

  anyImage:/\.(gif|jpg|jpeg|png|svg)$/gi,

  reloadTimeout:30000,
  loadTimeout:5000,

  disableOpacity:0.3,

  statuses:{
    empty:{color:"#999999",title:"Еще не собран",fill:"#DDDDDD"},
    building:{color:"#0000FF",title:"Процесс сборки",fill:"#99CCFF"},
    waitingForRebuilding:{color:"#0099FF",title:"Пауза сборки",fill:"#66FFFF"},
    failed:{color:"#FF0000",title:"Ошибка сборки",fill:"#FFCCCC"},
    completed:{color:"#009900",title:"Успешно собран",fill:"#CCFF99"},
    aborted:{color:"#FF0000",title:"Сборка прервана",fill:"#FFCCCC"},
    waitingForBuilding:{color:"#0099FF",title:"Ожидание сборки",fill:"#66FFFF"},
    paused:{color:"#999999",title:"На паузе",fill:"#DDDDDD"},
  },

  openTitle:"ДЕМО",
  downloadZip:"ZIP",
  downloadGif:"GIF",
  downloadJpg:"JPG",

  requestId: {
    dashboard:"dashboard",
    download:"download",
    pdf:"pdf",
  },




}


export default settings;
