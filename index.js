// create a tcp modbus client
const Modbus = require('jsmodbus')
const net = require('net')
const socket = new net.Socket()
const client = new Modbus.client.TCP(socket, 1)

const options = {
'host' : "127.0.0.1",
'port' : 502
}
//192.168.0.1

socket.on('connect', function () {

    
    const pollingInterval = 5000; // Adjust the interval as needed
    setInterval(readHoldingRegister, pollingInterval);
    
    setInterval(writeHoldingRegister, pollingInterval);

    // make some calls
    
    // client.readCoils(0, 13).then(function (resp) {
    
    // // resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
    // // the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>
    
    // console.log(resp);
    
    // }, console.error);
    
    });
    
      
    

    const readHoldingRegister = async () => {
        try {
          console.log('inside the read holding');
            client.readHoldingRegisters(0, 20)
            .then(function (resp) {
              console.log(JSON.stringify(resp.response._body._valuesAsBuffer));
              //socket.end()
            }).catch(function () {
              console.error(require('util').inspect(arguments, {
                depth: null
              }))
              //socket.end()
            })
              
        } catch (error) {
          console.error("Error reading holding register:", error);
        }
      };   
    
      const writeHoldingRegister = async () => {
        try {
          console.log('inside the write holding');
          
            client.writeSingleRegister(0, 201)
            .then(function (resp) {
              console.log(JSON.stringify(resp));
              //socket.end()
            }).catch(function () {
              console.error(require('util').inspect(arguments, {
                depth: null
              }))
              //socket.end()
            })
              
        } catch (error) {
          console.error("Error reading holding register:", error);
        }
      };   
    
    
socket.connect(options)