//import express
const express = require ('express');
const app = express ();

//run code ở port (cổng) nào
const port = 3000;

//định nghĩa route (tuyến đường)

// '/' là đường dẫn đến trang '/' sẽ chạy đến trang chủ đầu tiên '/tin-tuc' sẽ chạy đến trang tin-tuc
app.get ('/', (req, res) => {
    var a  = 5;
    var b = 2;
    var c = a+b;
    return res.send ('<a href="">Hello World</a>');
});

//lắng nghe ở port được định nghĩa bên trên
app.listen (port, () => {});