// import webworkify from 'webworkify-webpack';
// import DecoderWorker from './testworkers.worker';

// function getTestString () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('23434254325');
//         },2000);
//     });
// }

// const test111 = async () => {
//     let testString = await getTestString();
//     console.error('测试代码122356', testString);
// };

// const testWorker = webworkify(require.resolve('./testworkers.js'));
// const testWorker = new DecoderWorker();
console.error(111111111)
const testWorker = new Worker(new URL('./testworkers.js', import.meta.url));
testWorker.onmessage = e => {
    console.log('收到子线程消息', e.data);
};

// const CloudHubFastLive = { test111 }
// export default CloudHubFastLive;
// module.exports = require('./test.js').default;;
// module.exports = CloudHubFastLive;

