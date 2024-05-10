{
    // Abstruction type-1. interface, 2. abstruct

    //interface
    interface Vehicale{
        startEngine():void;
        stopEngine():void;
        moveEngine():void;
    }

    class Car1 implements Vehicale{
        startEngine(): void {
            console.log(`your engine is starting`);
        }
        stopEngine(): void {
            console.log(`your engine is stop`);
        }
        moveEngine(): void {
            console.log('your engine is moving!');
        }
    }

    const engine = new Car1();
    engine.moveEngine();

    // Abstruction 
   abstract class Car2 {
       abstract startEngine(): void ;
        abstract   stopEngine(): void;
        abstract  moveEngine(): void ;
    }

    class Car3  extends Car2{
        startEngine(): void {
            console.log(`your car engine is starting`)
        }
        stopEngine(): void {
            console.log(`your car engine is stoping`)
        }
        moveEngine(): void {
            console.log(`your engnine is moving fast!`)
        }
    }
    // const engine1 = new Car2();
  
}