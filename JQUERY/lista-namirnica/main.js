var ispisNamirnica = "";

$('.dodavanje').on('click', function() {
    // na klik treba da preuzmemo vrednost iz input polja
    var noviUnos = $('.namirnica').val();
    if (noviUnos != '') {
        ispisNamirnica = "<tr>";
        ispisNamirnica += "<td>"+ noviUnos + "</td>";
        ispisNamirnica += "<td><button class='btn btn-warning brisanje'>Brisanje</button></td>";
        ispisNamirnica += "</tr>";
        $('.lista-namirnica tbody').append(ispisNamirnica); // dodajemo u DOM novi unos
        $('.namirnica').val('').focus();
    } else {
        alert('Niste uneli artikal za kupovinu');
    }
    // $('.brisanje').on('click', function() {
    //     // $(this).parent().parent('tr').remove();
    //     $(this).closest('tr').remove();
    // });
});

$('tbody').on('click', '.brisanje', function() {
    $(this).closest('tr').remove();
});