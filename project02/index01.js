// 1.下载并安装mongoose
// 2.在js入口文件中,引入mongoose
// 3.通过mongoose对象,连接mongodb
// 4.通过mongoose对象,创建约束对象和集合对象,并对集合数据进行增删改查操作

const mongoose = require('mongoose');

;(async function(){
  try{
    await mongoose.connect('mongodb://localhost:27017/web0223-02'); //connect, 不是connections

    // (1) 通过mongoose对象,设置 指定约束对象
    const studentsSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true,
        unique:true
      },
      age:{
        type:Number,
        required:true,
      },
      gender:{
        type:String,
        default:"男"
      },
      lastOperateTime:{
        type:Date,
        default:Date.now()
      },
      info:{
        type:mongoose.Schema.Types.Mixed,
        default:'暂无描述信息'
      }

    })

    // (2) 通过mongoose对象,设置模板对象
    const studentsModel = mongoose.model('student',studentsSchema);
    // 根据模板对象,对对象中的数据进行增删改查操作
    // a. 增 xx.create({},callback)
    // studentsModel.create({
    //   name:'林黛玉',
    //   // age:25,  //如果约束必须设置的字段, 并没有值时,会报错
    //   age:24,
    //   gender:"女"
    // },(err,data)=>{ //err 错误优先原则,如果没报错,则接收data数据,  data数据就是插入的数据对象
    //   console.log(err + data);
    // })

    // b.查
    studentsModel.find({});


    console.log('数据库连接成功');
  }catch(error){
    console.log("数据库连接失败"+error);
  }
})()