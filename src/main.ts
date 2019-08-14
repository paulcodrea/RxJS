import { of, interval, merge } from 'rxjs';
import { map, mapTo, mergeMapTo } from 'rxjs/operators';


// TASK 1 DAY 4

// of(1,2,3,4,5,6).subscribe(item => console.log(item));

// TASK 2 DAY 4

// interval(2000).pipe(
//   map((item, ids) => {
//     console.log('Item index is ${idx}'); return item * 10;
//   })
// ).subscribe(processedData => console.log(processedData));

// TASK 3 DAY 4

// range(0, 5).pipe(
//   map(item => console.log(item) + 10), map(item => 'Current value' + item),
//   map(item => {
//     if (Math.random() < 0.1)
//       throw new Error('Random error occured');
//     return item;
//   })
// ).subscribe(
//   (next) => {
//     console.log(next);
//   },
//    (err) => {
//     console.log('Error happend, not god man' + err);
//   },
//   () => {
//     console.log('This observalbe has completed');
//   }
// )

// TASK MERGE DAY 4

// const first = interval(2500);
// const second = interval(2000);
// const third = interval(1500);
// const fourth = interval(1000);

// const example = merge (
//   first.pipe(mapTo('First after 2.5s')),
//   second.pipe(mapTo('Second after 2s')),
//   third.pipe(mapTo('Third after 1.5s')),
//   fourth.pipe(mapTo('Fourth after 1s'))
// )

// const subscribe = example.subscribe(val => console.log(val));