function resolvedPromise(){
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Hello! This is the resolvedPromise")
            }, 500)
    })
} 

function rejectedPromise(){
    return new Promise((reject) => {
            setTimeout(() => {
                try{
                    reject("Hi! I am rejectedPromise")
                } catch (e){
                    console.error(e)
                }
            }, 500)
    })
}

resolvedPromise()
rejectedPromise()

async function myPromises(){
    const resolve = await resolvedPromise()
    console.log(resolve)
    
    const rejected = await rejectedPromise()
    console.log(rejected)
}

myPromises()
