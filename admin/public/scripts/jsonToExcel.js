//const saveAs = require("./fileSave");

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
console.log(window)

function d_loadExcel (data){
    const worksheet=XLSX.utils.json_to_sheet(data);
    const workbook ={
        Sheets:{
            'data':worksheet
        },
        SheetNames:['data']
    };
    const excelBuffer =XLSX.write(workbook,{bookType:'xlsx',type:'array'})
    saveExcel(excelBuffer,'myfile');

} 


function saveExcel(buffer,filename){
    const data = new  Blob([buffer],{type:EXCEL_TYPE});
    saveAs(data,`${filename}.xlsx`);

}