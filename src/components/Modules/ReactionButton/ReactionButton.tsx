import styled from '@emotion/styled';
import { Button, Icon } from '../../Atoms';
import { ReactionButtonPropsType } from './ReactionButton.types';

const ReactionButton: React.FC<ReactionButtonPropsType> = ({ ...props }) => {
  const { reaction, setReaction } = props;

  const btnProps = {
    bg: 'none',
    border: '1px solid #fff',
  };
  const reactionHandler = (category: 'like' | 'unlike' | 'favorite') => {
    if (reaction.checked[category]) {
      setReaction({
        ...reaction,
        value: { ...reaction.value, [category]: reaction.value[category] + 1 },
      });
    }
  };

  return (
    <Container>
      <Button {...btnProps} onAction={() => reactionHandler('like')}>
        <Icon name={'thumb_up_outline'} className="thumb_up_outline" />
        <span>{reaction.value.like}</span>
      </Button>
      <Button
        className="middle-btn"
        {...btnProps}
        onAction={() => reactionHandler('unlike')}
      >
        <Icon name={'thumb_down_outline'} className="thumb_down_outline" />
        <span>{reaction.value.unlike}</span>
      </Button>
      <Button {...btnProps} onAction={() => reactionHandler('favorite')}>
        <Icon name={'heart_outline'} className="heart_outline" />
        <span>{reaction.value.favorite}</span>
      </Button>
    </Container>
  );
};

export default ReactionButton;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  & .middle-btn {
    margin: 0 1rem;
    color: #fff;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    stroke: var(--white);
  }
  button {
    width: 9.625rem;
    height: 4.625rem;
    span {
      font-size: 1.75rem;
      margin-left: 1.25rem;
    }
  }
`;
