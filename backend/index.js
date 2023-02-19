const express=require("express");
const app=express();
const server = require("http").Server(app);
const cors=require("cors")
const io=require("socket.io")(server ,{
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
});
app.use(cors());
app.get("/",(req,res)=>{
    res.send("running");
})

//socket code
io.on("connection", (socket) => {
	socket.emit("me", socket.id);
     console.log(socket.id)
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
	socket.on("send_message",(data)=>{
		console.log(data)
		socket.to(data.otherUser).emit("recieve_message",data)
	})
	socket.on("code-change",(data)=>{
		console.log(data)
		socket.to(data.otherUser).emit("code-change",data.code)
	})
	socket.on('canvas-data',(data)=>{
		
		socket.to(data.otherUser).emit("canvas-data",data)
	})
});
server.listen(3001,()=>{
    console.log("server started");
})  

