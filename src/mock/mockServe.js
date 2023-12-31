import Mock from 'mockjs'    //引入mock
//引入兩個json文件(json文件默認對外export所以不需要寫export)
import banner from './banner.json'
import floor from './floor.json'


//mock用途是在後端api還沒建置好時模擬向後端發請求時使用
//mock方法定義一個服務器，第一個參數:請求地址  第二個參數:請求方法 第三個參數:請求的數據json格式
//請求的圖片放在public/images打包後變成images所以地址寫"/images/aaa.jpg"
Mock.mock('/mock/banner',{code:200,data:banner})   
Mock.mock('/mock/floor',{code:200,data:floor})