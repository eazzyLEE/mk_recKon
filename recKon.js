const Json2csvParser = require('json2csv').Parser
const fs = require('file-system')
let w = require('./bankOne.json')
let x = require('./bankOne.json')
let y = require('./diamondBank.json')

let file= []
function recKon(a, b) { 
  let files = [], bank =[], ren = [];
  for (let y=0; y<a.length; y++) {
    ren = a;
    if(a[y]['Instrument No.'] !== null) {
      ren[y]['Instrument No.'] = a[y]['Instrument No.'].toFixed();
    }
  }
  for (let i=0; i<ren.length; i++) {
    for (let j=0; j<b.length; j++) {
      if(ren[i]['Financial Date'] === b[j]['Financial Date'] && (ren[i].Debit === b[j].CR || ren[i].Credit ===b[j].DR)) {
      //if(a[i].Debit === b[j].CR){
        file.push(ren[i]);
        break
      }
      //console.log(file)
    }
  
  }
  for(let d=0; d<file.length; d++) {
    //for(let p=0; p<file.length; p++) {
      //if(ren[d] !== file[p]) {
      ren.splice(ren.indexOf(file[d]), 1);
      // if((ren[d].Debit !== file[d].Debit || ren[d].Credit !==file[d].Credit)){ // && (a[i]['Instrument No.'].toFixed() == file[i]['Instrument No.']) ) {
      //   bank.push(ren[d])
      //   break
      // }
    //}
  }
  

  //for (let p=0; p<)
  // console.log(file.length)
  //  console.log(ren.length)
const fieldsA=[Object.keys(file[0])],
fieldsB=[Object.keys(ren[0])]

const sortjsonCsv = new Json2csvParser({ fieldsA }),
unsortjsonCsv = new Json2csvParser({ fieldsB })

const sorted = sortjsonCsv.parse(file),
unsorted = unsortjsonCsv.parse(ren)

fs.writeFile('./sorted.csv', sorted);
fs.writeFile('./unsorted.csv', unsorted);
  console.log(sorted)
  console.log(unsorted)
}


  recKon(x, y)



  //console.log(x[5]['Instrument No.'].toFixed())
  //console.log(w.length)