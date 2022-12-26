import styled from '@emotion/styled';
import { Icon } from '../../Atoms';
import Divider from '../../Atoms/Divider';
import BasicCard from '../BasicCard';
import { ChallengeListData, ChallengeListPropsType } from './ChallengeList.types';

const ChallengeList: React.FC<ChallengeListPropsType> = ({ ...props }) => {
  const { challengeData, setChallengeData } = props;

  return (
    <Container>
      {challengeData.map((tourData: ChallengeListData, i: number) => (
        <>
          {tourData.step ? (
            <ClearContainer key={i}>
              <div className="challenge-icon">
                <Icon name="flag" className="flag" />
                <span>{tourData.step}</span>
              </div>
              <BasicCard tourData={tourData} />
            </ClearContainer>
          ) : tourData.isChallenge ? (
            <ChallengeContainer key={i}>
              <div className="challenge-icon">
                <Icon name="fire" className="fire" />
                <span>도전중</span>
              </div>
              <BasicCard tourData={tourData} />
            </ChallengeContainer>
          ) : (
            <DisableContainer key={i}>
              <span>이전 관광지를 먼저 인증해주세요.</span>
              <BasicCard tourData={{ ...tourData, disabled: true }} />
            </DisableContainer>
          )}
          {tourData.range && challengeData.length !== i + 1 && (
            <DividerContainer>
              <Divider text={`${tourData.range} km`} />
            </DividerContainer>
          )}
        </>
      ))}
    </Container>
  );
};

export default ChallengeList;

const Container = styled.div`
  width: 41rem;
  font-size: 1.75rem;
  & .challenge-icon {
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-bottom: 1rem;
  }
  svg {
    margin-right: 1.25rem;
  }
`;

const ClearContainer = styled.div`
  color: var(--primary-500);
`;

const ChallengeContainer = styled.div`
  color: var(--secondary-500);
`;

const DisableContainer = styled.div`
  text-align: center;
  color: var(--error-500);
  span {
    margin-bottom: 1rem;
  }
`;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41rem;
  height: 11.625rem;
  padding: 2rem 0;
`;
