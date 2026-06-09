const fs = require('fs');

fs.readFile(__dirname + '/halo.js','utf-8', function(err, data){
    // console.log(err.message);
    // console.log('----------------------------');
    // console.log(data);
    if(err) {
        console.log('读取文件失败'+ err.message);
    } 
        console.log('读取文件成功:');
        console.log(data);
    
})

