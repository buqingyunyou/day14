// 第一步: 下载安装mongoose依赖包

// 第二步: 在入口文件中, 引入mongoose
const mongoose = require('mongoose');

// (为保证后续代码, 是在数据库连接成功后执行,则使用async,await)
;
(async function () {
  try {
    // 第三步: 连接mongodb, 返回promise对象
    const mong = await mongoose.connect("mongodb://localhost:27017/web0223-01", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    // 第四步: 测试是否连接成功
    // 如果连接成功, 则会打印出下面这条信息
    console.log('数据库连接成功');

    // 第五步: 约束对象
    const Schema = mongoose.Schema;
    // 制定约束
    const customerSchema = new Schema({
      name:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        required:true
      },
      gender:{
        type:String,
        default:"男"
      },
      info:{
        type:Schema.Types.Mixed,
        default:"暂无描述信息"
      },
      date:{
        type:Date,
        default:Date.now()
      }
    })

    // 第六步: 集合对象
    const customerModel = mongoose.model('customer',customerSchema);
    // 插入数据 create({},()=>{})
    customerModel.create({
      name:"李白",
      age:40,
    },
      (err,data)=>{
        console.log(err+data);
      })


  } catch (error) {
    // 如果连接不成功,则返回的promise对象状态是失败,进到catch中
    console.log('数据库连接失败' + error);
  }
})()