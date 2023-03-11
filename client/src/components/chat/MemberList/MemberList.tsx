import { useMemberListContext } from '../../../Context/hooks';
import User from '../User/User';
import { MemberListProps } from './types';
import styles from './memberlist.module.scss';

const { wrapper } = styles;

const MemberList: React.FC<MemberListProps> = ({ isMemberListDisplayed }) => {
  const { memberList } = useMemberListContext();

  return (
    <>
      {isMemberListDisplayed && (
        <div className={wrapper}>
          {memberList &&
            memberList.map((member) => {
              return <User key={member.id} username={member.username} />;
            })}
        </div>
      )}
    </>
  );
};

export default MemberList;
