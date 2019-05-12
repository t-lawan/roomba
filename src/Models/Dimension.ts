import { ICoordinates } from "../Interfaces/ICoordinates";

/**
 *
 *
 * @export
 * @class Dimension
 */
export class Dimension {


    /**
     *
     *
     * @static
     * @memberof Dimension
     */
    static getCoordinate = (dimensionsString: string): ICoordinates => {
        return {
            x: +dimensionsString.split(' ')[0],
            y: +dimensionsString.split(' ')[1]
        };
    }
    // Create methods to return coordinates for type

}