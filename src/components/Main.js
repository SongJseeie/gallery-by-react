require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//获取图片相关的数据
let imageData = require('../data/imageData.json');
//将图片名信息转成图片URL路径信息
function getImageURL(imageDataArr) {
   for(let i=0,j=imageDataArr.length;i<j;i++){
     let singleImageData=imageDataArr[i];
     singleImageData.imageUrl=require('..\images'+singleImageData.filename);
     imageDataArr[i]=singleImageData;

   }
  return imageDataArr;
}
imageData=getImageURL(imageData);

class AppComponent extends React.Component {
  render() {
    return (
     <section className="stage">
       <section className="image-sec">

       </section>
       <nav className="controller-nav">

       </nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
