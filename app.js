const mongodb=require("mongodb")
const mongoClient=mongodb.MongoClient
const dbname="projct1"
const connectionUrl="mongodb://127.0.0.1:27017"

mongoClient.connect(connectionUrl,(error,res1)=>{
    if(error){console.log("erorrr")}
    console.log("fine")

    const db=res1.db(dbname)

//     db.collection("students").insertOne({name:"aya"
// ,age:25},(error,data)=>{
//     if(error){console.log("cant able to insert data")}
//     console.log(data.insertedId)
// })

//     db.collection("students").insertOne({name:"aya"
// ,age:25},(error,data)=>{
//     if(error){console.log("cant able to insert data")}
//     console.log(data.insertedId)
// })

// db.collection("students").insertMany([{name:"aya",age:25},{name:"mony",age:8},{name:"fatma",age:25}
// ,{name:"merna",age:25},{name:"ranim",age:25},{name:"marwan",age:6},
// {name:"rania",age:25},{name:"aya",age:5},{name:"laila",age:3},{name:"nada",age:24}
// ],(error,data)=>{
//     if(error){console.log("cant able to insert data")}
//     console.log(data.insertedId)
// })


db.collection("students").find({age:25}).limit(3).toArray((error,data)=>{
    if(error){console.log("cant able to insert data")}
    console.log(data)
})

db.collection('students').updateOne({_id:mongodb.ObjectId("64db737a5965efc6634bfe85")},
{$set:{name:"asmaa"}}).then((data)=>{console.log(data.modifiedCount)}).catch((error)=>{console.log(error)})

db.collection('students').updateOne({_id:mongodb.ObjectId("64db737a5965efc6634bfe87")},
{$set:{name:"asmaa"}}).then((data)=>{console.log(data.modifiedCount)}).catch((error)=>{console.log(error)})

db.collection('students').updateOne({_id:mongodb.ObjectId("64db737a5965efc6634bfe89")},
{$set:{name:"asmaa"}}).then((data)=>{console.log(data.modifiedCount)}).catch((error)=>{console.log(error)})

db.collection('students').updateOne({_id:mongodb.ObjectId("64db737a5965efc6634bfe8b")},
{$set:{name:"asmaa"}}).then((data)=>{console.log(data.modifiedCount)}).catch((error)=>{console.log(error)})


db.collection('students').updateOne({_id:mongodb.ObjectId("64db737a5965efc6634bfe8b")},
{$inc:{age:20}}).then((data)=>{console.log(data.modifiedCount)}).catch((error)=>{console.log(error)})


db.collection('students').updateMany({_id:mongodb.ObjectId("64db737a5965efc6634bfe8b")},
{$inc:{age:10}}).then((data)=>{console.log(data.modifiedCount)}).catch((error)=>{console.log(error)})


db.collection('students').deleteOne({_id:mongodb.ObjectId("64db737a5965efc6634bfe8b")},
{$inc:{age:10}}).then((data)=>{console.log(data.modifiedCount)}).catch((error)=>{console.log(error)})


})

