export class CreateArray {
   create(length:number): number[] {
    let arr = [];

    for (let i = 1; i <= length; i++) {
      arr.push(i);
    }

    return arr;
  }
}
