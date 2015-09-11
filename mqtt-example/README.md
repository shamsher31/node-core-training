### What is MQTT?

MQTT (formerly Message Queue Telemetry Transport) is a publish-subscribe based “light weight” messaging protocol for use on top of the TCP/IP protocol. It is designed for connections with remote locations where a “small code footprint” is required and/or network bandwidth is limited. The Publish-Subscribe messaging pattern requires a message broker. The broker is responsible for distributing messages to interested clients based on the topic of a message.<br>

The specification does not specify the meaning of “small code foot print” or the meaning of “limited network bandwidth”. Thus, the protocol’s availability for use depends on the context. In 2013 IBM submitted MQTT v3.1 to the OASIS specification body with a charter that ensured only minor changes to the specification could be accepted. MQTT-SN is a variation of the main protocol aimed at embedded devices on non-TCP/IP networks, such as ZigBee.<br>

Historically, the ‘MQ’ in ‘MQTT’ came from IBM’s MQ message queuing product line. However, queuing per se is not required to be supported as a standard feature in all situations.<br>

### MQTT Use

![alt tag](http://i2.wp.com/thejackalofjavascript.com/wp-content/uploads/2014/10/mqtt_arch.png)