let promise = new Promise(function(resolve, reject) {
setTimeout(function() {
        resolve(`done!`);
        reject(`failed!`);
    }, 1500);
});

promise.then(function(value) {
    console.log(value);
}, function(error) {
    console.log(error);
});

    // shows seconds if less than or, then REJECTS!
function waitASecond(seconds) {
    return new Promise(function(resolve, reject) {
        if (seconds > 2) {
            reject(`REJECT!`);
        } else {
            setTimeout(function() {
                seconds++;
                resolve(seconds);
            }, 1000);
        };
    });
}

waitASecond(2)
    .then(waitASecond)
    .then(function(seconds) {
        console.log(seconds);
    })
    .catch(function(error) {
        console.log(error);
    });


// Promise.all requires all promises in the array to resolve. No values passed successfully if 1 Promise fails.
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('resolved.');
        }, 1000);
    });

    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('rejected.');
        }, 2000);
    });

    Promise.all([promise1, promise2])
        .then(function(success) {
            console.log(success);
        });
        .catch(function(error) {
            console.log(error);
        });

        // Promise.race resovles with fastest response value
            let promise1 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve('resolved.');
                }, 1000);
            });

            let promise2 = new Promise(function(resolve, reject) {
                setTimeout(function() {
                    reject('rejected.');
                }, 2000);
            });

            Promise.race([promise1, promise2])
                .then(function(success) {
                    console.log(success);
                });
                .catch(function(error) {
                    console.log(error);
                });
