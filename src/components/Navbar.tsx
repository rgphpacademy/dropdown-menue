import React, { useState } from "react";
import DropDown from "./DropDown";
import {planets} from '../data';

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectPlanet, setSelectPlanet] = useState<string>();


  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * planet name from the child component
   *
   * @param planet  The selected planet
   */
  const planetSelection = (planet: string): void => {
     setSelectPlanet(planet);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectPlanet
            ? `You selected ${selectPlanet} `
            : "Select your travel destination"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectPlanet ? "Select: " + selectPlanet : "Select planet"} </div>
        {showDropDown && (
          <DropDown
            planets={planets()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            planetSelection={planetSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
