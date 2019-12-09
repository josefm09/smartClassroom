$(document).ready(function() {
    
    $.ajax({
        url: "http://localhost/api/usuarios/count"
    }).then(function(data) {
        $('#clientes').prepend(data[0].no_of_rows);
    });

    $.ajax({
        url: "http://localhost/api/xjoin?_join=u.usuarios,_j,r.registros&_on1=(u.reg_hash,eq,r.reg_hash)&_fields=r.aula,r.reg_hash,u.nombre,r.fecha,r.estatus"
    }).then(function(data) {
        $.each(data, function(i, d) {
            var estado = "";
            var fecha = new Date(d.r_fecha);
            if (d.r_estatus == 1){
                estado = "Entró: "
            }else{
                estado = "Salió: "
            }
            $('#dataTable tbody').append('<tr><td>' + d.r_aula + '</td><td>' + d.r_reg_hash + '</td><td>' + d.u_nombre + '</td><td>' + estado + fecha.toLocaleString('en-GB', { timeZone: 'UTC' }) + '</td></tr>' );
        });
    });


});