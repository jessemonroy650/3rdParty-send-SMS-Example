/*
    Date: 2016-01-15
*/
$('#sendSMS').on('click',function() {
    console.log('#sendSMS');
    plugin.sendSMS($('#smsNumber').val(),  $('#smsMessage').val());
});


