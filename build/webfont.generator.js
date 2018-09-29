const webfontsGenerator = require('webfonts-generator');

const fs = require('fs');
const _ = require('lodash');

const files = _.chain(fs.readdirSync(iconPath))
  .filter(f => f.endsWith('.svg'))
  .map(f => `${iconPath}/${f}`)
  .value();

webfontsGenerator({
  files: [
    'src/test-input-icons/baseline-autorenew-24px.svg'
  ],
  dest: 'src/icon-font-dest/',
  html: true, // true이면 html 미리보기를 생성해줍니다.
  templateOptions: {
    baseSelector: '.icon-font', // ㄱㅣ본으로 추가될 클래스 이름
    classPrefix: 'icon-font-' // 위 벡터 이미지 이름과 조합하여 추가될 클래스 이름(예: y-icon-download)
  }
}, function(error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
});
