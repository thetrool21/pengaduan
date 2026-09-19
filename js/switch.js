
    const formInputs = document.querySelectorAll(
        '.form-group input, .textarea textarea'
    );

    formInputs.forEach((input, index) => {
        input.addEventListener('keydown', function (event) {

            // ENTER pada input biasa
            if (
                event.key === 'Enter' &&
                input.tagName === 'INPUT'
            ) {
                event.preventDefault();

                const nextInput = formInputs[index + 1];

                if (nextInput) {
                    nextInput.focus();
                } else {
                    document.querySelector('.btn-simpan').focus();
                }
            }

            // CTRL + ENTER pada textarea
            if (
                event.key === 'Enter' &&
                event.ctrlKey &&
                input.tagName === 'TEXTAREA'
            ) {
                event.preventDefault();

                document.querySelector('.btn-simpan').focus();
            }
        });
    });
