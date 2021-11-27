import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
    name: 'ordenCaduca'
})


export class OrdenCaducaPipe implements PipeTransform {

    transform(value: any, args?: string) {
        let fechaColor = this.getColorFechaResta(value);
        if (args == 'color') {
            return fechaColor;
        }
        return value;
    }

    getColorFechaResta(value: any) {
        let fechaDeLaOrden: Date = new Date(Date.parse(value));
        let fechaActual: Date = new Date(Date.now());

        let totalMes = moment(moment.parseZone(fechaDeLaOrden)).diff(moment.parseZone(fechaActual), 'months');
        switch (totalMes) {
            case 0:
                return 'btn btn-danger';
            case 1:
                return 'btn btn-warning';
            case 2:
                return 'btn btn-primary';
        }
        return 'btn btn-light';
    }

}