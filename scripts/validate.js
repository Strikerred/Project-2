$(function (){$('form').validate({
    rules: {
        firstname: {
            required: true,
            minlength: 2
        },
        lastname: {
            required: true,
            minlenght: 2
        },
        email: {
            required: true,
            minlenght: 5
        },
        type: {
            required: true
        },
        message: {
            required: true
        }

    }
});
})