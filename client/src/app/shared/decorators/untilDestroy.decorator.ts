import { OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

const symbol: symbol = Symbol('unsubscribe$');

export type Instantiable = new (...args: any[]) => any;

export function untilDestroyed<T>(instance: T): <R>(source: Observable<R>) => Observable<R> {
  return function <R>(source: Observable<R>): Observable<R> {
    (instance as any)[symbol] = new Subject<void>();

    const destroy$: Subject<void> = (instance as any)[symbol];

    return source.pipe(takeUntil(destroy$));
  };
}

export function UntilDestroy<T extends Instantiable>(target: T) {
  return class extends target implements OnDestroy {
    public ngOnDestroy(): void {
      super.ngOnDestroy?.();
      super[symbol].next();
      super[symbol].complete();
    }
  };
}
