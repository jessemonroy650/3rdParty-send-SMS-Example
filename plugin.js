/*
    Date: 2016-01-15
*/

var plugin = {
    self : {},
    test : function () {
        $('#isavailable').html(plugin.isAvailable('sms'));
        $('#resultPlugin').html('');
    },
    sendSMS : function (number, message) {
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        //var success = function () { $('#resultPlugin').html('Message sent successfully'); };
        //var error = function (e) { $('#resultPlugin').html('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    },
    isAvailable : function (type) {
        return (type in window) ?  true : false;
    }
};
