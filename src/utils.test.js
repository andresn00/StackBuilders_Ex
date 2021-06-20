import {carCanGoOut} from "./utils";

test('car with plate ending in 1 can go out on tuesday at any hour', () => {
    const canGoOut = carCanGoOut('PBC-5631', '29-06-2021', '07:45 am')
    expect(canGoOut).toBe(true);
});

test('car with plate ending in 1 can not go out on monday at 4:30 pm', () => {
    const canGoOut = carCanGoOut('PBC-5631', '28-06-2021', '04:30 pm')
    expect(canGoOut).toBe(false);
});

