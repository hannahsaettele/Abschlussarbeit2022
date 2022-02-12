namespace Dönerladen {

    export abstract class Employee {
        task: TASK;
        isClicked: boolean;
        isBussy: boolean; //evtl ist der unnötig 
        mood: MOOD;
        workload: number;
        maximumWorkload: number;
        minimumWorkload: number;


        constructor() {
//
        }
        move(_timeslice: number): void {

        }
        draw(): void {

        }
        prepareFood() {

        }
        cutFood() {

        }
        stockUp() {
            
        }
    }
}