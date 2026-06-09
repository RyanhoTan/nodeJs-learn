const fs = require('fs');

fs.writeFile('./halo.js', 'console.log("这句话是我通过writefile.js写入的")', function(err, result){
    if(err) {
        console.log('写入文件失败' + err.message);
    }
        console.log('写入文件成功:');
        console.log(result);
        fs.readFile('./halo.js','utf-8', function(err, data){
            if(err) {
                console.log('读取文件失败'+ err.message);
            }
            console.log('读取文件成功:');
            console.log(data);
        })
    
});

// 会直接删除原来的文件内容，重新写入新的内容