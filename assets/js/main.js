$(function() {
    
    write_stat();
    logOut();

    function write_stat() {
        
    }

    function logOut() {
        $('.logOut').on('click', function(e) {
            e.preventDefault();

            Swal.fire({
                icon: 'question',
                title: 'Apakah anda yakin?',
                text: 'Anda akan keluar dari akun ini.',
                showCancelButton: true,
                confirmButtonText: 'Keluar',
                cancelButtonText: 'Batal',
                confirmButtonColor: 'red',
                allowEscapeKey: false,
                allowOutsideClick: false
            });
        })
    }

    

});

