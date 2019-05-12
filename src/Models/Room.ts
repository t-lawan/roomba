import { ICoordinates } from "../Interfaces/ICoordinates";

/**
 * 
 *
 * @export
 * @class Room
 */
export class Room {

    /**
     *
     *
     * @private
     * @type {ICoordinates}
     * @memberof Room
     */
    private dimension: ICoordinates;
    /**
     *Creates an instance of Room.
     * @param {ICoordinates} dimension
     * @param {ICoordinates[]} [dirtPatchesCoordinates=[]]
     * @memberof Room
     */
    constructor(dimension: ICoordinates) {
        this.dimension = dimension;
    }

    /**
     *
     *
     * @memberof Room
     */
    getDimension = (): ICoordinates => {
        return this.dimension;
    }


}