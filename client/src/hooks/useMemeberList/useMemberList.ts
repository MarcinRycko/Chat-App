import { useState, useEffect, useCallback } from 'react';

const useMemberList = () => {
  const [isMemberListDisplayed, setIsMemberListDisplayed] = useState(true);

  useEffect(() => {
    window.innerWidth < 1024
      ? setIsMemberListDisplayed(false)
      : setIsMemberListDisplayed(true);
  }, []);

  const handleMemberListDisplay = useCallback(() => {
    setIsMemberListDisplayed((prev) => !prev);
  }, []);
  return { handleMemberListDisplay, isMemberListDisplayed };
};

export default useMemberList;
