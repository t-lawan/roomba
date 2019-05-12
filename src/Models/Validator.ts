import { Robot } from "./Robot";
import { Room } from "./Room";
import { ICoordinates } from "../Interfaces/ICoordinates";

export class Validator {

    /**
     * If the string is a number then valid will stay true
     * but if one is false an error will be thrown.
     *
     * @static
     * @memberof Validator
     */
    static coordinates = (text: string[]) => {
        let valid: boolean = true;
        let invalidItems: string[] = [];

        text.forEach((coordinate) => {
            const isNumber = !isNaN(+coordinate);
            valid = isNumber ? valid : false;
            if (!isNumber) {
                invalidItems.push(coordinate);
            }
        });

        if (!valid) {
            throw new Error('Coordinate input is invalid. \n Invalid Item(s): ' + invalidItems.join(', '));
        }
    }

    /**
     *
     * If the string matches the regex then valid will stay true
     * but if one is false an error will be thrown.
     *
     * @static
     * @memberof Validator
     */
    static directions = (text: string[]): void => {

        let valid: boolean = true;
        let invalidItems: string[] = [];

        const regex: string = '^(N|E|S|W)$';
        text.forEach((direction) => {
            const isDirection = direction.match(regex)
            valid = isDirection ? valid : false;

            if (!isDirection) {
                invalidItems.push(direction);
            }
        });

        if (!valid) {
            throw new Error('Direction input is invalid. It can only contain the following characters: N, E, S, W  \n Invalid Item(s): ' + invalidItems.join(', '));
        }
    }

    /**
     * Checks if either of the robots coordinates is greater than 
     * the room dimensions
     *
     * @static
     * @memberof Validator
     */
    static robotStaysInRoom = (robot: Robot, room: Room): boolean => {
        const robotIsNotInRoom: boolean =
            robot.getPosition().x > room.getDimension().x ||
            robot.getPosition().y > room.getDimension().y;
        if (robotIsNotInRoom) {
            console.log('Your robot has left the room');
        }
        return !robotIsNotInRoom;
    }

    /**
     *
     *
     * @static
     * @memberof Validator
     */
    static isRobotOnPatchOfDirt = (robot: Robot, patchesOfDirt: ICoordinates[]): boolean => {
        let valid: boolean = false;
        const robotPosition = robot.getPosition();

        patchesOfDirt.forEach((patch) => {
            const isRobotOnPatch: boolean = (+patch.x === +robotPosition.x) && (+patch.y === +robotPosition.y);
            valid = isRobotOnPatch ? true : valid;
        });

        return valid;
    }
}