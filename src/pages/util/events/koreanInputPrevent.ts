import React from "react";

const koreanInputPrevent = (event: React.KeyboardEvent): boolean => {
  if (event.nativeEvent.isComposing) {
    event.preventDefault();
    return true;
  }
  return false;
};

export default koreanInputPrevent;
