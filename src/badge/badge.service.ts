import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';



@Injectable()
export class BadgeService {
    createBadge(logo:string, color:string, name:string): string {
        
        switch(logo) {
            case 'likelion':
                var logoDir = `./src/badge/assets/likelion.txt`;
                break;
            case 'bada':
                var logoDir = `./src/badge/assets/bada.txt`;
                break;
            case 'gdsc':
                var logoDir = `./src/badge/assets/gdsc.txt`;
                break;
            case 'brightics':
                var logoDir = `./src/badge/assets/brightics.txt`;
                break;
            // case 'likelion':
            //     const logoDir = `./src/badge/assets/likelion.txt`;
            //     break;
        }


        var logo = readFileSync(join(process.cwd(), logoDir), 'utf8').toString();
        
        const arr = Array.from(name);
        var textBoxWidth = 5 + 0 + 5
        var textLength = 0;
        
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element === element.toUpperCase()) {
                textBoxWidth = textBoxWidth + 7.5;
                textLength = textLength + 75;
            } else if (element === element.toLowerCase()) {
                textBoxWidth = textBoxWidth + 6.5;
                textLength = textLength + 65;
            }
        }

        const iconBoxWidth = 19;
        // const textBoxWidth = 5 + (name.length * 6.2) + 5
        const width = iconBoxWidth + textBoxWidth;
        const x = (iconBoxWidth * 10) + ((textBoxWidth * 10) / 2);

        return `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="20" role="img" aria-label="${name}">
                <title>${name}</title>
                <g shape-rendering="crispEdges">
                    <rect width="0" height="20" fill="#555"/>
                    <rect x="0" width="${width}" height="20" fill="#${color}"/>
                </g>
                <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
                    <image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,${logo}"/>
                    <text x="${x}" y="140" transform="scale(.1)" fill="#fff" textLength="${textLength}">${name}</text>
                </g>
            </svg>
        `;
    }
}