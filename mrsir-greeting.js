//GreetingFunc
function GreetingFunc(greeting){
return `${greeting} Mr. Sir`
}

//GreetingFunc,test
import GreetingFunc from './GreetingFunc'
	it('GreetingFunc', async () => {
		expect(GreetingFunc('Good Morning').toBe('Good Morning Mr. Sir')
    })

