import React, { useState } from "react";
import { FilterType, TodoItemFilter } from "@/domain/todo/FilterType";
import { UserIdProps } from "@/components/common/props/UserIdProps";
import TodoCountMolecule from "@/components/molecules/todo/TodoCountMolecule";
import { useCustomDispatch } from "@/redux/hooks";
import { setFilter } from "@/domain/todo/filterSlice";
import styled from "@emotion/styled";

const Container = styled.div`
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;

    &:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
        0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2),
        0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
`;

const ListWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
`;

const StyledLi = styled.li`
    display: inline;
`;

interface StyledProps {
  filter: FilterType;
  selectedFilter: FilterType;
}

const StyledLink = styled.a<StyledProps>`
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;

    &:hover {
        cursor: pointer;
        border-color: rgba(175, 47, 47, 0.1);
    }

    ${(props) => props.filter === props.selectedFilter
  && `border-color: rgba(175, 47, 47, 0.2);`
}
`;

const TodoFilter = ({ userId }: UserIdProps) => {
  const dispatch = useCustomDispatch();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(TodoItemFilter.ALL);

  const handleFilterChange = (filter: FilterType) => {
    dispatch(setFilter(filter));
    setSelectedFilter(filter);
  };

  // TODO: StyledLink 재사용성...?
  return (
    <Container>
      <TodoCountMolecule userId={userId} />
      <ListWrapper>
        <StyledLi>
          <StyledLink
            filter={TodoItemFilter.ALL}
            selectedFilter={selectedFilter}
            onClick={() => handleFilterChange(TodoItemFilter.ALL)}
          >
            전체보기
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink
            filter={TodoItemFilter.ACTIVE}
            selectedFilter={selectedFilter}
            onClick={() => handleFilterChange(TodoItemFilter.ACTIVE)}
          >
            해야할 일
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink
            filter={TodoItemFilter.COMPLETED}
            selectedFilter={selectedFilter}
            onClick={() => handleFilterChange(TodoItemFilter.COMPLETED)}
          >
            완료한 일
          </StyledLink>
        </StyledLi>
      </ListWrapper>
    </Container>
  );
};

export default TodoFilter;
