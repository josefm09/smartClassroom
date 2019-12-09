$(document).ready(function() {
    
    $.ajax({
        url: "http://34.94.33.4/api/usuarios/count"
    }).then(function(data) {
        $('#clientes').prepend(data[0].no_of_rows);
    });

    $.ajax({
        url: "http://34.94.33.4/api/xjoin?_join=u.usuarios,_j,r.registros&_on1=(u.reg_hash,eq,r.reg_hash)&_fields=r.aula,r.reg_hash,u.nombre,r.fecha,r.estatus&_sort=-r.fecha"
    }).then(function(data) {
        $.each(data, function(i, d) {
            var estado = "";
            var fecha = new Date(d.r_fecha);
            if (d.r_estatus == 1){
                estado = "Entró: "
            }else{
                estado = "Salió: "
            }
            $('#dataTable tbody').append('<tr><td>' + d.r_aula + '</td><td>' + d.r_reg_hash + '</td><td>' + d.u_nombre + '</td><td>' + estado + fecha.toLocaleString('en-GB', { timeZone: 'GMT-7' }) + '</td></tr>' );
        });
    });

    $('#agregarMaestro').click(function(){
        $('#modal').modal('show'); 
    });

    $('#agregar').click(function(){
        var nombre = $('#txtNombre').val();
        var area = $('#txtArea').val();
        var hash = $('#txtHash').val();
        $.ajax({
            type: "POST",
            url: "http://34.94.33.4/api/usuarios",
            data: { 
                    "nombre" : nombre,
                    "area" : area,
                    "reg_hash" : hash      
            },
            success: alert("Maestro agregado"),
            dataType: "json"
        });
        $('#modal').modal('hide');
    });

    $('#informacion').click(function(){
        $('#modal2').modal('show');
        $.ajax({
            url: "http://34.94.33.4/api/usuarios"
        }).then(function(data) {
            $.each(data, function(i, d) {
                var fecha = new Date(d.fecha_reg);
                $('#dataMaestro tbody').append('<tr><td>' + d.nombre + '</td><td>' + d.area + '</td><td>' + d.reg_hash + '</td><td>' + fecha.toLocaleString('en-GB', { timeZone: 'GMT-7' }) + '</td></tr>' );
            });
        }); 
    });
    
});