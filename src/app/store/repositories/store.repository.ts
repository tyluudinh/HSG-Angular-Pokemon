import {Injectable} from '@angular/core';
import {createSelector, select, Store} from '@ngrx/store';
import {State} from '../reducers';

@Injectable()
export class StoreRepository {
  constructor(
    private store: Store<State>
  ) {}
  getStateByProp(keyRoot: string, prop: string): any {
    return this.store.pipe(
      select(this.createSelectorByKeyRoot(keyRoot), {name: prop})
    );
  }
  dispatch(action): void {
    this.store.dispatch(action);
  }
  private createSelectorByKeyRoot(keyRoot: string): any {
    return createSelector(
      (state: State) => state[keyRoot],
      (value, props) => value[props.name]
    );
  }
}
