// import json server
const jsonserver=require('json-server')

// import cors (Cross origine resource sharing---connect with front-end with node server)
const cors=require('cors')



// create json server
const server=jsonserver.create()

// convert json type data to js data before request resolve
// to control server request- use middleware
 const middleware=jsonserver.defaults()

// create router
const router=jsonserver.router('db.json')

// apply middleware to server
server.use(middleware)
// apply cors
server.use(cors())
// apply router 
server.use(router)

// to run, set port
const PORT=5000
// to run this port
server.listen(PORT,()=>{
    console.log(`___Json Server Started At Port : ${PORT}__`);
})