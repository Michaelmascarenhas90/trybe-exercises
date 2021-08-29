import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/index';
import ColumnOrder from './ColumnOrder';

// projeto realizado com ajuda de colegas e consulta a branchs do Aurelio scarante e Leticia
function Filters() {
  const INITIAL_STATE = {
    column: 'rotation_period',
    comparison: 'maior que',
    value: '',
  };
  const { filters, setFilters, columns, setColumns } = useContext(PlanetsContext);
  const [filtersByNumber, setFiltersByNumber] = useState(INITIAL_STATE);

  const changeFilterName = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters, filterByName: { name: value },
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFiltersByNumber({
      ...filtersByNumber,
      [name]: value,
    });
  };

  const removeFilters = (column) => {
    const { filterByNumericValues } = filters;
    setColumns([...columns, column]);
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues.filter((item) => (
        item.column !== column
      )),
    });
  };

  function handleClick() {
    const { filterByNumericValues } = filters;
    const { column } = filtersByNumber;
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, filtersByNumber],
    });
    setColumns(columns.filter((value) => value !== column));
    setFiltersByNumber(INITIAL_STATE);
  }

  function renderFiltersOptions() {
    const { filterByNumericValues } = filters;
    return (
      <div>
        { filterByNumericValues.map((item) => {
          const { column, comparison, value } = item;
          if (column === '') return;
          return (
            <div key={ column } data-testid="filter">
              <span>{`${column} ${comparison} ${value}`}</span>
              <button
                type="button"
                onClick={ () => removeFilters(column) }
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section>
      <div>
        <label htmlFor="name">
          Pesquisar por nome:
          <input
            type="text"
            name="name"
            data-testid="name-filter"
            onChange={ changeFilterName }
          />
        </label>
        <select
          data-testid="column-filter"
          onChange={ handleChange }
          name="column"
          value={ filtersByNumber.column }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          onChange={ handleChange }
          data-testid="comparison-filter"
          name="comparison"
          value={ filtersByNumber.comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          onChange={ handleChange }
          value={ filtersByNumber.value }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
      { renderFiltersOptions() }
      <ColumnOrder />
    </section>
  );
}

export default Filters;
