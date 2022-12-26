export interface ControlBarPropsType {
  controlBarValue: ControlBarState;
  setControlBarValue: Function;
}

export interface ControlBarState {
  selectRegionList: string[];
  selectedRegionValue: string;
  selectSortList: string[];
  selectedSortValue: string;
}
