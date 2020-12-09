import settings from '../configuration/Settings';

import XLSX from 'xlsx';

class XlsxManager {

  constructor(props) {
    super(props);
  }

  loadXlsx(url,callback) {
    let oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = (e) => {
      let arraybuffer = oReq.response;
      let data = arraybuffer;
      let wb;
      let arr = this.fixXlsx(data);
      let btoaValue=btoa(arr);
      wb = XLSX.read(btoaValue, {type: 'base64'});
      callback(this.convertSheetsToTables(wb.Sheets));
    }
    oReq.send();
  }

  fixXlsx(data) {
    let o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
  }

  convertSheetsToTables(data) {
    let result={};
    for (let id in data) {
      let rows=[];
      result[id]=rows;
      let cells=data[id];
      for (let cellId in cells) {
        let y=cellId.substr(1)-1;
        let x=cellId.substr(0,1);//cellId.charCodeAt(0)-("A").charCodeAt(0);
        if (rows[y]==null) {
          rows[y]=[]
        }
        rows[y][x]=cells[cellId].v;
      }
      rows.splice(0,1);
    }
    return result;
  }

}
export default XlsxManager;
