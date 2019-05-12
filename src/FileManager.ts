import * as fs from 'fs';
import { ICoordinates } from './Interfaces/ICoordinates';
import { Dimension } from './Models/Dimension';
import { Validator } from './Models/Validator';

/**
 *
 *
 * @export
 * @class FileManager
 */
export class FileManager {

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getContents = (url: string): string => {
        return fs.readFileSync(url).toString();
    }

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getRoomDimensions = (text: string): ICoordinates => {
        return Dimension.getCoordinate(text.split('\n')[0]);
    }

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getRobotCoordinates = (text: string): ICoordinates => {
        return Dimension.getCoordinate(text.split('\n')[1]);
    }

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getPatchesOfDirtCoordinates = (text: string): ICoordinates[] => {
        const lengthOfArray: number = text.split('\n').length;
        const coordinates: ICoordinates[] = [];
        for (let i = 2; i < (lengthOfArray - 1); i++) {
            coordinates.push(Dimension.getCoordinate(text.split('\n')[i]))
        }
        return coordinates;
    }

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getDirections = (text: string): string[] => {
        const textArray =  text.split('\n');
        const directions = textArray[textArray.length - 1].split('');
        Validator.directions(directions);
        return directions;
    }



}