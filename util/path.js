// 프로젝트 디렉토리 경로 설정

const path = require('path');

module.exports = path.dirname(require.main.filename); // app.js의 경로를 가져옴