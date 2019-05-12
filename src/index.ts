#!/usr/bin/env node
import { FileManager } from './FileManager';
import { Room } from './Models/Room';
import { Dimension } from './Models/Dimension';
import { Robot } from './Models/Robot';
import { ICoordinates } from './Interfaces/ICoordinates';
import { Program } from './Program';

try {
    const inputFile = FileManager.getContents('input.txt');

    const room: Room = new Room(
        FileManager.getRoomDimensions(inputFile)
    );
    const robot: Robot = new Robot(
        FileManager.getRobotCoordinates(inputFile)
    );
    const patchesOfDirt: ICoordinates[] = FileManager.getPatchesOfDirtCoordinates(inputFile);
    const directions = FileManager.getDirections(inputFile);
    
    const program = new Program(room, robot, patchesOfDirt);
    program.run(directions);
} catch (error) {
    console.log(error);
}