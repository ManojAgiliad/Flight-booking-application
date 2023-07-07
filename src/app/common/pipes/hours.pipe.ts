import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'hours'})

export class HoursPipe implements PipeTransform {
    transform(value: any, sourceTime: string, destinationTime: string) {
        const diffInMs = Date.parse(destinationTime) - Date.parse(sourceTime);
        let diffInHours = diffInMs / 1000 / 60 / 60;

        diffInHours = Number(diffInHours.toFixed(2));

        if(diffInHours.toString().includes(".")) {
            return diffInHours.toString().replace(".", "h ").concat("m")
        } else {
            return diffInHours.toString().concat("h")
        }
        
    }
}