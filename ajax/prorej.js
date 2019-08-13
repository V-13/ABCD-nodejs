var promise = new Promise(function(resolve, reject) {
    const x = "a";
    const y = "b";
    if (x == y) {
        resolve();
    } else {
        reject();
    }
});
promise.
then(function() {
    console.log("success");

}).
catch(function() {
    console.log("error");
});