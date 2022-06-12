const Demo = function () {
    this.calledCount = 0;
};

Demo.prototype.getMessage = function () {
    var message = "Not Define.";
    switch (this.calledCount) {
        case 0:
            message = "Hello GitHub Actions!";
            break;
    
        default:
            break;
    }
    return message;
}

exports.Demo = Demo;

