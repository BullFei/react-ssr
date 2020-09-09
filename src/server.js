import express from 'express';
import App from './components/App';
// 所有需要引入的部分，都需要引入对应的内容。
import React from 'react';
import { renderToString, renderToStaticMarkup} from 'react-dom/server';

var app = express();


app.get('/', (req, res)=> {
    const arr = [1, 2, 3, 666, 999, 1000];
    const html = renderToStaticMarkup(<App list={arr} />);
    res.send(html);
})

app.listen(3002, function() {
    console.log('server started!!!');
})
