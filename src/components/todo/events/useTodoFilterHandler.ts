import { FilterType } from "@/domain/todo/FilterType";
import { setFilter } from "@/domain/todo/filterSlice";
import styles from "@/components/todo/styles/TodoPage.module.css";
import React, { useCallback } from "react";
import { useCustomDispatch } from "@/redux/hooks";

const useTodoFilterHandler = (
  allTagRef: React.RefObject<HTMLAnchorElement>,
  activeTagRef: React.RefObject<HTMLAnchorElement>,
  completedTagRef: React.RefObject<HTMLAnchorElement>
) => {
  const dispatch = useCustomDispatch();

  const handleFilterChange = useCallback((filter: FilterType) => {
    dispatch(setFilter(filter));
    allTagRef.current!.classList.remove(styles.selected);
    activeTagRef.current!.classList.remove(styles.selected);
    completedTagRef.current!.classList.remove(styles.selected);
    switch (filter) {
      case "all":
        allTagRef.current!.classList.add(styles.selected);
        break;
      case "active":
        activeTagRef.current!.classList.add(styles.selected);
        break;
      case "completed":
        completedTagRef.current!.classList.add(styles.selected);
        break;
      default:
        break;
    }
  }, [dispatch, allTagRef, activeTagRef, completedTagRef]);

  return { handleFilterChange };
};

export default useTodoFilterHandler;
