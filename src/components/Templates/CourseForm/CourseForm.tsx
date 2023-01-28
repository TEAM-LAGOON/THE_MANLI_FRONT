import styled from '@emotion/styled';
import { Button, Container, Input, Text, TextArea, ThumbnailUpload } from '../../Atoms';
import { TourListForm } from '../../Modules';
import { CourseFormPropsType } from './CourseForm.types';

const CourseForm: React.FC<CourseFormPropsType> = ({ ...props }) => {
  return (
    <CourseFormContainer>
      <div className="title-contents">
        <Text value="경로추가" type="semibold-l title" color="var(--white)"></Text>
        <Text
          value="여행 경로를 추가해주세요"
          type="regular-m"
          color="var(--white)"
        ></Text>
      </div>
      <Container>
        <div className="input-contents">
          <Text
            value="제목*"
            type="regular-s sub-title"
            color="var(--text-300)"
            align="left"
          />
          <Input
            inputValue={props.isBookmark}
            inputName="address"
            fontSize={'2rem'}
            placeholderText="제목을 입력해주세요."
            onAction={e => props.onChangeInputValue}
          />
        </div>
        <div className="input-contents">
          <Text
            value="지역*"
            type="regular-s sub-title"
            color="var(--text-300)"
            align="left"
          />
          <select
            className="regoin-select"
            name=""
            id=""
            onChange={() => props.onChangeSelectRegion}
            value={props.isChallenge}
            placeholder="지역을 선택해주세요"
          >
            {props.selectRegionList?.map((select, idx) => (
              <option value={select} key={idx}>
                {select}
              </option>
            ))}
          </select>
        </div>
        <div className="input-contents">
          <Text
            value="예상여행일자*"
            type="regular-s sub-title"
            color="var(--text-300)"
            align="left"
          />
          <Input
            inputValue={props.challengeDate}
            type="number"
            inputName="expectedDate"
            fontSize={'2rem'}
            placeholderText="숫자를 입력해주세요"
            onAction={e => props.onChangeInputValue}
          />
        </div>
        <div className="input-contents">
          <Text
            value="썸네일"
            type="regular-s sub-title"
            color="var(--text-300)"
            align="left"
          />
          <ThumbnailUpload
            singleImage={props.singleImage}
            setSingleImage={props.setSingleImage}
          />
        </div>
        <div className="input-contents">
          <Text
            value="설명"
            type="regular-s sub-title"
            color="var(--text-300)"
            align="left"
          />
          <TextArea />
        </div>
        <div className="input-contents">
          <Text
            value="태그 등록"
            type="regular-s sub-title"
            color="var(--text-300)"
            align="left"
          />
          <Input
            inputValue={props.tag}
            inputName="expectedDate"
            fontSize={'2rem'}
            placeholderText="태그를 입력해주세요"
            onAction={e => props.onChangeInputValue}
          />
        </div>

        {props.TourListFormList?.map((tour, idx) => (
          <TourListForm
            key={idx}
            destName={tour.destName}
            destOrder={tour.destOrder}
            destId={tour.destId}
            imgList={tour.imgList}
            address={tour.address}
            detailedAddress={tour.detailedAddress}
            destDescription={tour.destDescription}
            onClickPlusBtn={props.onClickPlusTour}
            onImgPlus={tour.onImgPlus}
            onDeleteImg={tour.onDeleteImg}
            onChangeInputValue={tour.onChangeInputValue}
          />
        ))}

        <div className="submit-btn">
          <Button
            width="13.125rem"
            padding="1.25rem 5rem"
            fontSize="2rem"
            onAction={props.onSubmitCourse}
          >
            제출
          </Button>
        </div>
      </Container>
    </CourseFormContainer>
  );
};

export default CourseForm;

const CourseFormContainer = styled.div`
  & .title-contents {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 20rem;
    margin-bottom: 4rem;
    background: url('/images/bg.jpeg');
    & .title {
      margin-bottom: 1rem;
    }
  }
  & .input-contents {
    display: flow-root;
    margin-bottom: 3rem;

    & .sub-title {
      margin-bottom: 1rem;
    }
    & .regoin-select {
      padding: 1rem 2rem;
      width: 100%;
      height: 5rem;
      border-radius: 99px;
      font-size: 2rem;
      color: #767676;
    }
  }

  & .submit-btn {
    float: right;
  }
`;
