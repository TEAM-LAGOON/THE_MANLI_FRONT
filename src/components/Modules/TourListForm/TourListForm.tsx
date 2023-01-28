import { TourListFormPropsType } from './TourListForm.types';
import styled from '@emotion/styled';
import { Button, Icon, Input, MulitPhotoUpload, Text, TextArea } from '../../Atoms';

const TourListForm: React.FC<TourListFormPropsType> = ({ ...props }) => {
  return (
    <TourListFormContainer>
      <Text
        value={`관광지 ${props.destOrder}`}
        type="regular-m"
        color="var(--secondary-500)"
        align="left"
      />
      <div className="upload-contents">
        <Text
          value="사진등록"
          type="regular-s title"
          color="var(--text-300)"
          align="left"
        />
        <MulitPhotoUpload
          imgList={props.imgList}
          onImgPlus={props.onImgPlus}
          onDeleteImg={props.onDeleteImg}
        />
      </div>
      <div className="input-content">
        <Text
          value="관광지 명*"
          type="regular-s title"
          color="var(--text-300)"
          align="left"
        />
        <Input
          inputValue={props.destName}
          inputName="title"
          fontSize={'2rem'}
          placeholderText="관광지 명을 입력해주세요."
          onAction={e => props.onChangeInputValue}
        />
      </div>
      <div className="input-content">
        <Text value="주소*" type="regular-s title" color="var(--text-300)" align="left" />
        <Input
          inputValue={props.address}
          inputName="address"
          fontSize={'2rem'}
          placeholderText="주소를 입력해주세요."
          onClick={() => console.log('daum postcode open api connect')}
          onAction={e => props.onChangeInputValue}
        />
      </div>
      <div className="input-content">
        <Text
          value="상세주소"
          type="regular-s title"
          color="var(--text-300)"
          align="left"
        />
        <Input
          inputValue={props.detailedAddress}
          inputName="detailAddress"
          fontSize={'2rem'}
          placeholderText="상세주소를 입력해주세요."
          onAction={e => props.onChangeInputValue}
        />
      </div>
      <div className="input-content description">
        <Text value="설명" type="regular-s title" color="var(--text-300)" align="left" />
        <TextArea
          value={props.destDescription}
          onChangeEvent={props.onChangeTextAreaValue}
        ></TextArea>
      </div>
      {props.destOrder < 8 && (
        <div className="plus-btn">
          <Button bg="none" onAction={props.onClickPlusBtn}>
            <Icon className="plus-svg" name="plus" />
            <Text value="경로 추가" type="semibold-s" color="var(--secondary-500)" />
          </Button>
        </div>
      )}
    </TourListFormContainer>
  );
};

export default TourListForm;

const TourListFormContainer = styled.div`
  & .upload-contents {
    margin: 2rem 0 3rem 0;
    text-align: left;
  }
  & .input-content {
    margin-bottom: 3rem;
    & .title {
      margin-bottom: 1rem;
    }
  }
  & .plus-btn {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.5rem;
    & .plus-svg {
      path {
        stroke: var(--secondary-500);
      }
    }
  }
`;
