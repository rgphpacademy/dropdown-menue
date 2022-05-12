import React, { useEffect, useState } from 'react';
import styles from '../Styles/dropdown.module.scss';

type DropDownProps = {
  planets: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  planetSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  planets,
  planetSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the planet name
   * back to the parent component
   *
   * @param planet  The selected palnet
   */
  const onClickHandler = (planet:string): void => {
    planetSelection(planet);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {planets.map(
          (planet: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(planet);
                }}
              >
                {planet}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
