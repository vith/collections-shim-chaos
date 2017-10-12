import test from 'ava'
import net from 'net'

const server = net.createServer().listen()

test(async t => {
	throw new Error()
})
