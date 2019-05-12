import { ICoordinates } from "../Interfaces/ICoordinates";
import { DirectionConst } from "../constants/DirectionConst";

/**
 * 
 *
 * @export
 * @class Robot
 */
export class Robot {
    
    /**
     *
     *
     * @private
     * @type {ICoordinates}
     * @memberof Robot
     */
    private position: ICoordinates;
    /**
     *Creates an instance of Robot.
     * @param {ICoordinates} coordinates
     * @memberof Robot
     */
    constructor(coordinates: ICoordinates) {
        this.position = coordinates;
    }
    
    /**
     * Adds or Subtracts to the X or Y coordinate
     * depending on the Direction
     * @param direction
     * @memberof Robot
     */
    move = (direction: string): void => {
        switch(direction) {
            case DirectionConst.N.id: {
                this.position.y++;
                break;
            }
            case DirectionConst.E.id: {
                this.position.x++;
                break;
            }
            case DirectionConst.S.id: {
                this.position.y--;
                break;
            }
            case DirectionConst.W.id: {
                this.position.x--;
                break;
            }
            default: {
                throw new Error(`There's an error with the directions provided`);
            }
        }
        // console.log(`The robot moved ${direction} to ${this.position.x},${this.position.y}`);
    }

    /**
     * Returns the current posoition of the robot
     *
     * @memberof Robot
     */
    getPosition = (): ICoordinates => {
        return this.position;
    }
}