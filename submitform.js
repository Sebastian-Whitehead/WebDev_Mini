$(document).ready(function(){
    $('#submit').click(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var ssn = $('#ssn').val();

        $.ajax({
            url: 'connect.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                ssn: ssn,
                submit: true
            },
            success: function(){
                $('form').hide(); // hide the form
                $('#submit').hide(); // hide the submit button
                $('body').append('<div>Thank you!</div>'); // display the "Thank you!" message
            }
        });
    });
});