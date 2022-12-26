import styled from '@emotion/styled';
import { Icon, Select } from '../../Atoms';
import { SelectPropsType } from '../../Atoms/Select';
import { ControlBarPropsType, ControlBarState } from './ControlBar.types';

const ControlBar: React.FC<ControlBarPropsType> = ({ ...props }) => {
  const { controlBarValue, setControlBarValue } = props;
  const {
    selectRegionList,
    selectedRegionValue,
    selectSortList,
    selectedSortValue,
  }: ControlBarState = controlBarValue;

  const selectRegionProps: SelectPropsType = {
    selectList: selectRegionList,
    setSelectedValue: (value: string) =>
      setControlBarValue({ ...controlBarValue, selectedRegionValue: value }),
    iconName: 'caret_down_outline',
  };

  const selectSortProps: SelectPropsType = {
    selectList: selectSortList,
    setSelectedValue: (value: string) =>
      setControlBarValue({ ...controlBarValue, selectedSortValue: value }),
    iconName: 'swap',
  };

  return (
    <Container>
      <Select {...selectRegionProps} />
      <Select {...selectSortProps} />
    </Container>
  );
};

export default ControlBar;

const Container = styled.div`
  display: flex;
`;
