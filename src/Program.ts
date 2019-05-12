import { Room } from "./Models/Room";
import { Robot } from "./Models/Robot";
import { ICoordinates } from "./Interfaces/ICoordinates";
import { Validator } from "./Models/Validator";

/**
 *
 *
 * @export
 * @class Program
 */
export class Program {

    /**
     *Creates an instance of Program.
     * @param {Room} room
     * @param {Robot} robot
     * @param {ICoordinates[]} patchesOfDirt
     * @memberof Program
     */
    constructor(private room: Room, private robot: Robot, private patchesOfDirt: ICoordinates[]) {}

    /**
     *
     *
     * @memberof Program
     */
    run = (directions: string[]): void => {
        let numberOfDirtPatchesCleaned: number = 0;
        let index = 0;
        const lengthOfDirections = directions.length;

        while((index < lengthOfDirections) && (Validator.robotStaysInRoom(this.robot, this.room))) {
            this.robot.move(directions[index]);
            if(Validator.isRobotOnPatchOfDirt(this.robot, this.patchesOfDirt)) {
                numberOfDirtPatchesCleaned = numberOfDirtPatchesCleaned + 1;
            }
            index++;
        }

        this.logFinalResult(numberOfDirtPatchesCleaned)
    }

    /**
     *
     *
     * @private
     * @memberof Program
     */
    private logFinalResult = (numberOfDirtPatchesCleaned: number): void => {
        console.log(`Your robot ended at ${this.robot.getPosition().x},${this.robot.getPosition().y}`)
        console.log(`Your robot picked up ${numberOfDirtPatchesCleaned} patches of dirt`);
    }





}