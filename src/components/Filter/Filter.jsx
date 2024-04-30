import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';
import { filterContact } from '../../redux/filters/filtersSlice';
import { selectFilter } from '../../redux/filters/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);

  const onChange = e => {
    const { value } = e.currentTarget;

    dispatch(filterContact(value));
  };

  return (
    <FilterContainer>
      <label htmlFor="filter">Find contacts by name</label>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterContainer>
  );
};
