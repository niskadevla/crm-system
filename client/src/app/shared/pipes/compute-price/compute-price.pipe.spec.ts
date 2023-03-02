import { ComputePricePipe } from './compute-price.pipe';

describe('ComputePricePipe', () => {
  it('create an instance', () => {
    const pipe: ComputePricePipe = new ComputePricePipe();

    expect(pipe).toBeTruthy();
  });
});
