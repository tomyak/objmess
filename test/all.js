exports['test simple message'] = function(assert, done) {
  const objmsg = require("../index.js")
  var objs = [{"name":"Tom"},{"name":"Unknown","800":"1-800-555-1212"}]
  var message = objmsg.replaceAll("Hello, {name} call {800}",objs)
  assert.equal(message,"Hello, Tom call 1-800-555-1212","Message successfully created")
  done()
}

exports['test case sensitivity'] = function(assert, done) {
  const objmsg = require("../index.js")
  var objs = [{"Name":"Tom"},{"name":"Unknown","800":"1-800-555-1212"}]
  var message = objmsg.replaceAll("Hello, {name} call {800}",objs)
  assert.equal(message,"Hello, Unknown call 1-800-555-1212","Message successfully created")
  done()
}

exports['test case insensitivity'] = function(assert, done) {
  const objmsg = require("../index.js")
  var objs = [{"Name":"Tom"},{"name":"Unknown","800":"1-800-555-1212"}]
  var message = objmsg.replaceAll("Hello, {name} call {800}",objs,true)
  assert.equal(message,"Hello, Tom call 1-800-555-1212","Message successfully created")
  done()
}

exports['test multiple instances message'] = function(assert, done) {
  const objmsg = require("../index.js")
  var objs = [{"name":"Tom"},{"name":"Unknown","800":"1-800-555-1212"}]
  var message = objmsg.replaceAll("Hello, {name} call {800} and someone can help {name}",objs)
  assert.equal(message,"Hello, Tom call 1-800-555-1212 and someone can help Tom","Message successfully created")
  done()
}

if (module == require.main) require('test').run(exports)
