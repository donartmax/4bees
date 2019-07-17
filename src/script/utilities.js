function debug(text){
    if(localStorage.getItem("development") === "true"){
        console.log(text);
    }
}

module.exports = {
    debug
}