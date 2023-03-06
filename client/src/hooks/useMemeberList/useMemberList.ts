import { useState, useEffect } from 'react';

const useMemberList = () => {
  const [isMemberListDisplayed, setIsMemberListDisplayed] = useState(true);

  useEffect(() => {
    window.innerWidth < 1024
      ? setIsMemberListDisplayed(false)
      : setIsMemberListDisplayed(true);
  }, []);

  const handleMemberListDisplay = () => {
    setIsMemberListDisplayed((prev) => !prev);
  };
  return { handleMemberListDisplay, isMemberListDisplayed };
};

export default useMemberList;
