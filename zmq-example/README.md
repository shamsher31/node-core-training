### Waht is ØMQ

ØMQ stands for Zero Message Queue. ØMQ provides high-scalability and low-latency messaging.

### Advantages of ØMQ

It’s fair to ask why we’d use ØMQ for messaging, as opposed to writing everything ourselves. The answer is that the Node community believes in the Unix philosophy: “do one thing well.” The committers keep the Node core small and tight, leaving everything else to the broader base of developers who publish their modules through npm.

Although the Node.js core has great, low-level support for binding and connecting to sockets, it leaves out higher-level messaging patterns. ØMQ’s purpose is to expose high-level messaging patterns and take care of many low-level networking concerns for you. Take the following examples:

* ØMQ endpoints automatically reconnect if they become unhitched for any reason—like if there’s a hiccup in 
  the network or if a process restarts.
* ØMQ delivers only whole messages, so you don’t have to create buffers
  to deal with chunked data.
* ØMQ’s low-overhead protocol takes care of many routing details, like sending responses back to the correct
  clients.

With ØMQ, like with any good library, your application can focus on what
really matters.
