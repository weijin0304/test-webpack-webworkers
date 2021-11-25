

addEventListener('message', function (e) {
    const data = e.data;
    console.log('decoderWorker: 收到主线程的消息:', data);
},false);
postMessage({ action: 'recData', data: 123456 });
